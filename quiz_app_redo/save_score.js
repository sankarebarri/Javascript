let recentScore = localStorage.getItem("recentScore");
const button = document.getElementById("button");
let name = document.getElementById("input");
let scores_list = JSON.parse(localStorage.getItem("scores_list")) || [];
const userScore = document.getElementById("user-score");

userScore.textContent = "You scored: " + recentScore;
let score = {};

name.addEventListener("keyup", () => {
  button.disabled = !name.value;
})


button.addEventListener("click", function() {
  score = {
    name : name.value,
    score: recentScore
  };
  scores_list.push(score);
  scores_list.sort((a ,b) => b.score - a.score);
  scores_list.splice(5);
  localStorage.setItem("scores_list", JSON.stringify(scores_list));
  window.location.assign("top_scores.html")
  });
