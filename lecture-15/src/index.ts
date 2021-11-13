import { generate } from "rxjs";

// @example 1
generate({
  initialState: 1,
  condition: (v: number) => v <= 10,
  iterate: (v: number) => v + 1,
});

/********************************/

// @example 2
// generate({
//   initialState: 1,
//   condition: (v: number) => v <= 20,
//   iterate: (v: number) => v + 2,
// });

/********************************/

// @example 3
// generate({
//   initialState: 1,
//   condition: (v: number) => v <= 10,
//   iterate: (v: number) => v + 1,
//   resultSelector: (v: number) => `Count ${v}`,
// });

/********************************/

// @example 4
// const startDate = new Date("06/05/2021"); // date must be valid
// const endDate = new Date("07/08/2021"); // date must be valid

// function nextDate(date: Date): Date {
//   return new Date(date.setDate(date.getDate() + 1));
// }

// generate({
//   initialState: startDate,
//   condition: (d: Date) => d <= endDate,
//   iterate: nextDate,
//   resultSelector: (d: Date) => d.toDateString(),
// }).subscribe(console.log);

/********************************/

// @5 deprecated syntax
// DO NOT USE IT, only for legacy code

// generate(
//   startDate,
//   (d: Date) => d <= endDate,
//   nextDate,
//   (d: Date) => d.toDateString()
// ).subscribe(console.log);
