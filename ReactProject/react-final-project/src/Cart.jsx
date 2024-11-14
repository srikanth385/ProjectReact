import { useDispatch, useSelector } from "react-redux";
import { addPurchase, clearCart, decrement, increment, remove } from "./Strore";
import { useState } from "react";

function Cart() {
        const cart = useSelector(state => state.cart);
        const dispatch = useDispatch();
    
        const [discountedAmount, setDiscountedAmount] = useState(0);
        const [couponCode, setCouponCode] = useState('');
        const [couponDiscount, setCouponDiscount] = useState(0);
    
        const handleApplyCoupon = () => {
            switch (couponCode) {
                case 'A10': setCouponDiscount(10); break;
                case 'A20': setCouponDiscount(20); break;
                case 'A30': setCouponDiscount(30); break;
                default: alert("Invalid coupon");
            }
        };
    
        const handleDiscount = (disValue) => {
            setDiscountedAmount(disValue);
        };
    
        const calculateTotal = () => {
            const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            const discount = total * (discountedAmount / 100);
            const discountCoupon = total * (couponDiscount / 100);
            const netAmount = total - discount - discountCoupon;
    
            return {
                total: parseFloat(total.toFixed(2)),
                discount: parseFloat(discount.toFixed(2)),
                netAmount: parseFloat(netAmount.toFixed(2)),
            };
        };
    
        const { total, discount, netAmount } = calculateTotal();
    
        const all = cart.map((item, index) => (
            <li key={index} className="cart-item">
                <div className="item-details">
                    <img src={item.image} alt={item.name} className="item-image" />
                    <div>
                        <span className="item-name">{item.name}</span>
                        <span className="item-price">${item.price}</span>
                        <span className="item-quantity">Qty: {item.quantity}</span>
                    </div>
                </div>
                <div className="item-actions">
                    <button onClick={() => dispatch(decrement(item.name))}>-</button>
                    <button onClick={() => dispatch(increment(item.name))}>+</button>
                    <button onClick={() => dispatch(remove(item.name))}>Remove</button>
                </div>
            </li>
        ));
    
        const handleHistory = () => {
            const purchase = new Date().toLocaleDateString(); 
            const purchaseHistory = {
                date: purchase,
                items: [...cart],
                totalAmount: Number(netAmount)
            };
    
            dispatch(clearCart());
            dispatch(addPurchase(purchaseHistory));
        };
    
        return (
            <div className="cart-container">
                {cart.length > 0 ? (
                    <div className="cart-content">
                        <ul className="cart-items">
                            {all}
                        </ul>
                        <div className="cart-summary">
                            <p>Total Before Discount: ${total}</p>
                            <div className="discount-buttons">
                                <button onClick={() => handleDiscount(10)}>Apply 10% Discount</button>
                                <button onClick={() => handleDiscount(20)}>Apply 20% Discount</button>
                                <button onClick={() => handleDiscount(30)}>Apply 30% Discount</button>
                            </div>
                            <input
                                type="text"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                placeholder="Enter Coupon Code"
                                className="coupon-input"
                            />
                            <button onClick={handleApplyCoupon} className="apply-coupon-button">Apply Coupon</button>
                            <p>Discount Percentage: {discountedAmount}%</p>
                            <p>Discount Amount: ${discount}</p>
                            <p>Final Amount to Pay: ${netAmount}</p>
                            <button onClick={handleHistory} className="history-button">Add to History</button>
                        </div>
                    </div>
                ) : (
                    <div className="empty-cart">
                        <h2 style={{color:"red"}}>"Oops! Looks like your cart is empty. Let's fill it up with some delicious items!"</h2>
                        <img
                            src="public/cart1.jpg"
                            alt="Vegetables and Herbs Basket"
                            className="empty-cart-image"
                        />
                    </div>
                )}
            </div>
        );
    }





export default Cart;