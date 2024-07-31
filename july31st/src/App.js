import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ShowCategory from './ShowCategory';
import AddCategory from './AddCategory';

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<ShowCategory />} />
            <Route path="/admin/category" element={<AddCategory/>}>  </Route> 
        </Routes>
      </BrowserRouter>        
    </div>
    )
}

export default App;
