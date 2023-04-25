import {Routes, Route} from 'react-router-dom'
import './App.scss';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import LogIn from './pages/LogIn';

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/login' element={<LogIn/>}/>
    <Route path='/notfound' element={<NotFound/>}/>
    </Routes>
    
     </div>

  );
}

export default App;
