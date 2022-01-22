import { merge, interval, fromEvent } from "rxjs";

const interval$ = interval(1000);
const click$ = fromEvent(document, "click");

merge(interval$, click$).subscribe(console.log);
