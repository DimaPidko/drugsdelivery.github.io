import Cards from './Cards/Cards';
import Navigation from './navigation/Navigation';

/* eslint-disable react/prop-types */
const Shop = (props) => {
    return (
        <main>
            <Navigation
                shopsList={props.shopsList}
                onChangeCurrentShop={props.onChangeCurrentShop}
                onChangeCurrentFilter={props.onChangeCurrentFilter}
                currentFilter={props.currentFilter}
            />
            <Cards
                currentCards={props.currentCards}
                addToCart={props.addToCart}
            />
        </main>
    );
};

export default Shop;
