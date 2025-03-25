import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartToggle = ({ amount, INCR, DECR }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={DECR}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={INCR}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartToggle;
