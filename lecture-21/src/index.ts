import { combineLatest, of } from "rxjs";

const num1$ = of(12, 8, 6);
const num2$ = of(4, 2);
const num3$ = of(12, 20, 14);

combineLatest([num1$, num2$, num3$]).subscribe((resultPair) => {
  console.log(resultPair);
});
