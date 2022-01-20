import { of, from, concat } from "rxjs";

const num$ = of(23, 12, 3);
const names$ = from(["Ajit", "Amitabh"]);

concat(num$, names$).subscribe({
  next: console.log,
  complete: () => {
    console.log("Completed");
  },
});
