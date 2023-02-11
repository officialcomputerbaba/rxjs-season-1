import { fromEvent } from "rxjs";
import { concatMap } from "rxjs/operators";
import { limitedInterval } from "./custom-operators";

fromEvent(document, "click")
  .pipe(concatMap(() => limitedInterval(1000, 5)))
  .subscribe(console.log);
