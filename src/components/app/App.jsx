/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import axios from 'axios';

import Router from '../router/Router';

function App() {
    const [userOrder, setUserOrder] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });
    const [shops, setShops] = useState([]);
    const [currentShop, setCurrentShop] = useState('drugs24');
    const [currentCards, setCurrentCards] = useState([]);
    const [currentFilter, setCurrentFilter] = useState('price');
    const [cartStored, setCartStored] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUserOrder((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://sql303.infinityfree.com:3306/user_order',
                userOrder
            );

            console.log('Order submitted successfully:', response.data);

            setUserOrder({
                name: '',
                email: '',
                phone: '',
                address: '',
            });
        } catch (error) {
            console.error('Error submitting order:', error);
        }
    };

    const onChangeCurrentShop = (name) => {
        setCurrentShop(name);
    };

    const onChangeCurrentFilter = (filterValue) => {
        setCurrentFilter(filterValue);
    };

    const addToCart = (product) => {
        setCartStored((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);

            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCartStored(JSON.parse(storedCart));
        }

        localStorage.setItem('cart', JSON.stringify(cartStored));
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartStored));
    }, [cartStored]);

    const fetchShops = async () => {
        try {
            const getShops = await axios.get('http://sql303.infinityfree.com:3306/shops');
            setShops(getShops.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchDrugs = async () => {
        try {
            const getDrugs = await axios.get('http://sql303.infinityfree.com:3306/drugs');
            const filterGetDrugs = getDrugs.data.filter(
                (elem) => elem.store_name === currentShop
            );
            if (currentFilter === 'price') {
                filterGetDrugs.sort((a, b) => b.price - a.price);
            } else if (currentFilter === 'letter') {
                filterGetDrugs.sort((a, b) =>
                    a.drug_name.localeCompare(b.drug_name, undefined, {
                        sensitivity: 'base',
                    })
                );
            }
            setCurrentCards(filterGetDrugs);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchShops();
        fetchDrugs();
    }, [currentShop, currentFilter]);

    return (
        <Router
            shopsList={shops}
            currentShop={currentShop}
            currentCards={currentCards}
            onChangeCurrentShop={onChangeCurrentShop}
            onChangeCurrentFilter={onChangeCurrentFilter}
            currentFilter={currentFilter}
            addToCart={addToCart}
            cartStored={cartStored}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
        />
    );
}

export default App;
