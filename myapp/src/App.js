import './App.css';
import Footer from './Components/Footer';
import Top from './Components/Top';
import Navbar from './Components/Navbar';
import MainRoutes from './Pages/MainRoutes';


function App() {


  return (
    <div className="App">
      <Top/>
      <Navbar />
      <MainRoutes />
      <Footer />
      
    </div>
  );
}

export default App;
