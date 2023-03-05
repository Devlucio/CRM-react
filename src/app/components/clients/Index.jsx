import React, { useEffect, useState } from "react";
//import Clients from "../../dados/Index";

export default function ListClients(props) {
  return (
    <table className="table table-hover table-bordered table-responsive">
      <thead className="table-info">
        <tr>
          <th scope="col">Código</th>
          <th scope="col">Nome</th>
          <th scope="col">E-mail</th>
          <th scope="col">Telefone</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {props.clients.map((clients) => {
          return (
            <tr key={clients.id}>
              <th scope="row">{clients.id}</th>
              <td>{clients.name}</td>
              <td>{clients.email}</td>
              <td>{clients.phoneNamber}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
