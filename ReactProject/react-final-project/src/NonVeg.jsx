import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProducts } from "./Strore";
import { useEffect } from "react";

function NonVeg()
{
  
    const vegProducts = useSelector(state => state.products.nonVeg);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
    const items = vegProducts.map((product, index) => (
      <div key={index} className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <button onClick={() => dispatch(addToCart(product))} className="add-cart-button">Add to Cart</button>
      </div>
    ));
  
    return (
      <div className="product-list">
        {items}
      </div>
    );
  };

export default NonVeg;