/* eslint-disable react/prop-types */

import Shops from './shops/Shops';
import { useState } from 'react';

// import styles from './Header.module.sass';

import admin from '../../../admin.json';
import LogInForm from './logInForm/LogInForm';
import NavButton from '../../navButton/NavButton';

const Header = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onLogIn = (e) => {
        e.preventDefault();
        const trueLogin = admin[0].login;
        const truePass = admin[0].password;
        if (login === trueLogin && password === truePass) {
            setLogin('');
            setPassword('');
            props.setIsAdmin(true);
        } else {
            alert('DON`T DO IT');
        }
    };

    return (
        <nav>
            <h2>Shops</h2>
            <NavButton />
            <LogInForm
                isAdmin={props.isAdmin}
                setIsAdmin={props.setIsAdmin}
                onLogIn={onLogIn}
                setLogin={setLogin}
                setPassword={setPassword}
                login={login}
                password={password}
            />
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

export default Header;
