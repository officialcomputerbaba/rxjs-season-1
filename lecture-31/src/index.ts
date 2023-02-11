import { from } from "rxjs";
import { ajax } from "rxjs/ajax";
import { mergeMap } from "rxjs/operators";

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

from(urls)
  .pipe(
    mergeMap((url: string) => {
      return ajax.getJSON(url);
    })
  )
  .subscribe(console.log);
