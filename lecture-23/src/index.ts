import { zip, of, interval } from "rxjs";

const names$ = of("Ajit", "Amitabh", "Ashish", "Akshay");
const roles$ = of("Mentor", "Programmer", "Designer", "Developer");
const ranks$ = of(11, 23, 5);
const timer$ = interval(2000);

// max resultant pairs possible 3
// smallest size observable `ranks$` determines the maximum number of pairs

zip(names$, roles$, ranks$, timer$).subscribe(console.log);
