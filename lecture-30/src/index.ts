import { from, timer } from "rxjs";
import { map, concatMap } from "rxjs/operators";

from([timer(1000), timer(500), timer(2000)])
  .pipe(
    concatMap((timer$) => timer$),
    map((v: number, idx: number) => {
      return idx + 1;
    })
  )
  .subscribe((i: number) => {
    console.log(`Timer ${i} completed`);
  });
