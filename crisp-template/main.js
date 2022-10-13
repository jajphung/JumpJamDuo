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

let player;
let stars;

function update() {
  if (!ticks) {
    player = {y: 30, vy: 0};
    stars = times(7, () => {
      const posY = rnd(2, 97);
      return {
        pos: vec(90, posY),
        speed: rnd(0.5, 1)
      };
    });
  }

  stars.forEach((s) => {
    s.pos.x -= s.speed;
    if (s.pos.x < 0) s.pos.x = 100;
    color("yellow");
    box(s.pos, 1);
  });

  if (input.isJustPressed) {
    play("coin");
    addScore(1);
    player.vy = -2.5;
  }

  player.vy += (input.isPressed ? 0.05 : 0.12);
  player.y += player.vy;
  color("red");
  char("a", 15, player.y);

  if ((player.y < 0) || (player.y > 99)) {
    play("hit");
    end();
  }
  if (char("a", 15, player.y).isColliding.rect.yellow) {
    play("hit");
    end();
  }
}

addEventListener("load", onLoad);

//crisp-game-lib template from Thomas Noell, shared in the Discord server
//https://github.com/OfficialThomas/crisp-template

//code based off ABA Games In Tow
//https://github.com/abagames/crisp-game-lib-games/blob/main/docs/intow/main.js

//code based off Juno Nguyen's Charge Rush RE tutorial
//https://github.com/JunoNgx/crisp-game-lib-tutorial