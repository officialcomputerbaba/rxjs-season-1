import { interval, throwError } from "rxjs";
import { map, take } from "rxjs/operators";

export function namedInterval(time: number, name: string, limit: number = Number.MAX_SAFE_INTEGER) {
  return interval(time).pipe(
    take(limit),
    map((v) => `${name}: ${v}`)
  );
}

export function errorObservable(msg = "Observable Error") {
  return throwError(() => msg);
}
