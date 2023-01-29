import { from, of } from "rxjs";
import { map } from "rxjs/operators";

from(["Ajit", "Ronaldo", "Dr. Strange", "Ashish"])
  .pipe(
    map((name) => {
      return of(name.toUpperCase());
    })
  )
  .subscribe(console.log);
