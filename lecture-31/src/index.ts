import { from } from "rxjs";
import { ajax } from "rxjs/ajax";
import { mergeMap, map } from "rxjs/operators";

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
  "https://jsonplaceholder.typicode.com/posts/4",
];

interface Post {
  id: number;
  title: string;
  body: string;
}

from(urls)
  .pipe(
    mergeMap((url: string) => ajax.getJSON<Post>(url)),
    map((post: Post) => post.title)
  )
  .subscribe(console.log);
