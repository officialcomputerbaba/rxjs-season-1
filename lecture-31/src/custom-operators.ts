import { timer, interval, Observable, EMPTY, fromEvent as rxjsFromEvent, throwError, of } from "rxjs";
import { map, take, tap, filter, delay } from "rxjs/operators";

export function delayedFrom<T>(values: T[], time = 1500) {
  let counter = 0;

  return interval(time).pipe(
    take(values.length),
    map(() => values[counter++])
  );
}

export function delayedOf<T>(value: T, time = 0) {
  return of(value).pipe(delay(time));
}

export function namedTimer(time: number, name: string) {
  return timer(time, 1000).pipe(
    take(5),
    tap(() => console.log(`${name} emitted`))
  );
}

export function limitedInterval(time: number, limit = 5) {
  return interval(time).pipe(take(limit));
}

export function namedInterval(time: number, name: string, limit: number = Number.MAX_SAFE_INTEGER) {
  return interval(time).pipe(
    take(limit),
    map((v) => `${name}: ${v}`)
  );
}

export function noEmissionObservable() {
  const BLACK_HOLE = undefined;

  return new Observable((observer) => {
    if (BLACK_HOLE) {
      observer.next();
    }
  });
}

export function completeWithNoEmission() {
  return EMPTY;
}

export function fromEvent(element: HTMLElement | null, eventName: string) {
  return rxjsFromEvent(element as HTMLInputElement, eventName).pipe(
    map((event) => {
      return (event.target as HTMLInputElement).value;
    })
  );
}

export function errorObservable(msg = "Observable Error") {
  return throwError(() => msg);
}

export function intervalError(time: number, name: string, errorAfter = 3) {
  let counter = 1;

  return namedInterval(time, name).pipe(
    filter(() => {
      if (counter++ === errorAfter) {
        throw new Error(`${name} error`);
      }

      return true;
    })
  );
}
