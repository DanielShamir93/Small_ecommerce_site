import './styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header.component';
import Home from './pages/components/home/home.component';
import Shop from './pages/components/shop/shop.component';
import ViewItem from './pages/components/viewItem/viewItem.component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={ Home } />
        <Route path="/shop" exact component={ Shop } />
        <Route path="/shop/:id" exact component={ ViewItem } />
      
      </BrowserRouter>

    </div>
  );
}

export default App;
