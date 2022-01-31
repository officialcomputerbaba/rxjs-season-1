import { forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const profile$ = {
  user: ajax.getJSON("https://jsonplaceholder.typicode.com/users/1"),
  books: of({ c: "Let us c", javascript: "Professional JavaScript 4" }),
};

forkJoin(profile$).subscribe((resultDict) => {
  console.log(resultDict);
});
