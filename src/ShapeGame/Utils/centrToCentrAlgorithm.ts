import { DroppableContainer, DroppableContainers } from "@dnd-kit/core";
import { RectMap } from "@dnd-kit/core/dist/store";
import { Coordinates, ClientRect } from "@dnd-kit/core/dist/types";
import { Collision, distanceBetween } from "@dnd-kit/core/dist/utilities";


function centerOfRectangle(
    rect: ClientRect,
    left = rect.left,
    top = rect.top
): Coordinates {
    return {
        x: left + rect.width * 0.5,
        y: top + rect.height * 0.5,
    };
}

function centrToCentr({
    collisionRect,
    droppableRects,
    droppableContainers,
} : 
{
    collisionRect: ClientRect;
    droppableRects: RectMap;
    droppableContainers: DroppableContainer[];

}
): Collision[] {

    const centerRect = centerOfRectangle(
        collisionRect
    );

    const collisions : Collision[] = [];

    for (const droppableContainer of droppableContainers) {
        const { id } = droppableContainer;
        const rect = droppableRects.get(id);

        if (rect) {
            const distBetween = distanceBetween(centerOfRectangle(rect), centerRect);

            if (distBetween <= rect.width * 0.25) {

                collisions.push({id, data: {droppableContainer, value: distBetween}}) ;
            }
        }
    }

    return collisions;
    
}

export default centrToCentr;

