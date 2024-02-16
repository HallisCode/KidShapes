import React, { cloneElement, useRef, useState } from "react";
import {DndContext, DragEndEvent} from '@dnd-kit/core';

import {GetDragShapes, GetDropShapes} from "../Data/GetShapes.ts";
import {IDropShape, IShape} from "../Data/Shape.ts";
import shuffle from "../Utils/Shuffle.ts";

import DragShape from "./Interactive-elements/DragShape.tsx";
import DropShape from "./Interactive-elements/DropShape.tsx";


import styles from "../css/game.module.css";

function ShapeGame()
{
    // States

    const [isRestart, setIsRestart] = useState(true);

    const [dragShapeComponents, setDragShapeComponents] = useState(new Array<React.JSX.Element>);

    const [dropShapeComponents, setDropShapeComponents] = useState(new Array<React.JSX.Element>);

    // Logic

    if (isRestart)
    {
        setIsRestart(false);

        setDropShapeComponents(GetDropShapes().map(
            dropShape => <DropShape dropShape={dropShape} id={crypto.randomUUID()}/>
        ));

        setDragShapeComponents(shuffle(GetDragShapes()).map(
            (shape, key) => <DragShape shape={shape} id={crypto.randomUUID()}/>
        ));
        
    }

    // Functions

    function handleDragEnd(event : DragEndEvent) 
    {
        // active - это перемещаемый объект
        // over - это объект над которым передвигают объект active
        const {active, over} = event;

        if (over === null) return;


        const dropShape: IDropShape = over.data.current as IShape;

        const dragShape: IShape = active.data.current as IShape;

        if (dropShape == null || dragShape == null) return;


        if (dropShape.type === dragShape.type)
        {
            const indexDropComponent = dropShapeComponents.findIndex(
                dropShape => dropShape.props.id === over.id
            );

            const indexDragComponent = dragShapeComponents.findIndex(
                dragShape => dragShape.props.id === active.id
            );

            if (indexDropComponent < 0 || indexDragComponent < 0) 
            {
                throw new Error("IndexDropComponent или indexDragComponent не найдены.")
            }


            dropShape.innerElement = dragShapeComponents[indexDragComponent];

            dropShapeComponents[indexDropComponent] = cloneElement(
                dropShapeComponents[indexDropComponent], {dropShape : dropShape}
            );

            dragShapeComponents.splice(indexDragComponent, 1);


            setDropShapeComponents([...dropShapeComponents]);

            setDragShapeComponents([...dragShapeComponents]);

        }

    }

    // HTML element

    return (
        <div className={styles.ShapeGame}>
            <DndContext onDragEnd={handleDragEnd}>
                <div className={styles.MainField}>
                    {dropShapeComponents}
                </div>
                <div className={styles.SelectorField}>
                    {dragShapeComponents}
                </div>
            </DndContext>
        </div>
    ); 
}

export default ShapeGame;
