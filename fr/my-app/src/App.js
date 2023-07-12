import './App.css';
import Login from './Componet/Login';
import MainPage from './Componet/MainPage';
import Sinup from './Componet/Sinup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Sinup/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/MainPage" element={<MainPage/>}/>
        </Routes>
  </BrowserRouter>
  );
}

export default App;
