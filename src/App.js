
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Serhadcomponent from './components/Serhadcomponent';
import SerhadLogin from './components/SerhadLogin';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<SerhadLogin/>}></Route>
      <Route path="" element={<Serhadcomponent/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
