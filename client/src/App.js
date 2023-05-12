import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import HomeScreen from './components/screens/HomeScreen';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ProductScreen from './components/screens/ProductScreen';
import CartScreen from './components/screens/CartScreen';
import SigninScreen from './components/screens/SigninScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/signin" element={<SigninScreen />} />
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
