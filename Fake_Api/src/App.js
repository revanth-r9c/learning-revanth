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
import MyProfile from './Profile';
import Github from './github';
import Fake from './Fake';

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

    const LOGIN_URL="https://ascendion.com/login";
    let login_attempts=5;
    let menuData=[
      {title:"Home",path:"/"},
      {title:"Todos",path:"/Todo"},
      {title:"Login",path:"/login/:title/:tokenId"}
    ];
    function greet(){
      alert("Let's Login! You have a great day!");
    }
    return(
      <div className="App">
        {/* <header>
          <Menu/>
        </header>*/}

        {/* <h1>Main Page</h1>
        <BrowserRouter>
          <Menu menuData={menuData}/>

          <Routes>
            <Route path="/todo" element={<Todo/>}/>
            <Route path="/logn/:title/:tokenId"
              element={<Login L_URL={LOGIN_URL}
                login_attempts={login_attempts}
                greet={greet}/>
              }
        />

          </Routes>
        </BrowserRouter>   */}

        <br/>

        
        <BrowserRouter>
          {/* <Menu menuData={menuData}/> */}
          <Link to="/Home"> Home </Link>   &nbsp;  
          <Link to="/All_Categories"> All Products </Link>  &nbsp;<br/>
          {/* <Link to="All_ categories/CategoryOne"> Category One </Link>  &nbsp;
          <Link to="All/CategoryTwo"> Category Two </Link>  &nbsp;
          <Link to="All/CategoryThree"> Category Three </Link>  &nbsp;
          <Link to="All/CategoryFour"> Category Four </Link>  &nbsp; */}
          <br/><br/><br/>
          <Routes>
            
            {/* <Route path='/All_Categories' element={<Login log_url={LOGIN_URL} login_att={login_attempts} errors={error_msgs} greeting={greet}/>}/> */}
            {/* <Route path='/All_Categories' element={<Products/>}/>
            <Route path='/All_categories/CategoryOne' element={<Container/>}/>
            <Route path='/All/CategoryTwo' element={<Counter/>}/> */}
            {/* <Route path='/All/CategoryThree' element={<Todo/>}/>
            <Route path='/All/CategoryFour' element={<TodoDetails/>}/> */}
            <Route path="/Home" element={<Fake />} />
            <Route path="/category/:category" element={<Products />} />
          </Routes>
      </BrowserRouter>

      <footer>
         <Footer/>
       </footer> 


        {/* <Menu menuData={menuData}/> */}
        
        {/* <header>
          <Menu/>
        </header>

        <br/><br/>

        <MyProfile/>
        <GenderAPI/>
        <Products/>
        <Github/>

        <footer>
          <Footer/>
       </footer>  */}
      </div>
    );
}

export default App;
