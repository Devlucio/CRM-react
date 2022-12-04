import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

/*Paginas*/
import Site from './site/site';
import Login from './app/login';
import Menu from './site/components/menu';


const App = () => {
    return <BrowserRouter>
    <Route component = { Site }  path="/" exact />
    <Route component = { Login }  path="/app" exact />
    <Route component = { Menu }  path="/menu" exact />
    </BrowserRouter>
    
}
export default App;