import React from "react";
import "./Home.css";
import ListClient from "../components/clients/Index";

import Menu from "../components/menuHome/Menu";

export default function Home() {
  return (
    <div>
      <Menu />
      <div className="title container-fluid">
        <h1>Clients</h1>
        <ListClient/>
      </div>
    </div>
  );
}
