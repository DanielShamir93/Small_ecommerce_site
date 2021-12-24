import { useState, useEffect } from 'react';

export default function Cart() {

    const [cartItems, setCartItems] = useState({});
    const [removedItemId, setRemovedItemId] = useState(0);

    useEffect(() => {
        let cart = {};
        for (let item in localStorage) {
            if(item.startsWith('cart')) {
                cart[item] = JSON.parse(localStorage[item]);
            }
        }
        setCartItems(cart);
    }, [removedItemId])


    const removeFromCart = (id) => {
        const cart = cartItems;
        delete cart[id];
        setCartItems(cart);
        localStorage.removeItem(id);
        setRemovedItemId(id);
    }

    const renderCartItems = () => {
        return Object.entries(cartItems).map((itemEntries) => {
            let itemId = itemEntries[0];
            let item = itemEntries[1];
            return (
                <div key={itemId}>
                    <img src={item.image} width="200" alt="item-image" />
                    <div>
                        <span>{item.title}</span>
                        <span>{`${item.price}$`}</span>
                    </div>
                    <button onClick={() => {removeFromCart(itemId)}}>Remove from Cart</button>
                </div>
            );
        })
    }

    return (
        <div>
            {renderCartItems()}
        </div>
    );

}