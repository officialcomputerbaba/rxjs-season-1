import { zip, from } from "rxjs";

const lang$ = from(["JS", "JAVA", "C"]);
const frameworks$ = from(["Angular", "Spring"]);

zip(lang$, frameworks$).subscribe((resultList) => {
  console.log(resultList);
});
