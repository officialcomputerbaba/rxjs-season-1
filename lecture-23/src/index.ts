import { zip, fromEvent } from "rxjs";

const mouseDown$ = fromEvent<MouseEvent>(document, "mousedown");
const mouseUp$ = fromEvent<MouseEvent>(document, "mouseup");

const mouseEvents$ = zip(mouseDown$, mouseUp$, (mouseDownEvent, mouseUpEvent) => {
  return {
    down: mouseDownEvent,
    up: mouseUpEvent,
  };
});

mouseEvents$.subscribe((events) => {
  const { down, up } = events;

  console.log(`x: ${down.x}, y: ${down.y}`);
  console.log(`x: ${up.x}, y: ${up.y}`);
});
