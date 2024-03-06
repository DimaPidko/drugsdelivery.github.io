/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Shops from './shops/Shops';
const Navigation = (props) => {
    return (
        <nav>
            <h2>Shops</h2>
            <ul>
                <Link to="/">Shop</Link>
                <Link to="/cart">Cart</Link>
            </ul>
            <Shops
                shopsList={props.shopsList}
                onChangeCurrentShop={props.onChangeCurrentShop}
            />
            <select
                name="card_filter"
                id="card_filter"
                value={props.currentFilter}
                onChange={(e) => props.onChangeCurrentFilter(e.target.value)}>
                <option value="price">Sort by Price(from more)</option>
                <option value="letter">Sort by Letter</option>
            </select>
        </nav>
    );
};

export default Navigation;
