import { concat, merge, combineLatest, zip, forkJoin, fromEvent } from "rxjs";

const mouseDown$ = fromEvent<MouseEvent>(document, "mousedown");
const mouseUp$ = fromEvent<MouseEvent>(document, "mouseup");

// concat(mouseDown$, mouseUp$).subscribe(console.log);
// merge(mouseDown$, mouseUp$).subscribe(console.log);
// combineLatest([mouseDown$, mouseUp$]).subscribe(console.log);
// forkJoin([mouseDown$, mouseUp$]).subscribe(console.log);
// zip([mouseDown$, mouseUp$]).subscribe(console.log);
