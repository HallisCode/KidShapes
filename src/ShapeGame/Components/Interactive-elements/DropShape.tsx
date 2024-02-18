import React from "react";
import { useDroppable } from "@dnd-kit/core";

import { IDropShape } from "../../Data/Shape.ts";
import { Coordx, ICoordx } from "../../Data/Coordx.ts";
import { ISize } from "../../Data/Size.ts";


function DropShape({ dropShape, coordx = new Coordx(0, 0), size, id }: {
    dropShape: IDropShape, coordx?: ICoordx, id: string | number,
    size?: ISize
}) {

    // States

    const { isOver, setNodeRef } = useDroppable({
        id: id,
        data: dropShape
    });

    //Logic

    const style: React.CSSProperties =
    {
        ...size,
        left: coordx.x,
        top: coordx.y,
        position: "absolute"
    };


    // HTML element

    return (
        <div ref={setNodeRef} style={style} className={dropShape.className}>
            {dropShape.innerElement != null ? dropShape.innerElement : <img src={dropShape.svg} />}
        </div>
    );
}

export default DropShape;