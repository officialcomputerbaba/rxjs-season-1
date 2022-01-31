import { forkJoin, range } from "rxjs";
import { noEmissionObservable } from "./custom-operators";

const noEmit$ = noEmissionObservable();
const range$ = range(1, 5);

// there will be no output, forkJoin is in forever wait because of `noEmit$`

forkJoin([noEmit$, range$]).subscribe(console.log);
