import './App.css';
import MainPage from './components/MainPage/MainPage';
import LowerPage from './components/LowerPage/LowerPage';
import Support from './components/Support/Support';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (

     <Router>
        <div className="App">
          <Routes>
              <Route path='/' element={<MainPage/>} />
              <Route path='/support' element={<Support/>} />
          </Routes>
         </div>
      </Router>

    
  );
}

export default App;
