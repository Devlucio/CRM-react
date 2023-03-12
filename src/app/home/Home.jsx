import React, { useEffect, useState } from "react";
//Importar as funções do SeetAlerta2 com bootstrap
import SweetAlert from "react-bootstrap-sweetalert";

//Firebase
import { db } from "../config/firebase";

//componentes
import Menu from "../components/menuHome/Menu";
import ListaClient from "../components/clients/Index";

//CSS
import "./Home.css";

export default function Home() {
  const [clients, setClient] = useState([]);
  const [pesquisar, setPesquisar] = useState("");
  const [excluido, setExcluido] = useState("");
  //Começar com false para não aparecer o alerta ao renderizar a página
  const [confirDelete, setConfirDelete] = useState(false);
  //Const para pegar o id do documento
  const [pegarId, setPegarId] = useState("");

  //Função para excluir cliente
  function deleteClient(id) {
    db.collection("clients")
      .doc(id)
      .delete()
      .then(() => {
        //Excluir o documento pelo id
        setExcluido(id);
        //Apagar o sweetAlert
        setConfirDelete(false);
      });
  }

  //Função para aparecer o SweetAlert
  function confirDeleteClient(id) {
    setPegarId(id);
    //Renderizar o sweetAlert
    setConfirDelete(true);
  }

  useEffect(() => {
    const listClient = [];
    //Receber todos os documentos
    db.collection("clients")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
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
      });
  }, [pesquisar, excluido]);

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

        <ListaClient
          clients={clients}
          //Importar função via props
          deletarClient={confirDeleteClient}
        />

        {
          //Caso confirDelete for verdadeiro rederizar o SweetAlert
          confirDelete ? (
            <SweetAlert
              warning
              showCancel
              showCloseButton
              confirmBtnText="Sim, apague!"
              confirmBtnBsStyle="danger"
              cancelBtnText="Cancelar"
              cancelBtnBsStyle="primary"
              title="Tem certeza?"
              //Confirmar a ação de excluir o documento
              onConfirm={() => deleteClient(pegarId)}
              //Apagar o SweetAlert passando o confirDelete para false
              onCancel={() => confirDelete(false)}
              focusCancelBtn
            >
              Você não será capaz de reverter isso!
            </SweetAlert>
          ) : null
        }
      </div>
    </div>
  );
}
