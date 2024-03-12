import Cards from './Cards/Cards';
import Header from './navigation/Header';

import styles from './Shop.module.sass';

/* eslint-disable react/prop-types */
const Shop = (props) => {
    return (
        <main className={styles.wrapper}>
            <Header
                shopsList={props.shopsList}
                onChangeCurrentShop={props.onChangeCurrentShop}
                onChangeCurrentFilter={props.onChangeCurrentFilter}
                currentFilter={props.currentFilter}
                setIsAdmin={props.setIsAdmin}
                isAdmin={props.isAdmin}
            />
            <Cards
                currentCards={props.currentCards}
                addToCart={props.addToCart}
            />
        </main>
    );
};

export default Shop;
