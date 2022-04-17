import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/About/About';
import Services from './components/Services/Services';
import About from './components/About/About';
import Login from './components/Login/Login';
import Register from './components/Register/Register'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Services' element={<Services></Services>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
