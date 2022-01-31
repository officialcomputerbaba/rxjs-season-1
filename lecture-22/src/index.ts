import { forkJoin, of, from } from "rxjs";

const years$ = of(2016, 2020);
const heroes$ = from(["Spiderman", "Batman"]);

forkJoin([years$, heroes$]).subscribe({
  next: console.log,

  // this will be called after all observables complete
  complete: () => {
    console.log("Completed");
  },
});
