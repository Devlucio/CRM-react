import React, { useEffect, useState } from "react";
import "./Home.css";
import ListClients from "../components/clients/Index";

//Firebase
import { db } from "../config/firebase";

import Menu from "../components/menuHome/Menu";

export default function Home() {
  const [clients, setClients] = useState([]);
  const [pesquisa, setPesquisa] = useState([]);

  useEffect(() => {
    const listClient = [];
    db.collection("clients")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().name.indexOf(pesquisa) >= 0) {
            listClient.push({
              id: doc.id,
              name: doc.data().name,
              email: doc.data().email,
              phoneNamber: doc.data().phoneNamber,
              profession: doc.data().profession,
            });
          }
        });
        setClients(listClient);
      });
  }, [pesquisa]);

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
                onChange={(e) => setPesquisa(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Pesquisa por nomes."
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
          </div>
        </div>
      </div>
      <ListClients clients={clients} />
    </div>
  );
}
