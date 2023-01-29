import { from } from "rxjs";
import { map } from "rxjs/operators";

// example 1

from([1, 2, 3, 4, 5])
  .pipe(
    map((n) => {
      return n * 2;
    })
  )
  .subscribe(console.log);

// example 2: with index

// from([1, 2, 3, 4, 5])
//   .pipe(
//     map((n, idx) => {
//       return n + idx;
//     })
//   )
//   .subscribe(console.log);
