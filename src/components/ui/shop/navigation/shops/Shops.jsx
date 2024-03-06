/* eslint-disable react/prop-types */
const Shops = (props) => {
    return (
        <>
            {props.shopsList.length === 0 ? (
                <h2>Not Found Shops</h2>
            ) : (
                <ul>
                    {props.shopsList.map((shop) => (
                        <li key={shop.id}>
                            <button onClick={() => props.onChangeCurrentShop(shop.link)}>
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
