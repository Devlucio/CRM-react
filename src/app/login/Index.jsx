import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";


//Firebase
import firebase from "../config/FireBase";
import "firebase/auth";

//CSS
import "./Login.css";
import logocrm from "../../Images/logocrm.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");
  const [alerta, setAlerta] = useState("");

  function userLogin() {
    /*const user = firebase.auth().currentUser;

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  // ...
} else {
  // No user is signed in.
}*/
    setNotice("");

    if (!email || !password) {
      setNotice("Preencha todos os campos corretamente.");
      return;
    }
    //Fazer login com firebase
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setAlerta("Good");
      })
      .catch((error) => {
        setAlerta("Bad");
        if (error.message === "The email address is badly formatted.") {
          setNotice("O endereço de e-mail está formatado incorretamente.");
        } else if (
          error.message ===
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          setNotice(
            "Não há registro de usuário correspondente a este identificador. O usuário pode ter sido excluído."
          );
        } else if (
          error.message ===
          "The password is invalid or the user does not have a password."
        ) {
          setNotice("A senha é inválida ou o usuário não possui uma senha.");
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
                      <p>Por favor, faça login na sua conta.</p>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="E-mail do usuário"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example11">
                          E-mail
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Digite sua senha"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example22">
                          Senha
                        </label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          onClick={userLogin}
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 button"
                          type="button"
                        >
                          Acessar
                        </button>

                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 button"
                          type="reset"
                          onClick={() => alert("Formulário limpo com sucesso.")}
                        >
                          Limpar formulário
                        </button>
                        <br />

                        {
                          //Função para aparecer o alerta
                          notice.length > 0 ? (
                            <div
                              className="alert alert-danger mt-3"
                              role="alert"
                            >
                              {notice}
                            </div>
                          ) : null
                        }
                        {
                          //Função para redirecionar o usuário caso for logado com o Navigate
                          alerta === "Good" ? (
                            <Navigate relative to="/app/home" />
                          ) : null
                        }
                        <br />

                        <Link
                          to="/app/redefinirsenha"
                          className="text-muted redefinir-senha"
                        >
                          Esqueceu a senha?
                        </Link>
                      </div>

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
