import React from "react";
import { Link } from "react-router-dom";

//CSS
import "./index.css";

export default function ListClients(props) {
  function deleteClient(id) {
    alert("Cliente excluido " + id);
  }

  return (
    <table className="table table-hover table-bordered table-responsive">
      <thead className="table-info">
        <tr>
          <th scope="col">Código</th>
          <th scope="col">Nome</th>
          <th scope="col">E-mail</th>
          <th scope="col">Telefone</th>
          <th scope="col">Profissão</th>
          <th scope="col">Editar</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {props.clients.map((client) => {
          return (
            <tr key={client.id}>
              <th scope="row">{client.id}</th>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phoneNamber}</td>
              <td>{client.profession}</td>
              <td>
                <Link to={"/app/editarClient/" + client.id}>
                  <i className="fa-sharp fa-solid fa-pencil iconEditar"></i>
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
  );
}
