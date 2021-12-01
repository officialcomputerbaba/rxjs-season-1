import { ajax } from "rxjs/ajax";

// @example 1: Basic GET request

// const http$ = ajax("https://jsonplaceholder.typicode.com/posts");

// http$.subscribe(console.log);

/********************************/

// @example 2: Error Handling

// const http$ = ajax("https://httpbin.org/status/404");

// http$.subscribe({
//   next: (res) => {
//     console.log(res.response);
//   },
//   error: (err) => {
//     console.log(`Error: `, err);
//   },
// });

/********************************/

// @example 3: Headers

// const http$ = ajax({
//   url: "https://jsonplaceholder.typicode.com/posts",
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
//     Accept: "application/json",
//   },
// });

// http$.subscribe({
//   next: (res) => {
//     console.log(res.response);
//   },
//   error: (err) => {
//     console.log(`Error: `, err);
//   },
// });

/********************************/

// @example 4: POST request

// const http$ = ajax({
//   url: "https://jsonplaceholder.typicode.com/posts",
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   },
// });

// http$.subscribe({
//   next: (res) => {
//     console.log(res.response);
//   },
//   error: (err) => {
//     console.log(`Error: `, err);
//   },
// });

/********************************/

// @example 5: POST request with Form Data (multipart/form-data)

// const fd = new FormData();
// fd.append("hello", "world");

// const http$ = ajax({
//   url: "https://jsonplaceholder.typicode.com/posts",
//   method: "POST",
//   body: fd,
// });

// http$.subscribe({
//   next: (res) => {
//     console.log(res.response);
//   },
//   error: (err) => {
//     console.log(`Error: `, err);
//   },
// });

/********************************/

// @example 6: GET request with `responseType`
// default `responseType` is 'json'

// const http$ = ajax({
//   url: "https://httpbin.org/encoding/utf8",
//   method: "GET",
//   responseType: "text",
// });

// http$.subscribe({
//   next: (res) => {
//     console.log(res.response);
//   },
//   error: (err) => {
//     console.log(`Error: `, err);
//   },
// });

/********************************/

// @example 7: GET request with static `get` method
// default `responseType` is 'json'

// const http$ = ajax.get("https://jsonplaceholder.typicode.com/posts", { "x-some-header-key": "value" });

// http$.subscribe({
//   next: (res) => {
//     console.log(res.response);
//   },
//   error: (err) => {
//     console.log(`Error: `, err);
//   },
// });

/********************************/

// @example 8: GET request with static `getJSON` method

// const http$ = ajax.getJSON("https://jsonplaceholder.typicode.com/posts");

// http$.subscribe({
//   next: (res) => {
//     console.log(res); // previously `res.response`
//   },
//   error: (err) => {
//     console.log(`Error: `, err);
//   },
// });

/********************************/

// @example 9: GET request with static `post` method

// const http$ = ajax.post(
//   "https://jsonplaceholder.typicode.com/posts",
//   { hello: "world" },
//   {
//      "x-some-optional-header": "value"
//   }
// );

// http$.subscribe({
//   next: (res) => {
//     console.log(res.response);
//   },
//   error: (err) => {
//     console.log(`Error: `, err);
//   },
// });

/********************************/

// @example 10: GET request with static `put` method

// const http$ = ajax.put(
//   "https://jsonplaceholder.typicode.com/posts/1",
//   {
//  id: 1,
//  title: 'foo',
//  body: 'bar',
//  userId: 1
// },
//   {
//    "x-some-optional-header": "value"
//   }
// );

// http$.subscribe({
//   next: (res) => {
//     console.log(res.response);
//   },
//   error: (err) => {
//     console.log(`Error: `, err);
//   },
// });

/********************************/

// @example 11: GET request with static `patch` method

// const http$ = ajax.patch(
//   "https://jsonplaceholder.typicode.com/posts/1",
//   { title: "foo" },
//   {
//     "x-some-optional-header": "value"
//   }
// );

// http$.subscribe({
//   next: (res) => {
//     console.log(res.response);
//   },
//   error: (err) => {
//     console.log(`Error: `, err);
//   },
// });

/********************************/

// @example 12: GET request with static `delete` method

// const http$ = ajax.delete(
//   "https://jsonplaceholder.typicode.com/posts/1",
//   {
//     "x-some-optional-header": "value"
//   }
// );

// http$.subscribe({
//   next: (res) => {
//     console.log(res.response);
//   },
//   error: (err) => {
//     console.log(`Error: `, err);
//   },
// });
