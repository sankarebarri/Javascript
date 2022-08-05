let playerScore = document.getElementById("players-score");
let playerListScore = JSON.parse(localStorage.getItem("scores_list"));


playerScore.innerHTML = playerListScore.map(score => {
  return `<li>${score.name} <span>${score.score} </span>points</li>`
})
