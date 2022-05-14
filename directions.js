function getDirections(input) {
  let horizontal = 0;
  let vertical = 0;
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "N":
        vertical += 1;
        break;
      case "E":
        horizontal += 1;
        break;
      case "S":
        vertical -= 1;
        break;
      case "W":
        horizontal -= 1;
        break;
      default:
        // error handling for values other than the ones needed
        throw new Error("Invalid char found");
        break;
    }
  }
  if (horizontal || vertical) { // Displacement made in some direction
    return false;
  } else return true;
}
