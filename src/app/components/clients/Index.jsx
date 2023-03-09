import React from "react";
import { Link } from "react-router-dom";

//import clients from "../../dados/Index";

//Firebase
//import firebase from "../../config/firebase";
//import { db } from "../../config/firebase";
//import "firebase/firestore";

//CSS
import "./index.css";

export default function ListaClient(props) {

  function deleteClient(id) {
    alert("Usuário excluido " + id )
  }

  return (
    <div>
      <table className="table table-hover table-bordered ">
        <thead>
          <tr className="table-info">
            <th scope="col">Código</th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col">Telefone</th>
            <th scope="col">Profissão</th>
            <th scope="col" className="colEditar">
              Editar
            </th>
          </tr>
        </thead>
        <tbody>
          {props.clients.map((client) => {
            return (
              <tr key={client.id}>
                <th scope="row">{client.id}</th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phoneNamber}</td>
                <td>{client.profession}</td>
                <td>
                  <Link to="/app/editarClient">
                    <i className="fa-solid fa-pencil iconEditar"></i>
                  </Link>
                  <Link to="#" onClick={() => deleteClient(client.id)}>
                    <i className="fa-regular fa-trash-can iconEditar red"></i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
/**/
