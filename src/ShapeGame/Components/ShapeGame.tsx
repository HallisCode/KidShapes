import React, { useEffect, useRef, useState } from "react";
import { DndContext, DragEndEvent } from '@dnd-kit/core';

import { GetDragShapes, GetDropShapes } from "../Data/GetShapes.ts";
import { IDropShape, IShape } from "../Data/Shape.ts";
import shuffle from "../Utils/Shuffle.ts";

import DragShape from "./Interactive-elements/DragShape.tsx";


import styles from "../css/game.module.css";
import RandomShapeField from "./Fields/RandomShapeField.tsx";

function ShapeGame() {
    // States

    const [isRestart, setIsRestart] = useState(true);

    const [dropShapes, setDropShapes] = useState(GetDropShapes());

    const [dragShapesComponent, setDragShapeComponent] = useState(new Array<React.JSX.Element>);

    useEffect(() => {
        if (isRestart) {

            restartGame();

            setIsRestart(false);
        }
    }, [isRestart]);

    // Logic

    if (isRestart === false && dragShapesComponent.length === 0) {

        setIsRestart(true);
    }

    // Functions

    function restartGame() {

        setDropShapes([...GetDropShapes()]);

        const dragShapesComponent = shuffle([...GetDragShapes()]).map(function (dragShape) {

            const key = crypto.randomUUID();

            return <DragShape shape={dragShape} id={key} key={key} />
        });

        setDragShapeComponent([...dragShapesComponent]);
    }

    function handleDragEnd(event: DragEndEvent) {
        // active - это перемещаемый объект
        // over - это объект над которым передвигают объект active
        const { active, over } = event;

        if (over === null) return;


        const dropShape: IDropShape = over.data.current as IShape;

        const dragShape: IShape = active.data.current as IShape;

        if (dropShape == null || dragShape == null) return;


        if (dropShape.type === dragShape.type) {

            const indexDragComponent = dragShapesComponent.findIndex(dragShape => dragShape.key === active.id)

            if (indexDragComponent < 0) throw new Error(
                `DragShapesComponent с указанным id ${active.id} не найден.`
            );

            dropShape.innerElement = dragShapesComponent[indexDragComponent];

            dragShapesComponent.splice(indexDragComponent, 1);


            setDropShapes([...dropShapes]);

            setDragShapeComponent([...dragShapesComponent]);
        }
    }

    // HTML element

    return (
        <div className={styles.ShapeGame}>
            <DndContext onDragEnd={handleDragEnd}>

                <div className={styles.MainField}>
                    {<RandomShapeField dropShapes={dropShapes} isRestart={isRestart} />}
                </div>

                <div className={styles.SelectorField}>
                    {dragShapesComponent}
                </div>

            </DndContext>
        </div>
    );
}

export default ShapeGame;
