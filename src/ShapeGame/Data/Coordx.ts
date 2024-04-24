
interface ICoordx
{
    x : number,
    y : number
}

class Coordx implements ICoordx
{
    x : number;
    y : number;

    constructor(x : number, y : number)
    {
        this.x = x;

        this.y = y;
    }

}

export {type ICoordx, Coordx};