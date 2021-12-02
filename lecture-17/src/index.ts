import { iif, of } from "rxjs";
import { ajax } from "rxjs/ajax";

// @example 1: Promise, `fetch`

let isAuthenticated = true;

const obs$ = iif(() => isAuthenticated, fetch("https://jsonplaceholder.typicode.com/posts"), of("Not authenticated"));

obs$.subscribe((value) => {
  console.log("1st observer", value);
});

isAuthenticated = false;

obs$.subscribe((value) => {
  console.log("2nd Observer", value);
});

/********************************/

// @example 2: async function as Promise and JSON result

// let isAuthenticated = true;

// async function getPosts() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return await res.json();
// }

// const obs$ = iif(() => isAuthenticated, getPosts(), of("Not authenticated"));

// obs$.subscribe((value) => {
//   console.log("1st observer", value);
// });

// isAuthenticated = false;

// obs$.subscribe((value) => {
//   console.log("2nd Observer", value);
// });

/********************************/

// @example 3: Both true and false result as Promise

// let isAuthenticated = true;

// const obs$ = iif(() => isAuthenticated, fetch("https://jsonplaceholder.typicode.com/posts"), Promise.resolve("Not authenticated"));

// obs$.subscribe((value) => {
//   console.log("1st observer", value);
// });

// isAuthenticated = false;

// obs$.subscribe((value) => {
//   console.log("2nd Observer", value);
// });
