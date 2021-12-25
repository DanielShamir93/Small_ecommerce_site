import { FcShop } from 'react-icons/fc';
import { FaShoppingCart } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import NavbarButton from '../navbarButton/navbarButton.component';
import { FcList, FcHome } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAction } from '../../store/actions/actions.js';

export default function Header() {

    const dispatch = useDispatch();
    const cartState = useSelector((state) => {
        return state.cart;
    });

    useEffect(() => {
        let counter = 0;
        for (let item in localStorage) {
            if(item.startsWith('cart')) {
                counter++;
            }
        }
        dispatch(setAction(counter));
    }, [])

    return (
        <div className="Header">
            <div className="left-header">
                <Link to="/" className="navbar-link" style={{textDecoration: 'none'}}>
                    <NavbarButton className="navbar-button home" term="" reactIcon={<FcHome className="react-icon"/>} />
                </Link>
            </div>
            <div className="right-header">
                <Link to="/shop" className="navbar-link" style={{textDecoration: 'none'}}>
                    <NavbarButton className="navbar-button shop" term="Shop" reactIcon={<FcShop className="react-icon"/>} />
                </Link>
                <Link to={"/categories"} className="navbar-link" style={{textDecoration: 'none'}}>
                    <NavbarButton className="navbar-button categories" term="Categories" reactIcon={<FcList className="react-icon"/>} />
                </Link>
                <NavbarButton className="navbar-button sign-in" term="Sign in" reactIcon={<CgProfile className="react-icon"/>} />
                <Link to="/cart" className="navbar-link" style={{textDecoration: 'none'}}>
                    <span className="cart-counter">{cartState}</span>
                    <NavbarButton className="navbar-button cart" term="" reactIcon={<FaShoppingCart className="react-icon"/>} />
                </Link>
            </div>
        </div>
    );

}