const robot = require("robotjs");
const mouse = robot.getMousePos();

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
async function main() {
  for (let i = 0; i < 100; i++) {
    const hex = robot.getPixelColor(mouse.x, mouse.y);
    console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);
    sleep(100);
  }
}
main();
