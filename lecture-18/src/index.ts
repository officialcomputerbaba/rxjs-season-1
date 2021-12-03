import { defer, of } from "rxjs";

// @example 1: Problem with `of` observable

// const obs$ = of(new Date());

// obs$.subscribe((value) => {
//   console.log("1st observer ", value.toTimeString());
// });

// setTimeout(() => {
//   obs$.subscribe((value) => {
//     console.log("2nd observer ", value.toTimeString());
//   });
// }, 4000);

/********************************/

// @example 2: Solution using `defer`

const obs$ = defer(() => {
  return of(new Date());
});

obs$.subscribe((value) => {
  console.log("1st observer ", value.toTimeString());
});

setTimeout(() => {
  obs$.subscribe((value) => {
    console.log("2nd observer ", value.toTimeString());
  });
}, 4000);
