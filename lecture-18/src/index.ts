import { defer, fromEvent, of } from "rxjs";

const ball = document.getElementById("ball") as HTMLDivElement;

const obs$ = defer(() => {
  const newBall = {
    left: ball.getBoundingClientRect().x + 10 + "px",
    top: ball.getBoundingClientRect().y + 5 + "px",
    background: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
    class: "animationBall",
  };

  return of(newBall);
});

fromEvent<PointerEvent>(document, "click").subscribe((evt) => {
  ball.style.left = evt.clientX + "px";
  ball.style.top = evt.clientY + "px";

  obs$.subscribe((newBall) => {
    const ballElement = document.createElement("div");

    ballElement.classList.add(newBall.class);
    Object.assign(ballElement.style, newBall);

    document.body.appendChild(ballElement);
  });
});
