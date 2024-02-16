import { IShape, DragShape, DropShape, IDropShape } from "../Data/Shape.ts";
import ShapeType from "../Enums/ShapeType.ts";

import square from "../svg/square.svg";
import square_drop from "../svg/square-drop.svg";

import circle from "../svg/circle.svg";
import circle_drop from "../svg/circle-drop.svg";

import triangle from "../svg/triangle.svg";
import triangle_drop from "../svg/triangle-drop.svg";

import rectangle from "../svg/rectangle.svg";
import rectangle_drop from "../svg/rectangle-drop.svg";

import star from "../svg/star.svg";
import star_drop from "../svg/star-drop.svg";

import parallelogram from "../svg/parallelogram.svg";
import parallelogram_drop from "../svg/parallelogram-drop.svg";

import rhombus from "../svg/rhombus.svg";
import rhombus_drop from "../svg/rhombus-drop.svg";


import styles from "../css/game.module.css";


function GetDragShapes() : Array<IShape>
{
    const shapes: Array<IShape> = new Array<IShape>;

    shapes.push(new DragShape(styles.Shape, ShapeType.square, square));

    shapes.push(new DragShape(styles.Shape, ShapeType.circle, circle));

    shapes.push(new DragShape(styles.Shape, ShapeType.triangle, triangle));

    shapes.push(new DragShape(styles.Shape, ShapeType.parallelogram, parallelogram));

    shapes.push(new DragShape(styles.Shape, ShapeType.rectangle, rectangle));

    shapes.push(new DragShape(styles.Shape, ShapeType.star, star));

    shapes.push(new DragShape(styles.Shape, ShapeType.rhombus, rhombus));

    return shapes;
}

function GetDropShapes() : Array<IDropShape>
{
    const shapes: Array<IDropShape> = new Array<IDropShape>;

    shapes.push(new DropShape(styles.DropShape, ShapeType.square, square_drop));

    shapes.push(new DropShape(styles.DropShape, ShapeType.circle, circle_drop));

    shapes.push(new DropShape(styles.DropShape, ShapeType.triangle, triangle_drop));

    shapes.push(new DropShape(styles.DropShape, ShapeType.parallelogram, parallelogram_drop));

    shapes.push(new DropShape(styles.DropShape, ShapeType.rectangle, rectangle_drop));

    shapes.push(new DropShape(styles.DropShape, ShapeType.star, star_drop));

    shapes.push(new DropShape(styles.DropShape, ShapeType.rhombus, rhombus_drop));

    return shapes;
}

export {GetDragShapes, GetDropShapes};