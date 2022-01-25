import { combineLatest } from "rxjs";
import { fromEvent } from "./custom-operators";

const rect$ = {
  width$: fromEvent(document.getElementById("widthBox"), "blur"),
  length$: fromEvent(document.getElementById("lengthBox"), "blur"),
};

combineLatest(rect$).subscribe((resultDict) => {
  console.log(resultDict);

  const { width, length } = resultDict;

  const area = +width * +length;

  console.log(`Area: ${width} x ${length} = ${area}`);
});
