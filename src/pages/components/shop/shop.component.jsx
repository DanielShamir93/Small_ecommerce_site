import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import shopApis from "../../../api.js";
import axios from "axios";

export default function Shop() {

    const [shopItems, setShopItems] = useState([]);

    useEffect(() => {
        getShopItems();
    }, [])

    const getShopItems = async () => {
        try{
            const { data } = await axios.get(shopApis.products);
            setShopItems(data);
        } catch(err) {
            console.log(err);
        }
    }

    const addToCart = (item) => {
        localStorage.setItem(`cart_${item.id}`, JSON.stringify(item));
    }

    const renderShopItems = () => {
        return (
            shopItems.map((item) => {
                return (
                    <div key={item.id}>
                        <Link to={`/shop/${item.id}`}>
                            <img src={item.image} width="200" alt="item-image" />
                            <div>
                                <span>{item.title}</span>
                                <span>{`${item.price}$`}</span>
                            </div>
                        </Link>
                        <button onClick={() => {addToCart(item)}}>Add To Cart</button>
                    </div>
                );
            })
        );
    }

    return (
        <div>
            {renderShopItems()}
        </div>
    );

}