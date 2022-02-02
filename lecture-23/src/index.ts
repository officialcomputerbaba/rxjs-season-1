import { zip, of, from } from "rxjs";
import { delayedFrom } from "./custom-operators";

// @example 1: alternate time observables

const names$ = from(["Ajit", "Ronaldo"]);
const distance$ = delayedFrom([12, 10]);

zip(names$, distance$).subscribe((resultList) => {
  console.log(resultList);
});

// @example 2: immediately completing observables

// const names$ = of("Ajit", "Amitabh", "Ashish", "Akshay");
// const roles$ = of("Mentor", "Programmer", "Designer", "Developer");

// zip(names$, roles$).subscribe((resultList) => {
//   console.log(resultList);
// });
