import { of, from, concat } from "rxjs";

const num$ = of(23, 12, 3);
const names$ = from(["Ajit", "Amitabh"]);
const isAllowed = Promise.resolve(true); // we can use a Promise also

concat(num$, names$, isAllowed).subscribe(console.log);
