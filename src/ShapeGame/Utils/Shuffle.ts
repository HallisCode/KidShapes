
function shuffle(array : Array<any>)
{
    for(let index : number = array.length; index > 0; index--)
    {
        const randomIndex : number = Math.floor( Math.random() * index );

        [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
    }

    return array;
}