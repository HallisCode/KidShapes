import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

import { IShape } from "../../Data/Shape.ts";

function DragShape({ shape, id}: { shape: IShape, id: string | number}) {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
        data: shape
    });

    const movingStyle = transform ?
        {
            transform: CSS.Translate.toString(transform)
        } : undefined;

    return (
        <div ref={setNodeRef} className={shape.className} style={movingStyle} {...listeners} {...attributes}>
            <img src={shape.svg} />
        </div>
    );
}

export default DragShape;