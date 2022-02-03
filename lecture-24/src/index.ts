import { race } from "rxjs";
import { namedInterval } from "./custom-operators";

// @example 1: Finite Observables

const timer1$ = namedInterval(1000, "timer1", 4);
const timer2$ = namedInterval(500, "timer2", 5);
const timer3$ = namedInterval(1500, "timer3", 3);

race(timer1$, timer2$, timer3$).subscribe(console.log);

// @example 2: Infinite Observables

// const timer1$ = namedInterval(1000, "timer1");
// const timer2$ = namedInterval(500, "timer2");
// const timer3$ = namedInterval(1500, "timer3");

// race(timer1$, timer2$, timer3$).subscribe(console.log);
