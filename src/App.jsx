import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './components/NotFound';
import './css/App.css';
import Checkout from './components/Checkout';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <main className="container page-wrapper mt-5 pt-3">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}
export default App;