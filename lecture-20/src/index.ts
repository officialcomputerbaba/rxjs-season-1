import { merge } from "rxjs";
import { namedInterval } from "./custom-operators";

const timer1$ = namedInterval(1000, "timer1", 7);
const timer2$ = namedInterval(2000, "timer2", 6);
const timer3$ = namedInterval(500, "timer3", 10);

// defaults to no. of observables
// try different values
const concurrent = 2;

merge(timer1$, timer2$, timer3$, concurrent).subscribe(console.log);
