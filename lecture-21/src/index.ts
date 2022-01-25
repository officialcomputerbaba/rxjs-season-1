import { combineLatest } from "rxjs";
import { fromEvent } from "./custom-operators";

const width$ = fromEvent(document.getElementById("widthBox"), "blur");

const length$ = fromEvent(document.getElementById("lengthBox"), "blur");

combineLatest([width$, length$]).subscribe((resultPair) => {
  const [width, length] = resultPair;

  const area = +width * +length;

  console.log(`Area: ${width} x ${length} = ${area}`);
});
