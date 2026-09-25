(() => {
  "use strict";

  const modal = document.querySelector("#beyond-sport-details");
  if (!modal) return;

  const lifts = {
    bench: { name: "Développé couché", weight: "100", reps: "4 répétitions", index: "01" },
    press: { name: "Presse à cuisses", weight: "260", reps: "6 répétitions", index: "02" },
    extension: { name: "Leg extension", weight: "95", reps: "8 répétitions", index: "03" },
    curl: { name: "Curl marteau", weight: "26", reps: "7 répétitions", index: "04" },
  };
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const detail = modal.querySelector("#sport-lift-detail");
  const choices = [...modal.querySelectorAll("[data-lift]")];
  let detailAnimation;

  choices.forEach((button) => {
    button.addEventListener("click", () => {
      const lift = lifts[button.dataset.lift];
      if (!lift || button.getAttribute("aria-pressed") === "true") return;
      choices.forEach((choice) => {
        choice.setAttribute("aria-pressed", String(choice === button));
      });
      detail.querySelector("[data-lift-name]").textContent = lift.name;
      detail.querySelector("[data-lift-weight]").textContent = lift.weight;
      detail.querySelector("[data-lift-reps]").textContent = lift.reps;
      detail.querySelector("[data-lift-index]").textContent = `${lift.index} / 04`;
      detailAnimation?.cancel();
      if (!reducedMotion.matches && typeof detail.animate === "function") {
        detailAnimation = detail.animate(
          [{ opacity: 0.45, transform: "translateY(7px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 320, easing: "ease-out" },
        );
      }
    });
  });

  const rallyButton = modal.querySelector("[data-sport-rally]");
  const rallyLabel = modal.querySelector("[data-rally-label]");
  const ball = modal.querySelector(".sport-court__ball");
  const shadow = modal.querySelector(".sport-court__shadow");
  const trail = modal.querySelector(".sport-court__trail");
  const impact = modal.querySelector(".sport-court__impact");
  const rackets = [...modal.querySelectorAll(".sport-court__racket")];
  const status = modal.querySelector(".sport-rally-status");
  const points = [[58, 164], [562, 90], [58, 85], [562, 174], [58, 142], [562, 108], [58, 164]];
  const shotDuration = 1200;
  const totalDuration = (points.length - 1) * shotDuration;
  let frame = 0;
  let elapsed = 0;
  let lastTime = null;
  let state = "idle";
  let lastShot = -1;

  // The ground projection and the ball height share one clock. Each shot
  // bounces on the receiving side, then reaches the moving racket at height zero.
  const position = (time) => {
    const shot = Math.min(Math.floor(time / shotDuration), points.length - 2);
    const t = Math.min((time - shot * shotDuration) / shotDuration, 1);
    const from = points[shot];
    const to = points[shot + 1];
    const bounce = .68;
    const height = t < bounce
      ? 20 * Math.sin(Math.PI * t / bounce)
      : 9 * Math.sin(Math.PI * (t - bounce) / (1 - bounce));
    return { shot, t, x: from[0] + (to[0] - from[0]) * t, y: from[1] + (to[1] - from[1]) * t, height };
  };
  const draw = (time) => {
    const p = position(time);
    ball.style.transform = `translate(${p.x}px, ${p.y - p.height}px) scale(${1 + p.height / 100})`;
    shadow.setAttribute("cx", p.x);
    shadow.setAttribute("cy", p.y);
    shadow.setAttribute("rx", 4 + p.height / 10);
    shadow.setAttribute("opacity", .4 - p.height / 100);
    const samples = [90, 60, 30, 0].map((lag) => position(Math.max(0, time - lag)));
    trail.setAttribute("d", samples.map((s, i) => `${i ? "L" : "M"}${s.x} ${s.y - s.height}`).join(" "));
    const receiver = (p.shot + 1) % 2;
    const ease = 1 - Math.pow(1 - Math.min(p.t / .8, 1), 3);
    rackets.forEach((racket, side) => {
      const target = points[p.shot + (side === receiver ? 1 : 0)][1];
      const previous = points[Math.max(0, p.shot - 1)][1];
      const y = side === receiver ? previous + (target - previous) * ease : target;
      const swing = side === receiver ? Math.max(0, (p.t - .85) / .15) * 22 : 22 * Math.max(0, 1 - p.t * 6);
      racket.setAttribute("transform", `translate(${side ? 572 : 48} ${y}) rotate(${side ? -swing : swing})`);
    });
    const bounceAge = p.t - .68;
    const contactAge = p.t;
    const bounced = bounceAge >= 0 && bounceAge < .18;
    const contact = contactAge < .12 && time > 0;
    const age = bounced ? bounceAge / .18 : contactAge / .12;
    const hit = bounced ? position(p.shot * shotDuration + .68 * shotDuration) : {x: points[p.shot][0], y: points[p.shot][1]};
    impact.setAttribute("cx", hit.x);
    impact.setAttribute("cy", hit.y);
    impact.setAttribute("r", 3 + age * 12);
    impact.setAttribute("opacity", bounced || contact ? Math.max(0, 1 - age) * .7 : 0);
    if (p.shot !== lastShot && state === "running") {
      status.textContent = `Frappe ${p.shot + 1} sur 6`;
      lastShot = p.shot;
    }
  };
  const tick = (time) => {
    if (state !== "running") return;
    if (lastTime !== null) elapsed = Math.min(totalDuration, elapsed + Math.min(time - lastTime, 64));
    lastTime = time;
    draw(elapsed);
    if (elapsed >= totalDuration) {
      state = "finished";
      rallyButton.setAttribute("aria-pressed", "false");
      rallyLabel.textContent = "Rejouer l’échange";
      status.textContent = "Six frappes. À vous de relancer.";
      trail.setAttribute("d", "");
      return;
    }
    frame = window.requestAnimationFrame(tick);
  };
  const stopRally = () => {
    window.cancelAnimationFrame(frame);
    state = "idle";
    elapsed = 0;
    lastTime = null;
    lastShot = -1;
    draw(0);
    trail.setAttribute("d", "");
    rallyButton.setAttribute("aria-pressed", "false");
    rallyLabel.textContent = "Lancer un échange";
    status.textContent = "Un échange en six frappes.";
  };
  rallyButton.addEventListener("click", () => {
    if (state === "running") {
      window.cancelAnimationFrame(frame);
      state = "paused";
      lastTime = null;
      rallyButton.setAttribute("aria-pressed", "false");
      rallyLabel.textContent = "Reprendre l’échange";
      status.textContent = "Échange en pause.";
      return;
    }
    if (state === "finished") { elapsed = 0; lastShot = -1; }
    state = "running";
    lastTime = null;
    lastShot = -1;
    rallyButton.setAttribute("aria-pressed", "true");
    rallyLabel.textContent = "Mettre en pause";
    frame = window.requestAnimationFrame(tick);
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && state === "running") rallyButton.click();
  });
  modal.addEventListener("close", () => {
    stopRally();
    detailAnimation?.cancel();
  });
  reducedMotion.addEventListener("change", () => {
    stopRally();
    detailAnimation?.cancel();
  });
  stopRally();
})();
