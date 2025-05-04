import React, { useState } from 'react'
import FormatPrice from '../Helper/FormatPrice'
import CartToggle from './CartToggle'
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../styles/Context/CartContext';

const CartItem = ({
    Image, amount, color, id, maxStock, name, price
}) => {
    const { removeItem, setDECR, setINCR } = useCartContext();

    return (
        <div className='cart-heading grid grid-five-column '>
            <div className='cart-image--name'>
                <div>
                    <figure>
                        <img src={Image} alt={id} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                    <div className='color-div'>
                        <p>color: </p>
                        <div className='color-style' style={{ backgroundColor: color, color: color }}></div>
                    </div>
                </div>
            </div>
            <div className='cart-hide'>
                <p> <FormatPrice price={price} /></p>
            </div>
            <CartToggle amount={amount} INCR={() => setINCR(id)} DECR={() => setDECR(id)} />
            <div className='cart-hide'>
                <p> <FormatPrice price={price * amount} /></p>
            </div>

            <div onClick={() => removeItem(id)}>
                <FaTrash className='remove_icon' />
            </div>

        </div>
    )
}

export default CartItem