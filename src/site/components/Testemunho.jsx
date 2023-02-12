import React from 'react'
import ImgTestemunho from '../../Images/ImgTestemunho.png'

export default function Testemunho() {
  return (
    <section id="testemunho">
        <div className="container">

        <div id="carouselExampleInterval" className="carousel carousel-dark  slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae repudiandae, eum facilis odio libero minima, nobis voluptas ratione est quo magnam delectus repellendus nulla. Cum voluptatem non ratione provident consequuntur!</h2>
                        <img src= {ImgTestemunho} alt="Cliente 1"/>                
                        <em>Marcio Martins - Minas Gerais</em>  
                    </div>      

                    <div className="carousel-item" data-bs-interval="5000">
                        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus voluptas sed provident dolorum officiis qui laudantium ea, temporibus soluta nulla nemo tenetur at repellendus possimus. Blanditiis facere optio voluptatibus saepe.</h2>
                        <img src= {ImgTestemunho} alt="Cliente 2"/>
                        <em>João Silva - Rio de Janeiro</em>  
                    </div>  

                    <div className="carousel-item" data-bs-interval="5000">
                        <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, reiciendis repellat? Maiores alias architecto voluptatum sit magnam commodi quidem cumque esse officia reiciendis, magni officiis quos, minus velit molestias vitae!</h2>
                        <img src= {ImgTestemunho} alt="Cliente 3"/>
                        <em>Maria José - São Paulo</em>  
                    </div>    

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        
        </div>
    </section>
  )
}
