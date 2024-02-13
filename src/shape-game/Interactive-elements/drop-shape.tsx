import React from "react";

import { useDroppable } from "@dnd-kit/core";
import { Props } from "@dnd-kit/core/dist/components/DndContext/DndContext";


import styles from "../../css/game.module.css";


function DropShape(props : Props)
{
    const {isOver, setNodeRef } = useDroppable({id : "droppable"});

    return (
        <div ref={setNodeRef} className={styles.DropShape}>
            {props.children}
        </div>
    );
}

export default DropShape;