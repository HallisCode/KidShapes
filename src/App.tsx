import React from "react";

import MainField from "./shape-game/MainField.tsx";
import SelectorField from "./shape-game/SelectorField.tsx";

import styles from "./css/game.module.css"

function App() 
{
  return (
    <div className="App">
      <div className={styles.MainField}>
        <MainField/>
      </div>
      <div className={styles.SelectorField}>
        <SelectorField/>
      </div>
    </div>
  );
}

export default App;
