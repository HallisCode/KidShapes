import React  from 'react';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

import styles from "../../css/game.module.css";

function DragShape(props) 
{
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'draggable',
    });

    const movingStyle = transform ?
    {
        transform: CSS.Translate.toString(transform)
    } 
    : undefined;


    return (
        <div ref={setNodeRef} style={movingStyle} className={styles.DragShape} {...listeners} {...attributes}>

        </div>
    );
}

export default DragShape;