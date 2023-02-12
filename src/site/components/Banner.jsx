import React from 'react';
import { Link } from 'react-router-dom';
import Img3 from '../../Images/Img3.png'

export default function Banner() {
  return (
    <section id="banner">
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <h1>Uma plataforma de CRM simples de configurar e fácil de usar.</h1>
                    <h4>Gerencie seus clientes em um único lugar.</h4>
                    
                    <Link to= "/app/criarconta" className= "btn btn-dark btn-lg btn-banner">Criar uma conta</Link>
                </div>

                <div className="col-lg-6">
                    <img src={Img3} alt="CRM" />                        
                </div>
       
            </div>
        </div>
    </section>
  )
}
