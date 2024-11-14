import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProducts } from "./Strore";
import { useEffect } from "react";
function Veg(){
    const vegProducts = useSelector(state => state.products.veg);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
    const items = vegProducts.map((product, index) => (
      <div key={index} className="card">
        <img src={product.image} alt={product.name} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-price">${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))} className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    ));
  
    return (
      <div className="card-container">  
        {items}
      </div>
    );
  }

export default Veg;