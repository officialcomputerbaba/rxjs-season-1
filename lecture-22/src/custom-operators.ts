import { timer, interval, Observable, EMPTY, fromEvent as rxjsFromEvent, throwError } from "rxjs";
import { map, take, tap } from "rxjs/operators";

export function namedTimer(time: number, name: string) {
  return timer(time, 1000).pipe(
    take(5),
    tap(() => console.log(`${name} emitted`))
  );
}

export function limitedInterval(time: number, limit = 5) {
  return interval(time).pipe(take(limit));
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
