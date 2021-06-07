import "./App.css";
import React from "react";
import Navigation from "./components/Navigation";
import Pages from "./components/Pages";

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
