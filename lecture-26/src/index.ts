import { EMPTY } from "rxjs";

EMPTY.subscribe({
  // the next method will not be called
  next: (v) => {
    console.log("Next method ", v);
  },
  // the error method will not be called
  error: (err) => {
    console.log("Err method ", err);
  },
  // only the complete method will be called
  complete: () => {
    console.log("Completed");
  },
});
