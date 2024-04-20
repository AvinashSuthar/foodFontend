
import './App.css';
import Home from './screens/Home';
import { BrowserRouter  , Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import Navbarc from './components/Navbarc';
import Footer from './components/Footer';
import Signup from './screens/Signup';

function App() {
  return (
    
    <BrowserRouter>
    <Navbarc/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/createuser" element={<Signup/>} />
        <Route path="*" element={<h1>Route does not exist</h1>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
