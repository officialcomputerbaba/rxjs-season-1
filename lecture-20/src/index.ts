import { merge, fromEvent } from "rxjs";

const nameInputBox = document.getElementById("name") as HTMLInputElement;
const btn = document.getElementById("btn") as HTMLButtonElement;

const blur$ = fromEvent(nameInputBox, "blur");
const click$ = fromEvent(btn, "click");

merge(blur$, click$).subscribe(() => {
  console.log(nameInputBox.value);
});
