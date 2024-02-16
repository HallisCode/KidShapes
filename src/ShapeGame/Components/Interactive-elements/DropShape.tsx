import React from "react";
import { useDroppable } from "@dnd-kit/core";


import {IDropShape} from "../../Data/Shape.ts";
import DragShape from "./DragShape.tsx";


function DropShape({dropShape, id } : {dropShape : IDropShape, id : string | number})
{
    const {isOver, setNodeRef } = useDroppable({
        id : id,
        data : dropShape
    });

    return (
        <div ref={setNodeRef} className={dropShape.className}>
            {dropShape.innerElement != null ? dropShape.innerElement: <img src={dropShape.svg}/>}
        </div>
    );
}

export default DropShape;