/*
Original problem:
You are at start location [0, 0] in mountain area of NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return minimal number of climb rounds to target location [N-1, N-1]. Number of climb rounds between adjacent locations is defined as difference of location altitudes.

Location altitude is defined as an integer number (0-9).
 */

// TODO FIX THIS

const searchLimit = 100000;

function pathFinder(area) {
  const map = parseMap(area);

  const goalY = area.length - 1;
  const goal = [area[goalY].length - 1, goalY];

  let score = 0;
  let i = 0;
  const previous = [0, 0];
  const current = [0, 0];

  while (i++ < searchLimit) {
    const next = bestMove(
      current[0],
      current[1],
      previous[0],
      previous[1],
      map
    );

    console.log(`Next move was ${next[0]}, ${next[1]} with score ${next[2]}`);

    previous[0] = current[0];
    previous[1] = current[1];

    current[0] = next[0];
    current[1] = next[1];
    score += next[2];

    if (current[0] === goal[0] && current[1] === goal[1]) {
      return score;
    }
  }
}

function bestMove(x, y, prevX, prevY, map) {
  const positions = [];

  if (y > 0) {
    positions.push([x, y - 1]);
  }

  if (y < map.length - 1) {
    positions.push([x, y + 1]);
  }

  if (x > 0) {
    positions.push([x - 1, y]);
  }

  if (x < map[y].length - 1) {
    positions.push([x + 1, y]);
  }

  return positions.reduce((prev, next, i) => {
    next.push(getScore(x, y, next[0], next[1], map));

    //console.log(`Score for ${x}, ${y} to ${next[0]}, ${next[1]} is ${next[2]}`);

    if (i === 0) {
      return next;
    }

    if (next[0] === prevX && next[1] === prevY) {
      return prev;
    }

    return prev[2] < next[2] ? prev : next;
  });
}

function getScore(currentX, currentY, nextX, nextY, map) {
  return map[currentY][currentX] - map[nextY][nextX];
}

function parseMap(area) {
  return area
    .split('\n')
    .map(row => row.split('').map(altitude => parseInt(altitude)));
}

// Tests (Gotta <3 Prettier formatting)
const test = require('./common/test');

test(pathFinder('000\n000\n000'), 0);
