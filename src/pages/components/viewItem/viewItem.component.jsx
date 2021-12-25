import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { incrementAction } from '../../../store/actions/actions.js';
import shopApis from "../../../api.js";
import axios from "axios";
import './viewItem.styles.scss';

export default function ViewItem() {

    const [item, setItem] = useState('');
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        getItem();
    }, [])

    const getItem = async () => {
        try{
            const { data } = await axios.get(shopApis.products + id);
            setItem(data);
        } catch(err) {
            console.log(err);
        }
    }

    const addToCart = () => {
        if (!localStorage.getItem(`cart_${item.id}`)) {
            // Item is not in localStorage
            localStorage.setItem(`cart_${item.id}`, JSON.stringify(item));
            dispatch(incrementAction(1));
        }
    }

    const renderItem = () => {
        return (
            <div className="item">
                <img className="item-image" src={item.image} alt="item-image" />
                <h2 className="item-title">{item.title}</h2>
                <p className="item-description">{item.description}</p>
                <span className="item-price">{`${item.price}$`}</span>
                <button className="add-to-cart" onClick={addToCart}>Add To Cart</button>
            </div>
        );
    }

    return (
        <div className="item-container">
            {renderItem()}
        </div>
    );

}