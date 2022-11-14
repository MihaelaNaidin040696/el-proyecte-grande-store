// import './App.css';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Cart from './pages/Cart';
import Clothes from './pages/Clothes';
import Sneakers from './pages/Sneakers';

function App() {
  return (
    <Layout>
    <Routes>
      <Route path='/sneakers' element={<Sneakers />} />
      <Route path='/clothes' element={<Clothes />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    </Layout>
  );
}

export default App;
