import React, { useEffect, useState } from "react";

//Firebase
//import firebase from "../config/firebase";
import { db } from "../config/firebase";

//componentes
import Menu from "../components/menuHome/Menu";
import ListaClient from "../components/clients/Index";

//CSS
import "./Home.css";

export default function Home() {
  const [clients, setClient] = useState([]);
  const [pesquisar, setPesquisar] = useState('');

  useEffect(() => {
    const listClient = [];
    db.collection("clients")      
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, doc.data().name);
          //if para fazer uma pesquisar na coloção nesse caso por name
          if (doc.data().name.indexOf(pesquisar) >= 0) {
            listClient.push({
              id: doc.id,
              name: doc.data().name,
              email: doc.data().email,
              phoneNamber: doc.data().phoneNamber,
              profession: doc.data().profession,
            });
          }
        });
        setClient(listClient);
      })    
  }, []);

  return (
    <div>
      <Menu />
      <div className="title container-fluid">
        <h1>Clientes</h1>

        <div className="container col-6 align-self-cente">
          <div className="row">
            <div className="input-group mb-3">
              <button
                className="btn btn-primary"
                type="button"
                id="button-addon1"
              >
                <i className="fa-solid fa-magnifying-glass"></i> Procurar
              </button>
              <input
                //Função para pesquisar
                onChange={(e) => setPesquisar(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Pesquisa por nomes."
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
          </div>
        </div>

        <ListaClient clients={clients} />
      </div>
    </div>
  );
}


    /*firebase
      .firestore()
      .collection("clients")
      .get()
      .then(async (resultado) => {
        await resultado.docs.forEach((doc) => {
          console.log(doc.id, doc.data().name);
          //if para fazer uma pesquisar na coloção nesse caso por name
          if (doc.data().name.indexOf(pesquisa) >= 0) {
          listClient.push({
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            phoneNamber: doc.data().phoneNamber,
            profession: doc.data().profession
          })
        }
        });
        setClient(listClient);
      });*/
