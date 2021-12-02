import { iif, of } from "rxjs";
import { ajax } from "rxjs/ajax";

let isAuthenticated = true;

const obs$ = iif(
  () => isAuthenticated,
  ajax.getJSON("https://jsonplaceholder.typicode.com/posts"),
  of("Not authenticated")
);

obs$.subscribe((value) => {
  console.log("1st observer", value);
});

isAuthenticated = false;

obs$.subscribe((value) => {
  console.log("2nd Observer", value);
});
