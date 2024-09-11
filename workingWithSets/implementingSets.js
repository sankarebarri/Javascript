function isSuperSet(set, subset) {
  for (const element of subset) {
    if (!set.has(element)) {
      return false;
    }
  }
  return true;
}

const unionSet = (setA, setB) => {
  const _union = new Set(setA);
  for (const element of setB) {
    _union.add(element);
  }
  return _union;
};

const intersection = (setA, setB) => {
  _intersection = new Set();
  for (const element of setB) {
    if (setA.has(element)) {
      _intersection.add(element);
    }
  }
  return _intersection;
};

function symmetricDifference(setA, setB) {
  const _difference = new Set(setA);
  for (const element of setB) {
    if (_difference.has(element)) {
      _difference.delete(element);
    } else {
      _difference.add(element);
    }
  }
  return _difference;
}

const difference = (setA, setB) => {
  const _difference = new Set(setA);
  for (const element of setB) {
    if (_difference.has(element)) {
      _difference.delete(element);
    }
  }
  return _difference;
};

// Examples
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

console.log(isSuperSet(setA, setB)); // returns true
console.log(unionSet(setA, setC)); // returns Set {1, 2, 3, 4, 5, 6}
console.log(intersection(setA, setC)); // returns Set {3, 4}
console.log(symmetricDifference(setA, setC)); // returns Set {1, 2, 5, 6}
console.log(difference(setA, setC)); // returns Set {1, 2}
