import { from, of } from "rxjs";
import { concatMap } from "rxjs/operators";

from([1, 3, 5])
  .pipe(
    concatMap((n: number, idx: number) => {
      return of(n * 2);
    })
  )
  .subscribe(console.log);
