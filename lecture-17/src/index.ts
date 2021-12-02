import { iif, of, fromEvent } from "rxjs";

let isAuthenticated = true;

const obs$ = iif(() => isAuthenticated, of(["Ajit", "Ronaldo"]), of([]));

obs$.subscribe((value) => {
  console.log("1st observer", value);
});

isAuthenticated = false;

const btn = document.getElementById("btn") as HTMLButtonElement;

// traditional event handling pattern
btn?.addEventListener("click", () => {
  obs$.subscribe((value) => {
    console.log("2nd Observer", value);
  });
});

// NOTE: we can also use below code to use observer pattern style event handling
// uncomment the below code and comment the traditional code written above to see the behavior

// fromEvent(btn, "click").subscribe(() => {
//   obs$.subscribe((value) => {
//     console.log("2nd Observer", value);
//   });
// });
