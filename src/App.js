import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Heros from './components/Heros';
import Product from './components/Product';


function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Heros/>
    <Product/>
    
    
    </div>
  );
}

export default App;
