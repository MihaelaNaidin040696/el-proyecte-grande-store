import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Cart from './pages/Cart';
import Clothes from './pages/Clothes';
import Sneakers from './pages/Sneakers';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/sneakers" element={<Sneakers />} />
                <Route path="/clothes" element={<Clothes />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Layout>
    );
}

export default App;