import { zip, from, range } from "rxjs";
import { errorObservable } from "./custom-operators";

const notebooks$ = from(["Dell", "Mac", "Hp"]);
const ratings$ = range(1, 5);
const error$ = errorObservable();

zip(notebooks$, ratings$, error$).subscribe({
  next: console.log,

  error: (err) => {
    console.log("Error", err);
  },

  complete: () => {
    console.log("Completed");
  },
});
