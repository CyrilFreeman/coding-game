while (true) {
  var inputs = readline().split(" ");
  const x = parseInt(inputs[0]);
  const y = parseInt(inputs[1]);
  const nextCheckpointX = parseInt(inputs[2]); // x position of the next check point
  const nextCheckpointY = parseInt(inputs[3]); // y position of the next check point
  const nextCheckpointDist = parseInt(inputs[4]); // distance to the next checkpoint
  const nextCheckpointAngle = parseInt(inputs[5]); // angle between your pod orientation and the direction of the next checkpoint
  var inputs = readline().split(" ");
  const opponentX = parseInt(inputs[0]);
  const opponentY = parseInt(inputs[1]);

  let thrust;

  if (nextCheckpointDist > 1000) {
    thrust = "BOOST";
  } else if (nextCheckpointDist > 500) {
    thrust = "100";
  } else if (nextCheckpointDist > 100) {
    thrust = "90";
  } else if (nextCheckpointAngle > 90 || nextCheckpointAngle < -90) {
    thrust = "10";
  } else {
    thrust = "50";
  }

  console.log(`${nextCheckpointX} ${nextCheckpointY} ${thrust}`);
}
