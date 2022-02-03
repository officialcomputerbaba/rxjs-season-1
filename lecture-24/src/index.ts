import { race } from "rxjs";
import { delayedFrom, errorObservable } from "./custom-operators";

const points$ = delayedFrom([34, 12, 7, 1], 500);
const error$ = errorObservable();

race(points$, error$).subscribe({
  next: console.log,
  error: (err) => {
    console.log("Error", err);
  },
});
