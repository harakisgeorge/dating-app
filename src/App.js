import './App.css';
import MainPage from './components/MainPage/MainPage';
import LowerPage from './components/LowerPage/LowerPage';
import Support from './components/Support/Support';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Download from './components/Download/Download';
import Login from "./components/LoginForm/LoginForm";
import Register from './components/Register/Register';
import Swiping from './components/Swiping/Swiping';

function App() {
  return (

     <Router>
        <div className="App">
          <Routes>
              <Route path='/' element={<MainPage/>} />
              <Route path='/support' element={<Support/>} />
              <Route path='/download' element={<Download/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/swiping' element={<Swiping/>} />

          </Routes>
         </div>
      </Router>

    
  );
}

export default App;
