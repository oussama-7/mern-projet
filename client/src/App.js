import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Home1 from './pages/home1/Home1';
import HomeScreen from './components/screens/HomeScreen';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ProductScreen from './components/screens/ProductScreen';
import CartScreen from './components/screens/CartScreen';
import SigninScreen from './components/screens/SigninScreen';
import ShippingAddressScreen from './components/screens/ShippingAddressScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/product/:slug" element={<ProductScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/signin" element={<SigninScreen />} />
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shipping" element={<ShippingAddressScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
