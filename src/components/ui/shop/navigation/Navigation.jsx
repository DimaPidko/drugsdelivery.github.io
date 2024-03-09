/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Shops from './shops/Shops';
import { useState } from 'react';

import admin from '../../../admin.json';

const Navigation = (props) => {
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
            <ul>
                <Link to="/">Shop</Link>
                <Link to="/cart">Cart</Link>
            </ul>
            {props.isAdmin ? (
                <>
                    <h2>Hello Admin</h2>
                    <form action="createDrugs">
                        <input
                            type="text"
                            placeholder="Enter name of drug"
                        />
                        <input
                            type="text"
                            placeholder="Enter name of shop"
                        />
                        <input
                            type="text"
                            placeholder="Enter link shop (if drugShop is 'Drug 24' link is 'drug24')"
                        />
                        <input
                            type="text"
                            placeholder="Enter price"
                        />
                        <button>Create drug</button>
                    </form>
                    <button onClick={() => props.setIsAdmin(false)}>Log Out</button>
                </>
            ) : (
                <div>
                    <h3>Log In</h3>
                    <form onSubmit={onLogIn}>
                        <input
                            type="text"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button>Login</button>
                    </form>
                </div>
            )}

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
