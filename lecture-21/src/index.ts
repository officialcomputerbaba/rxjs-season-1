import { combineLatest, from, interval } from "rxjs";

const rank$ = from([56, 71, 23]);
const interval$ = interval(1000);

combineLatest([rank$, interval$]).subscribe(console.log);
