import { forkJoin, of, from } from "rxjs";
import { errorObservable } from "./custom-operators";

const marks$ = of(100, 90, 70);
const errorObs$ = errorObservable();
const users$ = from(["Sagar", "Nitish"]);

forkJoin([marks$, errorObs$, users$]).subscribe({
  // not going to be called
  next: console.log,

  // this callback will be called
  error: (err) => {
    console.log("Error:", err);
  },

  // not going to be called
  complete: () => {
    console.log("Completed");
  },
});
