import { IShape, Shape } from "../Data/Shape.ts";
import ShapeType from "../Enums/ShapeType.ts";

import styles from "../css/game.module.css";


function GetDragShapes() : Array<IShape>
{
    const shapes: Array<IShape> = new Array<IShape>;

    shapes.push(new Shape(styles.Shape, ShapeType.square));

    shapes.push(new Shape(styles.Shape, ShapeType.circle));

    shapes.push(new Shape(styles.Shape, ShapeType.triangle));

    shapes.push(new Shape(styles.Shape, ShapeType.parallelogram));

    shapes.push(new Shape(styles.Shape, ShapeType.rectangle));

    shapes.push(new Shape(styles.Shape, ShapeType.star));

    shapes.push(new Shape(styles.Shape, ShapeType.rhombus));

    return shapes;
}

function GetDropShapes() : Array<IShape>
{
    const shapes: Array<IShape> = new Array<IShape>;

    shapes.push(new Shape(styles.Shape, ShapeType.square));

    shapes.push(new Shape(styles.Shape, ShapeType.circle));

    shapes.push(new Shape(styles.Shape, ShapeType.triangle));

    shapes.push(new Shape(styles.Shape, ShapeType.parallelogram));

    shapes.push(new Shape(styles.Shape, ShapeType.rectangle));

    shapes.push(new Shape(styles.Shape, ShapeType.star));

    shapes.push(new Shape(styles.Shape, ShapeType.rhombus));

    return shapes;
}

export {GetDragShapes, GetDropShapes};