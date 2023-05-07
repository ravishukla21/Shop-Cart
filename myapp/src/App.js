import logo from './logo.svg';
import './App.css';
import Top from './Components/Top';
import Navbar from './Components/Navbar';
import ProductCard from './Components/ProductCard';
import Footer from './Components/Footer';
import Authpage from './Pages/Authpage';
import MidLast from './Components/Mid/MidLast';
import Payment from './Pages/Payment';
import OnePage from './Components/Mid/OnePage';

function App() {
  return (
    <div className="App">
      <Top/>
      <Navbar/>
      {/* <ProductCard/> */}
      {/* <MidLast/> */}
      {/* <Authpage/> */}
{/* <OnePage/> */}
      <Payment/>
      
      <Footer/>

    </div>
  );
}

export default App;
