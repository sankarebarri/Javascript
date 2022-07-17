let count = 0

function increase() {
  count = count + 1
  let incCount = document.getElementById("counting")
  incCount.innerText = count
}

function save() {
  let previousCount = document.getElementById("save-previous-count")
  previousCount.textContent += count + " - "
  count = 0
  document.getElementById("counting").textContent = 0
}
