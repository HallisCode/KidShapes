import React from "react";

import { useDroppable } from "@dnd-kit/core";
import { Props } from "@dnd-kit/core/dist/components/DndContext/DndContext";

import {IShape} from "../../Data/Shape.ts";


function DropShape({shape, id, putElement } : {shape : IShape, putElement? : React.JSX.Element, id : string | number})
{
    const {isOver, setNodeRef } = useDroppable({
        id : id,
        data : shape
    });

    return (
        <div ref={setNodeRef} className={shape.className}>
            {shape.type}
            <img src={shape.svg}/>
        </div>
    );
}

export default DropShape;