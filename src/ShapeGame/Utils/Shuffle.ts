
function shuffle<T>(array : Array<T>) : Array<T>
{
    for(let index : number = array.length - 1; index > 0; index--)
    {
        const randomIndex : number = Math.floor( Math.random() * index );

        [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
    }

    return array;
}

export default shuffle;