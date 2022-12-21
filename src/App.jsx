import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Site from './site/Site';

function App(){
    return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Site/>}/>
    </Routes>
    </BrowserRouter> ;
  }

export default App;
