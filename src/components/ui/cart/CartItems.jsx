/* eslint-disable react/prop-types */
const CartItems = (props) => {
    return (
        <ul>
            {props.cartItems.length === 0 ? (
                <h2>Cart is empty</h2>
            ) : (
                props.cartItems.map((item) => (
                    <li key={item.id}>
                        <p>{item.drug_name}</p>
                        <img
                            src={item.img}
                            alt={item.drug_name}
                        />
                        <p>Price: ${item.price * item.quantity}</p>
                        <p>Quantity: {item.quantity}</p>
                        <div>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                    props.updateQuantity(
                                        item.id,
                                        parseInt(e.target.value, 10)
                                    )
                                }
                            />
                        </div>
                        <button onClick={() => props.removeFromCart(item.id)}>
                            Remove
                        </button>
                    </li>
                ))
            )}
        </ul>
    );
};

export default CartItems;
