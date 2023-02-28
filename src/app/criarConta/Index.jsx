import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//Fairebase
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

//CSS e imagens
import "./CriarConta.css";
import logocrm from "../../Images/logocrm.png";

export default function CriarConta() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
      <div className="text-center">
        <h3>Error: {error.message}</h3>
        <img className="authLogo" src={logocrm} alt="Logo" />
        <Link
          to="/"
          className="text-center btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 button"
          type="button"
        >
          Início
        </Link>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="text-center">
        <p>Loading...</p>
        <img className="authLogo" src={logocrm} alt="Logo" />
      </div>
    );
  }
  if (user) {
    navigate("/app/home");
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
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="E-mail de usuário"
                        />
                        <label className="form-label" for="form2Example11">
                          E-mail de usuário
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Digite uma senha"
                        />
                        <label className="form-label" for="form2Example22">
                          Digite uma senha
                        </label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          onClick={() =>
                            createUserWithEmailAndPassword(email, password)
                          }
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 button"
                          type="button"
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
