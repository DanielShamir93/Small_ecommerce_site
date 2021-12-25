import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import shopApis from "../../../api.js";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { incrementAction } from '../../../store/actions/actions.js';
import "./shop.styles.scss";

export default function Shop() {

    const [shopItems, setShopItems] = useState([]);
    const dispatch = useDispatch();

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
        if (!localStorage.getItem(`cart_${item.id}`)) {
            // Item is not in localStorage
            localStorage.setItem(`cart_${item.id}`, JSON.stringify(item));
            dispatch(incrementAction(1));
        }
    }

    const renderShopItems = () => {
        return (
            shopItems.map((item) => {
                return (
                    <div className="item" key={item.id}>
                        <Link className="item-content" to={`/shop/${item.id}`}>
                            <figure className="item-image" style={{backgroundImage: `url(${item.image})`}} ></figure>
                            <div className="item-details">
                                <span className="item-title">{item.title}</span>
                                <span className="item-price">{`${item.price}$`}</span>
                            </div>
                        </Link>
                        <button 
                            className="add-to-cart ui button green" 
                            onClick={() => { 
                                addToCart(item);
                            }}
                        >
                            Add To Cart
                        </button>
                    </div>
                );
            })
        );
    }

    return (
        <div className="shop">
            <div className="items-container">
                {renderShopItems()}
            </div>
        </div>
        
    );

}