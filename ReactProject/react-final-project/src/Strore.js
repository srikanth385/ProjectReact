import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { thunk } from "redux-thunk";

// const productSlice = createSlice({
//     name:"products",
//     initialState:{

//                     veg:[
//                         {name:"Potato", price:50.00},
//                         {name:"Brinjal", price:100.00},
//                         {name:"Tamato", price:50.00},
//                         {name:"Pea", price:80.00}
//                     ],
//                     nonveg:[
//                         {name:"Chicken", price:250.00,image1:"public/aboutus.avif"},
//                         {name:"Fish" , price:150.00},
//                         {name:"Mutton" , price:800.00},
//                         {name:"Egg" , price:120.00}


//                     ]
//     }, 
// }
// )

//axios getproducts
export const getProducts = async () => {
    try {
        const fetchResponse = await axios.get("http://localhost:1919/getProducts");
        console.log("Fetched products data:", fetchResponse.data);

        return fetchResponse.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const response = await getProducts();  // Fetch products from API
  
      // Filter the items based on category
      const veg = response.filter(item => item.category === 'veg');
      const nonVeg = response.filter(item => item.category === 'nonveg');
      console.log(nonVeg+"helo")
  
      // Return the filtered items
      return { veg, nonVeg };
    }
  );

//   3. Creae the product sclice 
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    veg: [],
    nonVeg: [],
    status: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.veg = action.payload.veg || [];
        state.nonVeg = action.payload.nonVeg || [];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});



const cartSclice = createSlice
(
    {
        name:"cart",
        initialState:[], 
        reducers:{
            addToCart:(state,action)=>{
                const status = state.find(item=>item.name===action.payload.name)
            
            if (status) {
                status.quantity +=1 
            } else {
                state.push({...action.payload,quantity:1})
            }
        },
        increment: (state, action) => {
            const item = state.find(item => item.name === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrement: (state, action) => {
            const item = state.find(item => item.name === action.payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    return state.filter(item => item.name !== action.payload);
                }
            }
        },
        remove: (state, action) => {
            return state.filter(item => item.name !== action.payload);
        },
        clearCart: () => {
            return [];
          }
          
       
    }  
    }
)

const purchaseHistorySlice = createSlice({
  name: 'purchaseHistory',
  initialState: [],
  reducers: {
    addPurchase: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const{addPurchase} = purchaseHistorySlice.actions;
export const{addToCart,increment,decrement,remove,clearCart} = cartSclice.actions;

const store = configureStore({
    reducer:{
        products : productsSlice.reducer,
        cart: cartSclice.reducer,
        purchaseHistory : purchaseHistorySlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export default store;
