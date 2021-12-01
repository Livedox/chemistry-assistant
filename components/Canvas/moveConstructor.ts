import React, { DetailedHTMLProps, HTMLAttributes, MouseEvent } from "react";

export interface IMoveConstructorProps<T> {
    element: HTMLElement;
    data: T;
}

function moveConstructor<T> (
    start: (e: MouseEvent | TouchEvent) => IMoveConstructorProps<T>,
    move: (e: globalThis.MouseEvent | TouchEvent, props: IMoveConstructorProps<T>) => void,
    end: (props: IMoveConstructorProps<T>) => void
) {
    return function(e: MouseEvent | React.MouseEvent | globalThis.MouseEvent | TouchEvent | React.TouchEvent) {
        const props = start(e as (MouseEvent | TouchEvent));
        document.body.style.userSelect = "none";

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("touchmove", onMouseMove);

        function onMouseMove(e: globalThis.MouseEvent | TouchEvent) {
            console.log(e); 
            move(e, props);      
        }

        window.addEventListener("mouseup", endMove);
        window.addEventListener("touchend", endMove);

        function endMove() {
            document.body.style.userSelect = "auto";
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("touchmove", onMouseMove);
            window.removeEventListener("mouseup", endMove);
            window.removeEventListener("touchend", endMove);
            end(props);
        }
    }   
}

export default moveConstructor;