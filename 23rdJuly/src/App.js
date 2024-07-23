import logo from './logo.svg';
import './App.css';
import Menu from "./Menu";
import Login from './Login';
import Footer from './Footer';
import Container from './Container';
import Counter from './Counter';
import Todo from './Todo';
import Hobbies from './Assignment';
import Add from './2nd';
import Trigonometry from './3rd';
import ObjectList from './4th';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import GenderAPI from './GenderAPI';
import Products from './Products';
import Gender from './Gender';

function App() {
  // return (
  //   <div className="App">
  //     <header>
  //       <Menu/>
  //     </header>

  //     <main>
  //       <Hobbies/>
  //       <Add/>
  //       <Trigonometry/>
  //       <ObjectList/>
  //     </main>

  //     <footer>
  //       <Footer/>
  //     </footer> 
  //   </div>
  // );

    // return(
    //   <div className="App">
    //     <header>
    //       <Menu/>
    //     </header>

    //     <h1>Main Page</h1>
    //     <BrowserRouter>
    //       <Link to="/Todo">Todo</Link>
    //       <Link to="/Login">Login</Link>
    //       <br/>

    //       <Routes>
    //         <Route path="/Todo" element={<Todo/>}/>
    //         <Route path="/Login" element={<Login/>}/>
    //       </Routes>
    //     </BrowserRouter>

    return(
      <div className="App">
        {/* <header>
          <Menu/>
        </header>

        <h1>Main Page</h1>
        <BrowserRouter>
          <Link to="/Todo">Todo</Link>
          <Link to="/login/Lets-Login/123">Login</Link>
          <br/>

          <Routes>
            <Route path="/Todo" element={<Todo/>}/>
            <Route path="/login/:title/:tokenId" element={<Login/>}/>
          </Routes>
        </BrowserRouter>  
        Go to Login Page and change */}
        <header>
          <Menu/>
        </header>
        <Gender/>
        <Products/>
        <footer>
        <Footer/>
       </footer> 
      </div>
    );
}

export default App;
