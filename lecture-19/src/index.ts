import { interval, range, concat } from "rxjs";

// infinite observable, will put `concat` on forever wait to subscribe other observable
const interval$ = interval(1000);

const range$ = range(1, 5); // never subscribed by `concat`

concat(interval$, range$).subscribe({
  next: console.log,
  complete: () => {
    console.log("Completed");
  },
});
