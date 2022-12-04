import React from "react";

const Menu = () =>{
    return (
        <nav className="navbar navbar-expand-lg " >
            
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src="./imagens/logo2.png" alt="Logo do CRM" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Recursos</a></li>
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Clientes</a></li>
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Planos e Preços</a></li>
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Contato</a></li>
                </ul>
            </div>
        </div>                
        
</nav>
    );
  
} 
  export default Menu;




