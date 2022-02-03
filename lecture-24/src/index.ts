import { race } from "rxjs";
import { namedInterval } from "./custom-operators";

const interval1$ = namedInterval(500, "timer1", 3);
const interval2$ = namedInterval(4000, "timer2", 7);

race(interval1$, interval2$).subscribe({
  next: console.log,

  // when interval1$ completes this callback is called
  complete: () => {
    console.log("Completed");
  },
});
