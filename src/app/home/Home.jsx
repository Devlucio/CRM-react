import React, { useEffect, useState } from "react";
import "./Home.css";
import ListClient from "../components/clients/Index";

//Firebase
import firebase from "firebase";
import "firebase/auth";

import Menu from "../components/menuHome/Menu";

export default function Home() {
  const [clients, setClients] = useState([]);
  let listClient = [];

  useEffect(() => {
    firebase
      .firestore()
      .collection("clients")
      .get()
      .then(async (res) => {
        await res.docs.forEach((doc) => {
          listClient.push({
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            phoneNamber: doc.data().phoneNamber,
          });
        });
        setClients(listClient);
      });
  }, []);
  return (
    <div>
      <Menu />
      <div className="title container-fluid">
        <h1>Clients</h1>
        <ListClient clients={clients} />
      </div>
    </div>
  );
}
