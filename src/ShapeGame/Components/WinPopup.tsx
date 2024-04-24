import React, { useEffect, useRef, useState } from "react";

import photo1 from "../images/1.jpg";
import photo2 from "../images/2.jpg";
import photo3 from "../images/3.jpg";

import styles from "../css/game.module.css";

function randomIntFromInterval(min : number, max : number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const gifts : Array<string> = [
    photo1,
    photo2,
    photo3
];

function WinPopup({ active, setActive }: { active: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>> }) {
    const visibility = active ?
        {
            transform: "scale(1)"
        } : {
            transform: "scale(0)"
        };

        const randIndex : number = randomIntFromInterval(0, gifts.length - 1);

        const pathImage : string = gifts[randIndex];

    return (
        <div style={visibility} className={styles.Winpopup_wrapper} onClick={() => setActive(false)}>
            <div className={styles.Winpopup}>
                <div style={{height: "100%", width : "100%"}}>
                    <img className={styles.WinImage} src={pathImage} alt='fff'/>
                </div>

            </div>
        </div>
    );
}

export default WinPopup;