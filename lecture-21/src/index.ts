import { combineLatest, of } from "rxjs";

const year$ = of(2022);
const series$ = of({ disneyPlus: "Moon Night", netflix: "Stranger Things 4" });

combineLatest([year$, series$]).subscribe({
  next: console.log,

  // in case of error (if any observable has an error)
  error: (err) => {
    console.log("Error", err);
  },

  // after both observables complete
  complete: () => {
    console.log("Completed");
  },
});
