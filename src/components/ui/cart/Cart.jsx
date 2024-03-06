/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CartItems from './CartItems';

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
            <ul>
                <Link to="/">Shop</Link>
                <Link to="/cart">Cart</Link>
            </ul>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    id="name"
                    required
                    onChange={props.handleInputChange}
                />
                <input
                    type="email"
                    id="email"
                    required
                    onChange={props.handleInputChange}
                />
                <input
                    type="tel"
                    id="phone"
                    required
                    onChange={props.handleInputChange}
                />
                <input
                    type="text"
                    id="address"
                    required
                    onChange={props.handleInputChange}
                />
                <button>SUBMIT</button>
            </form>
            <CartItems
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
            />
        </>
    );
};

export default Cart;
