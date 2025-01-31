
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Shops from './Pages/Shops';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import {LoginSignUp} from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shops/>}/>
        <Route path='/mens' element={<ShopCategory category="men" banner={men_banner}/>}/>
        <Route path='/womens' element={<ShopCategory category="women" banner={women_banner}/>}/>
        <Route path='/kids' element={<ShopCategory category="kid" banner={kid_banner}/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
