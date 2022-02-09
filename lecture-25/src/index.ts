import { concat, merge, combineLatest, zip, forkJoin, from } from "rxjs";

const names$ = from(["Ajit", "Sagar", "Anusha"]);
const views$ = from([10, 20, 30, 40]);

// concat(names$, views$).subscribe(console.log);
// merge(names$, views$).subscribe(console.log);
// combineLatest([names$, views$]).subscribe(console.log);
// forkJoin([names$, views$]).subscribe(console.log);
// zip([names$, views$]).subscribe(console.log);
