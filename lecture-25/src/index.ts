import { concat, merge, combineLatest, zip, forkJoin } from "rxjs";
import { delayedFrom } from "./custom-operators";

const names$ = delayedFrom(["Ajit", "Sagar", "Anusha"], 500);
const views$ = delayedFrom([10, 20, 30, 40], 700);

// concat(names$, views$).subscribe(console.log);
// merge(names$, views$).subscribe(console.log);
// combineLatest([names$, views$]).subscribe(console.log);
// forkJoin([names$, views$]).subscribe(console.log);
// zip([names$, views$]).subscribe(console.log);
