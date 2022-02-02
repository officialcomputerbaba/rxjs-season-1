import { zip, of, interval } from "rxjs";

const marks$ = of(12, 34);
const timer$ = interval(1000);

// max resultant pairs possible 2
// result [12, 0] [34, 1]
// smallest size observable `of` determines the maximum number of pairs

zip(marks$, timer$).subscribe(console.log);
