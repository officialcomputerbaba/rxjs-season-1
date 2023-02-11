import { from } from "rxjs";
import { concatMap } from "rxjs/operators";

const urls = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/comments/1",
];

// example 1

from(urls)
  .pipe(
    concatMap((url: string) => {
      return fetch(url).then((res) => res.json());
    })
  )
  .subscribe(console.log);

// --------------------

// example 2: async function

// from(urls)
//   .pipe(
//     concatMap(async (url: string) => {
//       const res = await fetch(url);
//       return await res.json();
//     })
//   )
//   .subscribe(console.log);
