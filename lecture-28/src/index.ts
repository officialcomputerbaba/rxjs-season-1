import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

fromEvent<KeyboardEvent>(document.getElementById("inputBox") as HTMLInputElement, "keyup")
  .pipe(
    map((evt) => {
      const input = evt.target as HTMLInputElement;

      return input.value;
    })
  )
  .subscribe(console.log);
