import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { incrementAction } from '../../../store/actions/actions.js';
import shopApis from "../../../api.js";
import axios from "axios";

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
            <div>
                <img src={item.image} width="200" alt="item-image" />
                <div>
                    <span>{item.title}</span>
                    <p>{item.description}</p>
                    <span>{`${item.price}$`}</span>
                </div>
                <button onClick={addToCart}>Add To Cart</button>
            </div>
        );
    }

    return (
        <React.Fragment>
            {renderItem()}
        </React.Fragment>
    );

}