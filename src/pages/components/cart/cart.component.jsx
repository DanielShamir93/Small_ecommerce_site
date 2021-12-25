import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { decrementAction } from '../../../store/actions/actions.js';
import './cart.styles.scss';

export default function Cart() {

    const [cartItems, setCartItems] = useState({});
    const [removedItem, setRemovedItem] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        let cart = {};
        for (let item in localStorage) {
            if(item.startsWith('cart')) {
                cart[item] = JSON.parse(localStorage[item]);
            }
        }
        setCartItems(cart);
    }, [removedItem])


    const removeFromCart = (id) => {
        const cart = cartItems;
        
        if(cart.hasOwnProperty(id)) {
            delete cart[id];
            setCartItems(cart);
            localStorage.removeItem(id);
            dispatch(decrementAction(1));
            setRemovedItem(id);
        }
    }

    const renderCartItems = () => {
        return Object.entries(cartItems).map((itemEntries) => {
            let itemId = itemEntries[0];
            let item = itemEntries[1];
            return (
                <div className="item" key={itemId}>
                    <img src={item.image} width="200" alt="item-image" />
                    <div>
                        <span>{item.title}</span>
                        <span>{`${item.price}$`}</span>
                    </div>
                    <button 
                        onClick={() => {
                            removeFromCart(itemId)
                        }}
                    >Remove from Cart</button>
                </div>
            );
        })
    }

    return (
        <div className="Cart-container">
            <div className="cart">
                {renderCartItems()}
            </div>
        </div>
    );

}