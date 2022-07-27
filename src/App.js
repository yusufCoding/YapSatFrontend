
import './App.css';
import  {BrowserRouter} from react-router-dom
import Serhadcomponent from './components/Serhadcomponent';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<SerhadLogin/>}>
      <Route path="" element={<Serhadcomponent/>}
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
