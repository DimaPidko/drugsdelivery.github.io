/* eslint-disable react/prop-types */
import styles from './CartForm.module.sass';

const CartForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                required
                onChange={props.handleInputChange}
                value={props.userOrder.name}
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                required
                onChange={props.handleInputChange}
                value={props.userOrder.email}
            />
            <label htmlFor="phone">Phone</label>
            <input
                type="tel"
                id="phone"
                required
                onChange={props.handleInputChange}
                value={props.userOrder.phone}
            />
            <label htmlFor="address">Address</label>
            <input
                type="text"
                id="address"
                required
                onChange={props.handleInputChange}
                value={props.userOrder.address}
            />
            <button>SUBMIT</button>
        </form>
    );
};

export default CartForm;
