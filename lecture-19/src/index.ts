import { of, from, concat } from "rxjs";
import { ajax } from "rxjs/ajax";

const num$ = of(23, 12, 3);

// correct url -> https://jsonplaceholder.typicode.com/todos
const todos$ = ajax.getJSON("https://jsonplaceholder.typicode.com/todoss"); // this will create an error

const names$ = from(["Ajit", "Amitabh"]); // this observable will never be subscribed by `concat`

concat(num$, todos$, names$).subscribe({
  next: console.log,
  error: (err) => {
    console.log("Error", err);
  },
  complete: () => {
    console.log("Completed");
  },
});
