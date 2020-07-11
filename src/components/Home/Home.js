import React from "react";

import Nav from "../Nav/Nav";
import CardBooks from "./CardBooks/CardBooks";

export default function Home() {
  return (
    <div className="container-fluid">
      <div>
        <Nav />
      </div>
      <h1>Home</h1>
      <div>
        <CardBooks />
      </div>
    </div>
  );
}
