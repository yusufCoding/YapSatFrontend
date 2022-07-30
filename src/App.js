
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Serhadcomponent from './components/Serhadcomponent';
import SerhadLogin from './components/SerhadLogin';
import SerhadRegister from './components/SerhadRegister';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="" element={<Serhadcomponent/>}></Route>
      <Route path="/ys" element={<Serhadcomponent/>}></Route>
      <Route path="/login" element={<SerhadLogin/>}></Route>
      <Route path="/register" element={<SerhadRegister/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
