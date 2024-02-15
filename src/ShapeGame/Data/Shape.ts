import ShapeType from "../Enums/ShapeType.ts";

interface IShape
{
    className : string,
    type : ShapeType,
    svg? : string
}

class Shape implements IShape
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

export {IShape, Shape};