import { merge, interval } from "rxjs";
import { errorObservable } from "./custom-operators";

const interval$ = interval(1000);
const error$ = errorObservable();

merge(interval$, error$).subscribe({
  next: console.log,

  // whenever error occurs
  error: (err) => {
    console.log("Error", err);
  },
});
