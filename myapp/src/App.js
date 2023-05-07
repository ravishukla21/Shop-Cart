// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';

import Authpage from './Pages/Authpage';
import MidLast from './Components/Mid/MidLast';
import Payment from './Pages/Payment';
import OnePage from './Components/Mid/OnePage';




function App() {
  return (
    <div className="App">
     {/* <HomePage/> */}
     <Top/>
      <Navbar/>

      <Payment/>
      

      <ProductPage/>

      <Footer/>
    </div>
  );
}

export default App;
