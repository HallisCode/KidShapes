
interface ISize
{
    height : number,
    width : number
}

class Size implements ISize
{
    height : number;
    width : number;

    constructor(height : number, width : number)
    {
        this.height = height;

        this.width = width;
    }

}

export {ISize, Size};