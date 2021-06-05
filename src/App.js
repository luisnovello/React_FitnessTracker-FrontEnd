import "./App.css";
import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Pages from "./components/Pages";

function App() {
  const [userLogin, setUserLogin] = useState(null);
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <div>
        <Pages setUserLogin={setUserLogin} />
      </div>
    </div>
  );
}

export default App;
