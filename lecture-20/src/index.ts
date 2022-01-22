import { merge } from "rxjs";
import { ajax } from "rxjs/ajax";

const user$ = ajax.getJSON("https://jsonplaceholder.typicode.com/users/1");

const post$ = ajax.getJSON("https://jsonplaceholder.typicode.com/posts/1");

const todo$ = ajax.getJSON("https://jsonplaceholder.typicode.com/todos/1");

// defaults to no. of observables
// try different values and check the network tab
const concurrent = 2;

merge(user$, post$, todo$, concurrent).subscribe({
  next: console.log,

  // when all ajax requests completed
  complete: () => {
    console.log("Completed");
  },
});
