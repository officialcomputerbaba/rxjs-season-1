import { combineLatest } from "rxjs";
import { namedTimer } from "./custom-operators";

const timer1$ = namedTimer(0, "timer1");
const timer2$ = namedTimer(500, "timer2");

combineLatest([timer1$, timer2$]).subscribe((resultPair) => {
  console.log(resultPair);
});
