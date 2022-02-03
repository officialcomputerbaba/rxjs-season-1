import { race } from "rxjs";
import { ajax } from "rxjs/ajax";

const net1$ = ajax.get("https://httpbin.org/delay/1?id=12");
const net2$ = ajax.get("https://httpbin.org/delay/2?id=3");
const net3$ = ajax.get("https://httpbin.org/delay/1?id=10");

// the requests which complete first
// it can be `net1$` or `net2$` depends upon network and server

race(net1$, net2$, net3$).subscribe((netResponse) => {
  console.log(netResponse.response);
});
