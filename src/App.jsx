import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <main className="container page-wrapper mt-5 pt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}
export default App;