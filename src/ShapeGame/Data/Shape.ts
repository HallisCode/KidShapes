import React, { JSX } from "react";
import ShapeType from "../Enums/ShapeType";

interface IShape
{
    className : string,
    type : ShapeType,
    svg? : string
}

interface IDropShape extends IShape
{
    innerElement? : React.JSX.Element
}

class DragShape implements IShape
{
    className: string;
    type: ShapeType;
    svg?: string;


    constructor(className : string, type : ShapeType, svg? : string)
    {
        this.className = className;

        this.type = type;

        this.svg = svg;
    }
}

class DropShape implements IDropShape
{
    className: string;
    type: ShapeType;
    svg?: string;
    innerElement? : React.JSX.Element;

    constructor(className : string, type : ShapeType, svg? : string, innerElement? : React.JSX.Element)
    {
        this.className = className;

        this.type = type;

        this.svg = svg;

        this.innerElement = innerElement;

    }

}

export {type IShape, type IDropShape, DragShape, DropShape};