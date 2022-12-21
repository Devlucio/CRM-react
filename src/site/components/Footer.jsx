import React from 'react'

export default function Footer() {
  return (
    <section id="footer">    
      <div>
            <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="/#"><i className="fa fa-facebook fa-2x"></i></a></li>
                <li className="list-inline-item"><a href="/#"><i className="fa fa-twitter fa-2x"></i></a></li>
                <li className="list-inline-item"><a href="/#"><i className="fa fa-instagram fa-2x"></i></a></li>						
                <li className="list-inline-item"><a href="/#" target="_blank"><i className="fa fa-envelope fa-2x"></i></a></li>
            </ul>
	    </div>
      <a href="mailto:lucio@crm.com.br">lucio@crm.com.br</a>
      <p>Desenvolvido Lúcio Cecílio</p>

    </section>
  )
}
