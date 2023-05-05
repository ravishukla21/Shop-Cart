import logo from './logo.svg';
import './App.css';
import Top from './Components/Top';
import Navbar from './Components/Navbar';
import ProductCard from './Components/ProductCard';
import Footer from './Components/Footer';
import Authpage from './Pages/Authpage';
import MidLast from './Components/Mid/MidLast';

function App() {
  return (
    <div className="App">
      <Top/>
      <Navbar/>
      {/* <ProductCard/> */}
      <MidLast/>
      {/* <Authpage/> */}

      
      
      <Footer/>

    </div>
  );
}

export default App;
