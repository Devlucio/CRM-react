import React from "react";
import Clients from "../../dados/Index";

//Firebase


export default function ListClient() {


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
        {Clients.map((Clients) => {
          return (
            <tr Key={Clients.id}>
              <th scope="row">{Clients.id}</th>
              <td>{Clients.name}</td>
              <td>{Clients.email}</td>
              <td>{Clients.phoneNamber}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
