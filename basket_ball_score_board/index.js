// Home Count
let homeCount = 0

function addHomePoint1() {
  homeCount += 1
  document.getElementById("home-score").textContent = homeCount
}

function addHomePoint2() {
  homeCount += 2
  document.getElementById("home-score").textContent = homeCount
}

function addHomePoint3() {
  homeCount += 3
  document.getElementById("home-score").textContent = homeCount
}


// Away Count
let awayCount = 0

function addAwayPoint1() {
  awayCount += 1
  document.getElementById("away-score").textContent = awayCount
}

function addAwayPoint2() {
  awayCount += 2
  document.getElementById("away-score").textContent = awayCount
}

function addAwayPoint3() {
  awayCount += 3
  document.getElementById("away-score").textContent = awayCount
}

// New game
function newGame() {
  document.getElementById("home-score").textContent = 0
  document.getElementById("away-score").textContent = 0
  homeCount = 0
  awayCount = 0
}

// Save Halfs points
function savePoints() {
  let homeScore = document.getElementById("home-score");
  let awayScore = document.getElementById("away-score");
  let firstHalf = document.getElementById("first-half");
  firstHalf.textContent = homeScore
}
