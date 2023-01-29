import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

fromEvent<PointerEvent>(document, "click").pipe(
    map((evt) => {
      return { x: evt.x, y: evt.y };
    })
  );
  .subscribe(console.log);
