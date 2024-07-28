import logo from './logo.svg';
import './App.css';
import axios from "axios";
import DogAPI from './DogAPI';
import GenderAPI from './GenderAPI';
import ProductsAPI from './ProductsAPI';

function App() {
  return (
    <div className="App">
      <DogAPI/>
      <GenderAPI/>
      <ProductsAPI/>
    </div>
  );
}

export default App;
