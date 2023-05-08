// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import HomePage from "./Pages/HomePage"
import Navbar from './Components/Navbar';

import Top from './Components/Top';





function App() {
  return (
    <div className="App">
     <Top/>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
