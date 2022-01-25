import { combineLatest, of } from "rxjs";
import { completeWithNoEmission } from "./custom-operators";

const empty$ = completeWithNoEmission();
const names$ = of("Ajit", "Amitabh");

combineLatest([empty$, names$]).subscribe({
  // no result will be printed
  next: console.log,

  // `combineLatest` completes immediately, because `empty$` completes without emitting any one
  complete: () => {
    console.log("Completed");
  },
});
