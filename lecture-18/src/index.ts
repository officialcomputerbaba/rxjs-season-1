import { defer, fromEvent, of, iif } from "rxjs";
import { ajax } from "rxjs/ajax";

// @example 1

let id = 3;

const obs$ = defer(() => {
  if (id > 0 && id <= 3) {
    return ajax.getJSON(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  return of([]);
});

fromEvent(document.getElementById("actionBtn") as HTMLButtonElement, "click").subscribe(() => {
  obs$.subscribe((data) => {
    id -= 1;
    console.log(data);
  });
});

/********************************/

// @example 2: diff b/w `defer` and `iif`

// let id = 3;

// const obs$ = iif(() => id > 0 && id <= 3, ajax.getJSON(`https://jsonplaceholder.typicode.com/users/${id}`), of([]));

// fromEvent(document.getElementById("actionBtn") as HTMLButtonElement, "click").subscribe(() => {
//   obs$.subscribe((data) => {
//     id -= 1;
//     console.log(data);
//   });
// });

/********************************/

// @example 3: Returning Promise in`defer`

// let id = 3;

// const obs$ = defer(() => {
//   if (id > 0 && id <= 3) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   }

//   return of([]);
// });

// fromEvent(document.getElementById("actionBtn") as HTMLButtonElement, "click").subscribe(() => {
//   obs$.subscribe((data) => {
//     id -= 1;
//     console.log(data);
//   });
// });
