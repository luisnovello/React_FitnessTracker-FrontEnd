import "./App.css";
import React from "react";
import { Navigation, Pages } from "./components";

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Pages />
      </main>
    </div>
  );
}

export default App;
