import { concat, merge, combineLatest, zip, forkJoin } from "rxjs";
import { namedInterval, delayedFrom } from "./custom-operators";

const pingInterval$ = namedInterval(1000, "ping");
const browsers$ = delayedFrom(["Chrome", "Safari", "Mozilla"], 500);

// concat(pingInterval$, browsers$).subscribe(console.log);
// merge(pingInterval$, browsers$).subscribe(console.log);
// combineLatest([pingInterval$, browsers$]).subscribe(console.log);
// forkJoin([pingInterval$, browsers$]).subscribe(console.log);
// zip([pingInterval$, browsers$]).subscribe(console.log);
