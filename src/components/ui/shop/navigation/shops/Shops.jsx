/* eslint-disable react/prop-types */
import styles from './Shops.module.sass';

const Shops = (props) => {
    return (
        <>
            {props.shopsList.length === 0 ? (
                <h2>Not Found Shops</h2>
            ) : (
                <ul className={styles.wrapper}>
                    {props.shopsList.map((shop) => (
                        <li
                            key={shop.id}
                            className={styles.wrapper__item}>
                            <button
                                onClick={() => props.onChangeCurrentShop(shop.link)}
                                className={styles.wrapper__item_btn}>
                                {shop.name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Shops;
