import React, { useRef, useState } from "react";
import {DndContext, DragEndEvent, useDraggable} from '@dnd-kit/core';

import DragShape from "./Interactive-elements/DragShape.tsx";
import DropShape from "./Interactive-elements/DropShape.tsx";

import ShapeType from "../Enums/ShapeType.ts";
import { IShape, Shape } from "../Data/Shape.ts";

import styles from "../css/game.module.css";
import {GetDragShapes, GetDropShapes} from "../Data/GetShapes.ts";

function ShapeGame()
{
    const isRestart = useRef(true);

    const [dragShapes, setDragShapes] = useState(GetDragShapes());

    const [dropShapes, setDropShapes] = useState(GetDropShapes());


    function handleDragEnd(event : DragEndEvent) 
    {
        // active - это перемещаемый объек
        // over - это объект над которым передвигают объект active
        const {active, over} = event;

        if (over === null) return;


        const dropShape: IShape = over.data.current as IShape;

        const dragShape: IShape = active.data.current as IShape;

        if (dropShape === null || dragShape === null) return;


        if (dropShape.type === dragShape.type)
        {
            console.log("type is the same");
        }

    }


    return (
        <div className={styles.ShapeGame}>
            <DndContext onDragEnd={handleDragEnd}>
                <div className={styles.MainField}>
                    {dropShapes.map(shape => <DropShape shape={shape} id={crypto.randomUUID()}/>)}
                </div>
                <div className={styles.SelectorField}>
                    {dragShapes.map(shape => <DragShape shape={shape} id={crypto.randomUUID()}/>)}
                </div>
            </DndContext>
        </div>
    ); 
}

export default ShapeGame;
