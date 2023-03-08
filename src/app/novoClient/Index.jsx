import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

//Firebase
import firebase from "../config/firebase";
import "firebase/firestore";


//CSS
import "./novoClient.css";

import Menu from "../components/menuHome/Menu";

export default function NovoClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNamber, setPhoneNamber] = useState("");
  const [profession, setProfession] = useState("");
  const [notice, setNotice] = useState("");
  const [alerta, setAlerta] = useState("");
  const collection = firebase.firestore();

  function adicionarClient() {

    if (name.length === 0){
      setNotice('Informe o nome do cliente.')
    } else if(phoneNamber.length === 0){
      setNotice('Informe o numero do telefone do cliente.')
    } else{
      collection
      .collection("clients")
      .add({
        name: name,
        email: email,
        phoneNamber: phoneNamber,
        profession: profession,
      })
      .then((docRef) => {
        setNotice("");
        setAlerta("Good");
      })
      .catch((error) => {
        setNotice("");
        setAlerta("");
      });
    }

    
  }
  return (
    <div>
      <Menu />
      <div className="container-fluid title">
        <div className="offset-lg-4 offset-md-2 col-lg-4 col-md-8">
          <h1>Novo Cliente</h1>
          <form>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Nome do cliente"
              />
              <label htmlFor="floatingInput">Nome do Cliente</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="Nome do cliente"
              />
              <label htmlFor="floatingInput">Email do cliente</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setPhoneNamber(e.target.value)}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Nome do cliente"
              />
              <label htmlFor="floatingInput">Telefone do Cliente</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setProfession(e.target.value)}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Nome do cliente"
              />
              <label htmlFor="floatingInput">Profissão do Cliente</label>
            </div>
            <div className="text-center">
              <button
                onClick={adicionarClient}
                type="button"
                className="btn btn-primary btn-add"
              >
                Adicionar
              </button>
              <Link to="/app/home" type="button" className="btn btn-outline-danger btn-add">
                Cancelar
              </Link>
              {notice.length > 0 ? (
                <div className="alert alert-danger mt-3" role="alert">
                  {notice}
                </div>
              ) : null}
              {alerta === "Good" ? <Navigate relative to="/app/home" /> : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
