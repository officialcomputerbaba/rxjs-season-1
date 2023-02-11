import { from } from "rxjs";
import { mergeMap } from "rxjs/operators";

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
  "https://jsonplaceholder.typicode.com/posts/4",
];

// example 1

from(urls)
  .pipe(
    mergeMap((url: string) => {
      return fetch(url).then((res) => res.json());
    })
  )
  .subscribe(console.log);

// example 2: with async function

// from(urls)
//   .pipe(
//     mergeMap(async (url: string) => {
//       const res = await fetch(url);
//       return await res.json();
//     })
//   )
//   .subscribe(console.log);
