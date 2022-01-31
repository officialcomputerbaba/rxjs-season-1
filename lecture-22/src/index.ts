import { forkJoin, of } from "rxjs";
import { completeWithNoEmission } from "./custom-operators";

const empty$ = completeWithNoEmission();
const names$ = of("Ajit", "Amitabh");

forkJoin([empty$, names$]).subscribe({
  // there will be no call to `next` callback
  next: console.log,

  // only complete callback is called
  complete: () => {
    console.log("Completed");
  },
});
