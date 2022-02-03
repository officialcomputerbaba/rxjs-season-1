import { race } from "rxjs";
import { namedInterval, intervalError } from "./custom-operators";

const timer1$ = namedInterval(1000, "timer1");

// this observable will throw error after some time
const timer2$ = intervalError(500, "timer2");

race(timer1$, timer2$).subscribe({
  next: console.log,
  error: (err) => {
    console.log("Error", err);
  },
});
