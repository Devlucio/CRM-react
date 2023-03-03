import React, { useState } from "react";
import { Link } from "react-router-dom";

//Firebase
import firebase from "../config/firebase";
import "firebase/auth";

//CSS
import "./RedefinirSenha.css";
import logocrm from "../../Images/logocrm.png";

export default function RedefinirSenha() {
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");
  const [alerta, setAlerta] = useState("");

  function recuperarSenha() {
    setNotice("");

    if (!email) {
      setNotice("Preencha o campo de email para redefinir a senha.");
      return;
    }

    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then((result) => {
        setAlerta("Good");
      })
      .catch((erro) => {
        setAlerta("Bad");
        if (erro.message) {
          setNotice("Bad");
          if (erro.message === "The email address is badly formatted.") {
            setNotice("O endereço de e-mail está formatado incorretamente.");
          } else if (
            erro.message ===
            "There is no user record corresponding to this identifier. The user may have been deleted."
          ) {
            setNotice(
              "Não há registro de usuário correspondente a este identificador. O usuário pode ter sido excluído."
            );
          } else {
            setNotice("Erro ao redefinir senha: " + erro.message);
          }
        }
      });
  }

  return (
    <section className="h-100 gradient-form">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center ">
                      <Link to="/">
                        <img className="logo" src={logocrm} alt="Logo" />
                      </Link>
                    </div>

                    <form>
                      <p>
                        Digite o seu email do usuário para recuperar a senha.
                      </p>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Digite o seu nome de usuário."
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example11">
                          E-mail
                        </label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          onClick={recuperarSenha}
                        >
                          Redefinir Senha
                        </button>
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="reset"
                          onClick={() => alert("Formulário limpo com sucesso.")}
                        >
                          Limpar formulário
                        </button>
                      </div>

                      {notice.length > 0 ? (
                        <div className="alert alert-danger mt-3" role="alert">
                          {notice}
                        </div>
                      ) : null}
                      {alerta === "Good" ? (
                          <div className="alert alert-success" role="alert">
                          Email para redefinir a senha enviado com sucesso!
                        </div>
                        ) : null}

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Não tem uma conta?</p>
                        <Link
                          to="/app/criarconta"
                          className="btn btn-outline-danger"
                        >
                          Criar uma conta
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <div className="text-center ">
                      <Link to="/">
                        <img className="authLogo" src={logocrm} alt="Logo" />
                      </Link>
                    </div>
                    <h4 className="mb-4">Somos mais que uma empresa</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
