import { iif, of, from } from "rxjs";

// @example 1

let isAuthenticated = true;

const obs$ = iif(() => isAuthenticated, of(["Ajit", "Ronaldo"]), of([]));

obs$.subscribe((value) => {
  console.log("1st observer", value);
});

isAuthenticated = false;

obs$.subscribe((value) => {
  console.log("2nd Observer", value);
});

// @example 2: async/later subscription

// let isAuthenticated = true;

// const obs$ = iif(() => isAuthenticated, of(["Ajit", "Ronaldo"]), of([]));

// obs$.subscribe((value) => {
//   console.log("1st observer", value);
// });

// isAuthenticated = false;

// setTimeout(() => {
//   obs$.subscribe((value) => {
//     console.log("2nd Observer", value);
//   });
// }, 2000);

// @example 3: different types of Observables `from` and `of`

// let isAuthenticated = true;

// const obs$ = iif(() => isAuthenticated, from(["Ajit", "Ronaldo"]), of([]));

// obs$.subscribe((res) => {
//   console.log("1st observer", res);
// });

// isAuthenticated = false;

// obs$.subscribe((value) => {
//   console.log("2nd Observer", value);
// });
