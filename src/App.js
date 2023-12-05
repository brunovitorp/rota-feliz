import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Index from './Home/Index';
import Contatos from './components/Contatos';
import Suporte from './components/Suporte';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/Contatos' element={<Contatos/>}/>
        <Route path='/Suporte' element={<Suporte/>}/>
      </Routes>
    </Router>
  );
}

export default App;
