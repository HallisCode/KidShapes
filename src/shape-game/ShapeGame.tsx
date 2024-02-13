import React, { useState } from "react";
import {DndContext, DragEndEvent} from '@dnd-kit/core';

import MainField from "./Fields/MainField.tsx";
import SelectorField from "./Fields/SelectorField.tsx";

import DragShape from "./Interactive-elements/drag-shape.tsx";
import DropShape from "./Interactive-elements/drop-shape.tsx";

import styles from "../css/game.module.css";

function ShapeGame()
{
    const [isDropped, setIsDropped] = useState(false);
    const draggableMarkup = (
      <DragShape></DragShape>
    );

    function handleDragEnd(event : DragEndEvent) 
    {
        if (event.over !== null && event.over.id === 'droppable') {
          setIsDropped(true);
        }
    }

    return (
        <div className={styles.ScreenMiddle}>
            <div className={styles.ShapeGame}>
                <DndContext onDragEnd={handleDragEnd}>
                    {!isDropped ? draggableMarkup : null}
                    <DropShape>
                        {isDropped ? draggableMarkup : 'Drop here'}
                    </DropShape>
                </DndContext>
            </div>
        </div>
    );
}

export default ShapeGame;
