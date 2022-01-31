import { forkJoin, from, of, timer } from "rxjs";

//  when all emites atleast one value and completes then emit the last values of each input observable

const rates$ = of(11, 20, 3, 14);
const timer$ = timer(4000);
const names$ = from(["Ajit", "Akshay", "Anusha"]);
const isAllowed = Promise.resolve(true);

forkJoin([rates$, timer$, names$, isAllowed]).subscribe((resultList) => {
  console.log(resultList);
});
