import React from "react";
import { Link } from "react-router-dom";

//CSS
import "./index.css";

export default function ListaClient(props) {
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
                  <Link
                    to={
                      //Rota para editar cliente com id
                      "/app/editarClient/:id" + client.id
                    }
                  >
                    <i className="fa-solid fa-pencil iconEditar"></i>
                  </Link>
                  <Link
                    to="#"
                    onClick={() =>
                      //props para exportar a função
                      props.deletarClient(client.id)
                    }
                  >
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
