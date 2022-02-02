import { zip, concat, combineLatest, from } from "rxjs";

const lang$ = from(["JS", "JAVA", "C"]);
const frameworks$ = from(["Angular", "Spring"]);

console.log("--concat--");

concat(lang$, frameworks$).subscribe((value) => {
  console.log(value);
});

console.log("--combineLatest--");

combineLatest([lang$, frameworks$]).subscribe((resultList) => {
  console.log(resultList);
});

console.log("--zip--");

zip(lang$, frameworks$).subscribe((resultPair) => {
  console.log(resultPair);
});
