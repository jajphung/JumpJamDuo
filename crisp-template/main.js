title = "JUMP";

description = `
[Tap] Jump
`;

characters = [
  `
lll
lll
  `
];

options = {
  theme: "dark",
};

let coins;
let player;

function update() {
  if (!ticks) {
    player = {y: 30, vy: 0};
  }

  if (input.isJustPressed) {
    play("coin");
    addScore(1);
    player.vy = -2.5;
  }

  player.vy += (input.isPressed ? 0.05 : 0.12);
  player.y += player.vy;

  char("a", 15, player.y);

  if ((player.y < 0) || (player.y > 99)) {
    play("hit");
    end();
  }
}

addEventListener("load", onLoad);

//https://abagames.github.io/crisp-game-lib/ref_document/modules.html
//https://github.com/abagames/crisp-game-lib-games/blob/main/docs/intow/main.js
//https://github.com/OfficialThomas/crisp-template