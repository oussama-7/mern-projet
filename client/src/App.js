import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home1 from "./pages/home1/Home1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home1" element={<Home1/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;