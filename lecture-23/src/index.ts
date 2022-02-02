import { zip, fromEvent } from "rxjs";

const mouseDown$ = fromEvent<MouseEvent>(document, "mousedown");
const mouseUp$ = fromEvent<MouseEvent>(document, "mouseup");

zip(mouseDown$, mouseUp$).subscribe((eventsPair) => {
  const [mouseDownEvent, mouseUpEvent] = eventsPair;

  console.log(`x: ${mouseDownEvent.x}, y: ${mouseDownEvent.y}`);
  console.log(`x: ${mouseUpEvent.x}, y: ${mouseUpEvent.y}`);
});
