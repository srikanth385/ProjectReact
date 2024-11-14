import React from 'react';
import { useSelector } from 'react-redux';

export default function PurchaseHistory() {
  const purchaseHistory = useSelector(state => state.purchaseHistory);

  return (
    <div className="swiggy-history-container">
      <h2 className="swiggy-history-title">Your Orders</h2>
      {purchaseHistory.length === 0 ? (
        <p className="swiggy-no-history">You have no orders yet.</p>
      ) : (
        <div className="swiggy-purchase-list">
          {purchaseHistory.map((purchase, index) => (
            <div key={index} className="swiggy-purchase-card">
              <div className="swiggy-purchase-header">
                <p className="swiggy-purchase-date">Ordered on: {purchase.date}</p>
                <p className="swiggy-total-amount">₹{purchase.totalAmount.toFixed(2)}</p>
              </div>
              {purchase.items && purchase.items.length > 0 ? (
                <ul className="swiggy-item-list">
                  {purchase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="swiggy-item">
                      <span className="swiggy-item-name">{item.name}</span>
                      <span className="swiggy-item-price">₹{item.price} x {item.quantity}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="swiggy-no-items">No items in this order.</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

}
