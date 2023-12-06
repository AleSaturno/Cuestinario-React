import React from 'react';
import Home from './components/Home/Home';
import Encuesta from './components/Encuesta/encuesta';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Encuesta' element={<Encuesta/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
