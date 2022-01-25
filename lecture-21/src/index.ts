import { combineLatest, range } from "rxjs";
import { noEmissionObservable } from "./custom-operators";

const noEmit$ = noEmissionObservable();
const range$ = range(1, 5);

// no result will be printed, `combineLatest` is in forever wait
combineLatest([noEmit$, range$]).subscribe((resutlPair) => {
  console.log(resutlPair);
});
