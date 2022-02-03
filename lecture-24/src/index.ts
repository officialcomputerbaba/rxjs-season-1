import { race, of, interval } from "rxjs";

const roles$ = of("Admin", "User", "Tester");
const interval$ = interval(500);

race(roles$, interval$).subscribe(console.log);
