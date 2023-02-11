import { from } from "rxjs";
import { ajax } from "rxjs/ajax";
import { mergeMap } from "rxjs/operators";

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
  "https://jsonplaceholder.typicode.com/posts/4",
];

from(urls)
  .pipe(
    mergeMap((url: string) => {
      return ajax.getJSON(url);
    }, 2) // with concurrent factor 2, `concatMap` always has 1
  )
  .subscribe(console.log);
