import React from "react";
//Página inicial do site
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Testemunho from "./components/Testemunho";
import Precos from "./components/Precos";
import Footer from "./components/Footer";

export default function Site() {
  return (
    <div>
        <Menu />
        <Banner />
        <Features />
        <Testemunho />
        <Precos /> 
        <Footer/>
    </div>
  )
}




