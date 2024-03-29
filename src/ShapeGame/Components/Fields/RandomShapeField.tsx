import React, { useEffect, useRef, useState } from "react";

import { IDropShape } from "../../Data/Shape.ts";
import DropShape from "../Interactive-elements/DropShape.tsx";
import { Size } from "../../Data/Size.ts";
import { Coordx, ICoordx } from "../../Data/Coordx.ts";


function RandomShapeField({ dropShapes, isRestart}: { dropShapes: Array<IDropShape>, isRestart : boolean}) {

    // Hooks

    const workArea = useRef<HTMLDivElement>(null);

    let [dropShapeComponents, setDropShapeComponents] = useState(new Array<React.JSX.Element>());

    useEffect(() => {

        if (workArea.current == null || !isRestart) return;

        dropShapeComponents = new Array<React.JSX.Element>();

        spawnRandomDropShapes();

    }, [workArea, isRestart]);

    // Logic

    console.log(isRestart);
    console.log("randomed called");

    const style: React.CSSProperties =
    {
        width: "100%",
        height: "100%",
        position: "relative"
    };

    // Functions

    function spawnRandomDropShapes() {

        if (workArea.current == null) throw new Error("WorkArea должна быть не null.");

        const { height, width } = workArea.current.getBoundingClientRect();

        const size = new Size(76 * 1.12, 86 * 1.12);

        const dropShapeCoordx = new Array<ICoordx>();


        for (let dropShape of dropShapes) {

            const avaibleHeight = height - size.height;

            const avaibleWidth = width - size.width;

            while (true) {

                const randomX = Math.random() * avaibleWidth;

                const randomY = Math.random() * avaibleHeight;

                const coincidenceX: boolean = dropShapeCoordx.findIndex(
                    coordx => randomX >= (coordx.x - size.width) && randomX <= (coordx.x + size.width)
                ) >= 0;

                const coincidenceY: boolean = dropShapeCoordx.findIndex(
                    coordx => randomY >= (coordx.y - size.height) && randomY <= (coordx.y + size.height)
                ) >= 0;

                if (!(coincidenceX && coincidenceY)) {

                    const randomCoordx = new Coordx(randomX, randomY);

                    dropShapeCoordx.push(randomCoordx);


                    const key = crypto.randomUUID();

                    const dropShapeComponent = <DropShape
                        dropShape={dropShape}
                        coordx={randomCoordx}
                        size={size} id={key} key={key} />

                    dropShapeComponents.push(dropShapeComponent);

                    break;
                }
            }
        }

        setDropShapeComponents([...dropShapeComponents]);
    }

    // HTML element

    return (
        <div ref={workArea} style={style}>
            {dropShapeComponents}
        </div>
    );
}

export default RandomShapeField;