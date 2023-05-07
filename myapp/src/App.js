// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Top from './Components/Top';
// import Top from './Components/Top';
// import Navbar from './Components/Navbar';
// import ProductCard from './Components/ProductCard';
// import Footer from './Components/Footer';
// import Authpage from './Pages/Authpage';
// import MidLast from './Components/Mid/MidLast';
// import Discount from "./Components/Discount"
// import DiscountBanner from "./Components/DiscountBanner"
// import Brands from "./Components/Brands"
// import Categories from "./Components/Categories"
// import Slider from "./Components/Slider"
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
function App() {
  return (
    <div className="App">
     {/* <HomePage/> */}
     <Top/>
      <Navbar/>
      <ProductPage/>
      <Footer/>
    </div>
  );
}

export default App;
