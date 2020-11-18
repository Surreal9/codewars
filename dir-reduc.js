// Solution for https://www.codewars.com/kata/550f22f4d758534c1100025a/javascript

const dirs = {
  NORTH: 1,
  SOUTH: -1,
  EAST: 2,
  WEST: -2,
};

function dirReduc(origArr) {
  let result = doPass(origArr);
  while (result.reduced) {
    result = doPass(result.arr);
  }
  return result.arr;
}

function doPass(arr) {
  let reduced = false;
  for (let i = 0; i < arr.length - 1; i++) {
    // Look for opposing directions
    if (dirs[arr[i]] + dirs[arr[i + 1]] === 0) {
      reduced = true;
      arr.splice(i, 2);
      i = i - 1;
    }
  }
  return { reduced, arr };
}
