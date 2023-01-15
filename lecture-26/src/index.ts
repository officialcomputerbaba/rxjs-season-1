import { EMPTY, defer, fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";

let isDownloaded = false;

const download$ = defer(() => {
  return isDownloaded ? EMPTY : ajax.get("https://httpbin.org/image/png");
});

const downBtn = document.getElementById("downBtn") as HTMLButtonElement;

fromEvent(downBtn, "click").subscribe(() => {
  download$.subscribe({
    next: (v) => {
      isDownloaded = true;
      console.log("Image data", v);
    },
    complete: () => {
      console.log("Download completed");
    },
  });
});
