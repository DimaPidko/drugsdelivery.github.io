/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Shop from '../ui/shop/Shop';
import Cart from '../ui/cart/Cart';

const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <Shop
                            shopsList={props.shopsList}
                            currentShop={props.currentShop}
                            currentCards={props.currentCards}
                            onChangeCurrentShop={props.onChangeCurrentShop}
                            onChangeCurrentFilter={props.onChangeCurrentFilter}
                            currentFilter={props.currentFilter}
                            addToCart={props.addToCart}
                            isAdmin={props.isAdmin}
                            setIsAdmin={props.setIsAdmin}
                        />
                    }
                    path="/"
                />
                <Route
                    element={
                        <Cart
                            cartStored={props.cartStored}
                            handleInputChange={props.handleInputChange}
                            handleSubmit={props.handleSubmit}
                        />
                    }
                    path="/cart"
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
