(() => {
  "use strict";
  const modal = document.querySelector("#beyond-gaming-details");
  if (!modal) return;
  const games = [
    { id: "valorant", name: "Valorant", rank: "Immortal 2", image: "valorant.webp", accent: "#903c5c" },
    { id: "lol", name: "League of Legends", rank: "Diamant 3", image: "lol.png?v=276cd9ba", accent: "#3c5ea5" },
    { id: "tft", name: "Teamfight Tactics", rank: "Émeraude 1", image: "tft.png", accent: "#357558" },
    { id: "cs", name: "Counter-Strike", rank: "Aigle légendaire", image: "csgo.jpg", accent: "#92712c" },
    { id: "fortnite", name: "Fortnite", rank: "Champion", image: "fortnite.webp?v=caa269b0", accent: "#987025" },
  ];
  const buttons = [...modal.querySelectorAll("[data-game]")];
  const figure = modal.querySelector("#gaming-insignia");
  if (!figure || buttons.length !== games.length) return;
  const image = figure.querySelector("[data-rank-image]");
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let selected = 0;
  let animation;

  const select = (index) => {
    const next = (index + games.length) % games.length;
    if (next === selected) return;
    selected = next;
    const game = games[selected];
    animation?.cancel();
    buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.game === game.id)));
    image.src = game.image;
    image.alt = `Insigne ${game.rank} de ${game.name}`;
    figure.querySelector("[data-rank-game]").textContent = game.name;
    figure.querySelector("[data-rank-title]").textContent = game.rank;
    figure.querySelector("[data-rank-number]").textContent = `${String(selected + 1).padStart(2, "0")} / 05`;
    figure.style.setProperty("--rank-accent", game.accent);
    if (!motion.matches && typeof image.animate === "function") {
      animation = image.animate(
        [{ opacity: .2, transform: "translateY(8px) scale(.96)" }, { opacity: 1, transform: "translateY(0) scale(1)" }],
        { duration: 360, easing: "cubic-bezier(.2,.7,.3,1)" },
      );
    }
  };
  buttons.forEach((button, index) => button.addEventListener("click", () => select(index)));
  modal.querySelector("[data-rank-prev]").addEventListener("click", () => select(selected - 1));
  modal.querySelector("[data-rank-next]").addEventListener("click", () => select(selected + 1));
  modal.addEventListener("close", () => animation?.cancel());
  motion.addEventListener("change", () => animation?.cancel());
})();
