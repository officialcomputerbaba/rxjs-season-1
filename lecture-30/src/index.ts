import { from, timer } from "rxjs";
import { concatMap } from "rxjs/operators";

from([timer(1000), timer(500), timer(2000)])
  .pipe(concatMap((timer$) => timer$))
  .subscribe(console.log);
