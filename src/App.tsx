import React from "react";

import ShapeGame from "./ShapeGame/Components/ShapeGame.tsx";


import styles from "./css/index.module.css";


function App() 
{
  return (
    <div className="App">
        <div className={styles.ScreenMiddle}>
          <ShapeGame/>
        </div>
    </div>
  );
}

export default App;
