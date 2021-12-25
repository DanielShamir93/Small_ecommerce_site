import './styles/reset.css';
import './styles/normalize.css';
import './styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Home from './pages/components/home/home.component';
import Shop from './pages/components/shop/shop.component';
import ViewItem from './pages/components/viewItem/viewItem.component';
import cart from './pages/components/cart/cart.component';
import Categories from './pages/components/categories/categories.component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={ Home } />
        <Route path="/shop" exact component={ Shop } />
        <Route path="/shop/:id" exact component={ ViewItem } />
        <Route path="/cart" exact component={ cart } />
        <Route path="/categories" exact component={ Categories } />
      </BrowserRouter>

    </div>
  );
}

export default App;
