import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

//Páginas
import Site from './site/Site';
import Login from './app/login/Index';
import CriarConta from './app/criarConta/Index';
import RedefinirSenha from './app/redefinirSenha';
import Home from './app/home/Home';

//Rotas
function App(){
    return <BrowserRouter>
    <Routes>      
      <Route path='/' element={<Site/>}/>
      <Route path='/app' element={<Login/>}/>
      <Route path='/app/criarconta' element={<CriarConta/>}/>
      <Route path='/app/redefinirsenha' element={<RedefinirSenha/>}/>
      <Route path='/app/home' element={<Home/>}/>      
    </Routes>
    </BrowserRouter> ;
  }

export default App;
