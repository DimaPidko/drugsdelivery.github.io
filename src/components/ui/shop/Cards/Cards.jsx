/* eslint-disable react/prop-types */
const Cards = (props) => {
    return (
        <section>
            {props.currentCards.length === 0 ? (
                <h2>Not found anything</h2>
            ) : (
                <ul>
                    {props.currentCards.map((cost) => (
                        <li key={cost.id}>
                            <div>
                                <img
                                    src={cost.img}
                                    alt={cost.drug_name}
                                />
                            </div>
                            <h2>{cost.drug_name}</h2>
                            <h3>Price: {cost.price}</h3>
                            <button
                                onClick={() =>
                                    props.addToCart({
                                        id: cost.id,
                                        store_name: cost.store_name,
                                        drug_name: cost.drug_name,
                                        price: cost.price,
                                        img: cost.img,
                                    })
                                }>
                                Add to Cart
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default Cards;
