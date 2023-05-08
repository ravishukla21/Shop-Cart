// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';

import Payment from './Pages/Payment';

import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import Top from './Components/Top';

import ProductPage from './Pages/ProductPage';
import MainRoutes from './Pages/MainRoutes';




function App() {
  return (
    <div className="App">
     {/* <HomePage/> */}
     <Top/>
      <Navbar/>
{/* <HomePage/> */}
      {/* <Payment/> */}
      
<MainRoutes/>
  

      <Footer/>
    </div>
  );
}

export default App;
