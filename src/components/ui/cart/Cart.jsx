/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CartItems from './CartItems';
import CartForm from './cartForm/CartForm';
import NavButton from '../navButton/NavButton';

const Cart = (props) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    const removeFromCart = (productId) => {
        setCartItems((prevCart) => {
            const updatedCart = prevCart.filter((item) => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const updateQuantity = (productId, newQuantity) => {
        setCartItems((prevCart) => {
            const updatedCart = prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            );
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    return (
        <>
            <h2>Cart Page</h2>
            <NavButton />
            <CartForm
                handleSubmit={props.handleSubmit}
                handleInputChange={props.handleInputChange}
                userOrder={props.userOrder}
            />
            <CartItems
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
            />
        </>
    );
};

export default Cart;
