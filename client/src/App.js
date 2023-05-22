import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Home1 from './pages/home1/Home1';
import HomeScreen from './components/screens/HomeScreen';
import Login from './pages/login/Login';
import Stage1 from './components/Stage1/Stage1';
import StageForm from './components/Stage1/StageForm';
import Pin from './components/Stage1/Pin';
import Register from './pages/register/Register';
import ProductScreen from './components/screens/ProductScreen';
import CartScreen from './components/screens/CartScreen';

import ShippingAddressScreen from './components/screens/ShippingAddressScreen';
import PaymentMethodScreen from './components/screens/PaymentMethodScreen';
import PlaceOrderScreen from './components/screens/PlaceOrderScreen';
import OrderScreen from './components/screens/OrderScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/product/:slug" element={<ProductScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path="/Stage1" element={<Stage1 />} />
        <Route path="/StageForm" element={<StageForm />} />
        <Route path="/Pin" element={<Pin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shipping" element={<ShippingAddressScreen />} />
        <Route path="/payment" element={<PaymentMethodScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
