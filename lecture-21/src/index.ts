import { combineLatest, interval, fromEvent } from "rxjs";

const timer$ = interval(1000);
const click$ = fromEvent(document, "click");

combineLatest([timer$, click$]).subscribe((resultPair) => {
  console.log(resultPair);
});
