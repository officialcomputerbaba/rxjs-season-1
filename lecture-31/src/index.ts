import { from } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { delayedOf } from "./custom-operators";

from([1500, 700, 1000])
  .pipe(
    mergeMap((time: number, idx: number) => {
      const value = `Place ${idx + 1}`;

      return delayedOf(value, time);
    })
  )
  .subscribe(console.log);
