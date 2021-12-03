import { defer, fromEvent, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const select = document.getElementById("fetchType") as HTMLSelectElement;

const obs$ = defer(() => {
  const fetchType = select?.value;

  switch (fetchType) {
    case "posts":
      return ajax.getJSON("https://jsonplaceholder.typicode.com/posts");

    case "comments":
      return ajax.getJSON("https://jsonplaceholder.typicode.com/comments");

    case "users":
      return ajax.getJSON("https://jsonplaceholder.typicode.com/users");

    default:
      return of([]);
  }
});

fromEvent(document.getElementById("fetchBtn") as HTMLButtonElement, "click").subscribe(() => {
  obs$.subscribe(console.log);
});
