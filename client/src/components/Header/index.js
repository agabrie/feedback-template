import React from "react";

import './Header.css';
import NavButton from "./NavButton";

function App() {
  return (
    <div className="Header">
      <header className="App-header">
        <div className="site-home">
            <h1> Header</h1>
        </div>
        <div className="navigation-items">
            <NavButton text="Home" to="/welcome" />
            <NavButton text="Concepts" to="/core-concepts" />
        </div>
      </header>
    </div>
  );
}

export default App;