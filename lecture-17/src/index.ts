import { iif, fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";

const select = document.getElementById("fetchType") as HTMLSelectElement;

const obs$ = iif(
  () => select?.value === "posts",
  ajax.getJSON("https://jsonplaceholder.typicode.com/posts"),
  ajax.getJSON("https://jsonplaceholder.typicode.com/comments")
);

fromEvent(document.getElementById("fetchBtn") as HTMLButtonElement, "click").subscribe(() => {
  obs$.subscribe(console.log);
});
