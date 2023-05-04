import logo from './logo.svg';
import './App.css';
import Top from './Components/Top';
import Navbar from './Components/Navbar';
import ProductCard from './Components/ProductCard';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Top/>
      <Navbar/>
      <ProductCard/>
      
      <Footer/>

    </div>
  );
}

export default App;
