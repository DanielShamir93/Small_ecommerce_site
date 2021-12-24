import { FcShop } from 'react-icons/fc';
import { FaShoppingCart } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import NavbarButton from '../navbarButton/NavbarButton.component';
import { FcList, FcHome } from 'react-icons/fc';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <div>
            <div className="left-header">
                <Link to="/">
                    <NavbarButton className="navbar-button home" term="" reactIcon={<FcHome />} />
                </Link>
            </div>
            <div className="right-header">
                <Link to="/shop">
                    <NavbarButton className="navbar-button shop" term="Shop" reactIcon={<FcShop />} />
                </Link>
                <NavbarButton className="navbar-button categories" term="Categories" reactIcon={<FcList />} />
                <NavbarButton className="navbar-button sign-in" term="Sign in" reactIcon={<CgProfile />} />
                <NavbarButton className="navbar-button cart" term="" reactIcon={<FaShoppingCart />} />
            </div>
        </div>
    );

}