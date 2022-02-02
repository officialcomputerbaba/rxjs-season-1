import { zip, from } from "rxjs";

const notebooks$ = from(["Dell", "Mac", "Hp"]);
const ratings$ = from([5, 4, 1]);

zip(notebooks$, ratings$).subscribe({
  next: console.log,

  complete: () => {
    console.log("Completed");
  },
});
