import { ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";

interface User {
  name: string;
  id: string;
  email: string;
}

ajax
  .getJSON<User[]>("https://jsonplaceholder.typicode.com/users")
  .pipe(
    map((users) => {
      return users.map((user) => user.name);
    })
  )
  .subscribe(console.log);
