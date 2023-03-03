import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

//Firebase
import firebase from "../config/firebase";
import "firebase/auth";

//CSS e imagens
import "./CriarConta.css";
import logocrm from "../../Images/logocrm.png";

export default function CriarConta() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");
  const [alerta, setAlerta] = useState("");

  function creatUser() {
    setNotice("");

    if (!email || !password) {
      setNotice("Preencha todos os campos corretamente.");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((firebaseCreat) => {
        setAlerta("Good");
      })
      .catch((error) => {
        setAlerta("Bad");
        if (error.message === "Password should be at least 6 characters") {
          setNotice("A senha deve ter pelo menos 6 caracteres");
        } else if (error.message === "The email address is badly formatted.") {
          setNotice("O email não é válido");
        } else if (
          error.message ===
          "The email address is already in use by another account."
        ) {
          setNotice("Esse email já está em uso por outra conta");
        } else {
          setNotice("Erro ao criar conta: " + error.message);
        }
      });
  }

  return (
    <section className="h-100 gradient-form ">
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
                      <p>Criar Conta</p>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="E-mail de usuário"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example11">
                          E-mail de usuário
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Digite uma senha"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example22">
                          Digite uma senha
                        </label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 button"
                          type="button"
                          onClick={creatUser}
                        >
                          Criar Conta
                        </button>

                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 button"
                          type="reset"
                          onClick={() => alert("Formulário limpo com sucesso.")}
                        >
                          Limpar formulário
                        </button>
                      </div>

                      {notice.length > 0 ? (
                        <div className="alert alert-danger mt-2" role="alert">
                          {notice}
                        </div>
                      ) : null}
                      {alerta === "Good" ? (
                        <Navigate replace to="/app/home" />
                      ) : null}
                      <br />

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Já tenho uma conta</p>
                        <Link to="/app" className="btn btn-outline-danger">
                          Acessar conta
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <div className="text-center">
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
