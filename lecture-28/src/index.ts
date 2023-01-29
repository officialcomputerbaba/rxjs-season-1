import { from } from "rxjs";
import { map } from "rxjs/operators";

const names$ = from(["Ajit", "Ronaldo", "Dr. Strange"]);

// example 1

const namesUpper$ = names$.pipe(map((name) => name.toUpperCase()));

namesUpper$.subscribe(console.log);

// example 2: with index

// const namesList$ = names$.pipe(
//   map((name, idx) => {
//     return `${idx + 1} ${name}`;
//   })
// );

// namesList$.subscribe(console.log);
