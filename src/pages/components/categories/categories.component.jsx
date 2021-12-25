import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import shopApis from "../../../api.js";
import axios from "axios";
import './categories.styles.scss';

export default function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = async () => {
        try{
            const { data } = await axios.get(shopApis.products + 'categories');
            setCategories(data);
        } catch(err) {
            console.log(err);
        }
    }

    const renderCategories = () => {
        return (
            <div>
                {categories.map((categoryName) => {
                    return (
                        <Link key={categoryName} to={categoryName}>
                            <span className="category-name ui button">{categoryName}</span>
                        </Link>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="categories">
            {renderCategories()}
        </div>
    );

}