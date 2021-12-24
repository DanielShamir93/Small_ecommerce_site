import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import shopApis from "../../../api.js";
import axios from "axios";

export default function ViewItem() {

    const [item, setItem] = useState('');
    const { id } = useParams();

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

    const renderItem = () => {
        return (
            <div>
                <img src={item.image} width="200" alt="item-image" />
                <div>
                    <span>{item.title}</span>
                    <p>{item.description}</p>
                    <span>{`${item.price}$`}</span>
                </div>
            </div>
            
        );
    }

    return (
        <div>
            {renderItem()}
        </div>
    );

}