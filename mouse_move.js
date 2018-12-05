// forever start mouse_move.js
// forever stop mouse_move.js
var robot = require("robotjs");
var util = require('util');

const getCoords = () => Math.floor(Math.random() * 20 - 10);

var id = setInterval(() => {
  var mouse = robot.getMousePos();
  const x = getCoords();
  const y = getCoords();
  robot.moveMouse(
    mouse.x + x,
    mouse.y + y,
  );

  util.puts(`Count is x: ${x}, y: ${y}`);
}, 1000);
