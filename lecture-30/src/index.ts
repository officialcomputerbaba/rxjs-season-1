import { from } from "rxjs";
import { concatMap } from "rxjs/operators";
import { namedInterval } from "./custom-operators";

from(["x", "y", "z"])
  .pipe(
    concatMap((n: number) => {
      console.log("Queue ", n);
      return namedInterval(1500, `Interval ${n}`, 5);
    })
  )
  .subscribe((v) => {
    console.log("Processed ", v);
  });
