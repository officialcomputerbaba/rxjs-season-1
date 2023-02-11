import { from } from "rxjs";
import { ajax } from "rxjs/ajax";
import { concatMap } from "rxjs/operators";

const urls = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/comments/1",
];

from(urls)
  .pipe(
    concatMap((url: string) => {
      return ajax.getJSON(url);
    })
  )
  .subscribe(console.log);
