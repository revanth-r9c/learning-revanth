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
import Github from './github';
import Fake from './Fake';
import ProductDetailsComponent from './ProductDetailsComponent';
import DeleteProducts from './DeleteProducts';
import ShowProducts from './ShowProducts';
import Addproducts from './Addproducts';
import ProductDetails from './ProductDetails';
import Cities from './Cities';
import CityDetails from './CityDetails';
import CityNews from './CityNews';
import RefHookExample from './RefHookExample';
import ClassBasedCounter from './ClassBasedCounter';
import "./products.css";
import "./CategoryList.css";
import "./EditCategory.css";
import "./CreateCategory.css";
import "./AdminPage.css";
import "./UsersDetails.css";
import "./UsersDisplay.css";
import OrderDetails from './OrderDetails';
import Navbar from './Navbar';
import UsersDetails from './UsersDetails';
import UsersDisplay from './UsersDisplay';
import AdminPage from './AdminPage';
import CreateCategory from './CreateCategory';
import EditCategory from './EditCategory';
import CategoryList from './CategoryList';
import CategoryPage from './CategoryPage';
import "./Navbar.css";
// import {React, useState} from 'react';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
import ReduxCounter from './reducers/ReduxCounter';
import TodosReducer from './reducers/TodosReducer';
import ReduxTodo from './ReduxTodo';
import EditTodo from './EditTodo';
import { useState } from 'react';
import { updateTodo } from './actions/todoactions';

// // // import App from './App';

function App() {
    const LOGIN_URL="https://ascendion.com/login";
    let login_attempts=5;
    let menuData=[
      {title:"Home",path:"/"},
      // {title:"Todos",path:"/Todo"},
      {title:"Login",path:"/login"},
      // {title:"ExampleUseEffect",path:"/ue"},
      // {title:"Cities",path:"/cities"},
      // {title:"RefHookExample",path:"/refhook"},
      // {title:"classBasedExample",path:"/classBasedExample"},
      {title:"Products",path:"/products"},
      {title:"ReduxCounter",path:"/reduxCounter"},
      {title:"TodosReducer",path:"/todosReducer"},
    ];
    let error_msgs={
      LOGIN_FAILED: "sorry! unable to login",
      LOGIN_500: "Server error"
    }
    function greet(){
      alert("Let's Login! You have a great day!");
    }
    let [show,setShow]=useState(false);
   
    return(
      <div className='App'>
        {/* <BrowserRouter>
          <Menu menuData={menuData}/>
          <Routes>
            <Route path="/todo" element={<Todo/>}/>
            <Route path='/login/:title/:tokenId' element={<Login/>}/>
            <Route path="/todo/:id" element={<TodoDetails/>}/>
            <Route path="/ue" element={<ExampleUseEffect/>}/>
            <Route path="/cities/" element={<Cities/>}>
              <Route path=":name/" element={<CityDetails/>}>
                <Route path="news" element={<CityNews newsText="This is news text"/>}/>
              </Route>
            </Route>
            <Route path="/refhook" element={<RefHookExample/>}/>
            <Route path="/classBasedExample" element={<ClassBasedCounter/>}/>
            <Route path="/products/" element={<ShowProducts/>}>
              <Route path=":id/" element={<ProductDetails/>}/>
            </Route>
          </Routes>
        </BrowserRouter> */}
        
        show var={show}
        <select onChange={(e)=>{
          (e.target.value=="show")?setShow(true):setShow(false);
        }}
        >
          <option value="show">Show </option>
          <option value="hide">Hide</option>
        </select>

        <BrowserRouter>
            {/* {show?<Navbar />:""} */}
            <Navbar/>
            <Routes>
            {/* <Route path='/users' element={<AddUsers />} /> */}
            {/* <Route path="/show" element={<ShowUsers />} >
            <Route path=":userId" element={<ShowUsers />} /> */}

            {/* <Route path="/Products" element={}/> */}
              <Route path="addProducts" element={<Addproducts />} />
              <Route path="/products" element={<ShowProducts/>}>
                <Route path=":id" element={<ProductDetails />} />
              </Route>
              <Route path="/UsersPage" element={<UsersDisplay />}>
                <Route path=":userId" element={<UsersDetails/>} />
              </Route>
              <Route path="/admin" element={<AdminPage/>}>
                <Route path=":orderId" element={<OrderDetails />} />
              </Route>
              <Route path="Category" element={<CategoryList />}>
                <Route path="create" element={<CreateCategory />} />
                <Route path="edit/:id" element={<EditCategory />} />
              </Route>

              <Route path="edit/:id" element={<EditTodo />} />
              <Route path="reduxCounter" element={<Counter/>} />
              <Route path="/reduxTodo" element={<ReduxTodo />} />
              <Route path="edit/:index/:name/:status" element={<EditTodo />} />
              <Route path="/addCategory" element={<CategoryPage />} />
              {/* <Route path="/" element={<ReduxTodo/>} />
              <Route path="/" element={<ReduxTodo/>} >

                <Route path=":id/:name/:status" element={<EditTodo/>} />
                <Route path="/edit/:id/:name/:status" element={<EditTodo/>} />

              </Route> */}
              <Route path='/login/:title/:tokenId' element={<Login/>}/>
            </Routes>
            {/* <Route path="" element={<ProductDetails />} /> */}
            
        </BrowserRouter>  

        {/* <Button variant="contained" color="primary">
          Hello World
        </Button>

        <Typography variant="h1" component="h2">
          Welcome to My App
        </Typography>
        <Typography variant="body1">
          This is a simple example of using Material-UI components.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper>Left Side</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper>Right Side</Paper>
          </Grid>
        </Grid> */}

      </div>
    )
}

export default App;

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ReduxTodo from './ReduxTodo';
// import EditTodo from './EditTodo';
// import './App.css'
// import UseMemoHookExample from "./store/UseMemoHookExample";
// import CustomHookUser from "./CustomHookUser";
// import Profile from "./Profile";

// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<ReduxTodo />} />
//                 <Route path="edit/:index/:name/:status" element={<EditTodo />} />
//                 {/* <Route path="useMemoExample" element={<UseMemoHookExample/>}/>
//                 <Route path="customHookExample" element={<CustomHookUser/>}/>
//                 <Route path="ContextExample" element={<Profile/>}/> */}
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default App;
