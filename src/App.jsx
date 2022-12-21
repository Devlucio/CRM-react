import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Site from './site/Site';
import Login from './app/login/Login';

function App(){
    return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Site/>}/>
      <Route path='/app' element={<Login/>}/>
    </Routes>
    </BrowserRouter> ;
  }

export default App;
