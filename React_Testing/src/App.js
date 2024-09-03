import logo from './logo.svg';
import './App.css';
import ClickTwo from './ClickTwo';
import Server from './Server';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <ClickTwo/> */}
      {/* <Server/> */}
      <h2>Learn react</h2>
      <h2>Great Day!</h2>
      <h1>default</h1>
      <ProductList/>
    </div>
  );
}

export default App;
