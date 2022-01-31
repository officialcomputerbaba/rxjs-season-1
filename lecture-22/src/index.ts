import { forkJoin, interval, range, from } from "rxjs";

const timer$ = interval(1000);
const ages$ = range(11, 20);
const roles$ = from(["Teacher", "Student"]);

// there will be no call to `next` and `complete` callback
// forkJoin is in forever wait because of `interval` observable

forkJoin([timer$, ages$, roles$]).subscribe({
  next: console.log,
  complete: () => {
    console.log("Completed");
  },
});
