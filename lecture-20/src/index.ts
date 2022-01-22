import { merge } from "rxjs";
import { ajax } from "rxjs/ajax";

const user$ = ajax.getJSON("https://jsonplaceholder.typicode.com/users/1");

const post$ = ajax.getJSON("https://jsonplaceholder.typicode.com/posts/1");

merge(user$, post$).subscribe({
  next: console.log,

  // when both input observables completed
  complete: () => {
    console.log("Completed");
  },
});
