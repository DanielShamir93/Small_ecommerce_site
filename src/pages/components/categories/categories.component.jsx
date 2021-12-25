import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import shopApis from "../../../api.js";
import axios from "axios";

export default function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = async () => {
        try{
            const { data } = await axios.get(shopApis.products + 'categories');
            console.log(data)
            setCategories(data);
        } catch(err) {
            console.log(err);
        }
    }

    const renderCategories = () => {
        return (
            <div>
                {categories.map((categoryName) => {
                    return <Link to={categoryName}>{categoryName}</Link>
                })}
            </div>
        );
    }

    return (
        <React.Fragment>
            {renderCategories()}
        </React.Fragment>
    );

}