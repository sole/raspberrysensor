/**
 * This is a very unambitious test to ensure that the Arduino set up works.
 * Hardware dependencies:
 * - Connect the Arduino board to the USB port in the host computer (either a laptop or the Raspberry Pi).
 *
 * Software dependencies:
 * You need to install the node.js dependencies first, so make sure you ran `npm install` on the root folder of this project beforehand.
 */

const Five = require("johnny-five");
const board = new Five.Board({ repl: false });

board.on("ready", () => {
	const led = new Five.Led(13);
	led.blink(500);
});
