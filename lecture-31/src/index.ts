import { fromEvent, interval } from "rxjs";
import { mergeMap } from "rxjs/operators";

fromEvent(document, "click")
  .pipe(
    mergeMap((pointerEvent: PointerEvent, idx: number) => {
      return interval(1000);
    })
  )
  .subscribe(console.log);
