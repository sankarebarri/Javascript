/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const input = document.getElementById("input");
const button = document.getElementById("button");

let metreFeet = document.getElementById("metre-feet");
let litreGallon = document.getElementById("litre-gallon");
let kgPound = document.getElementById("kg-pound");


button.addEventListener("click", function() {
  let inputValue = input.value;
  const metres = Number(inputValue) * 3.281;
  const feet = (1 / 3.281) * Number(inputValue);

  const litres = Number(inputValue) * 0.264;
  const gallons = (1 / 0.264) * Number(inputValue);

  const kilograms = Number(inputValue) * 2.204;
  const pounds = (1 / 2.204) * Number(inputValue);
  metreFeet.textContent = `
    ${inputValue} metres = ${metres.toFixed(3)} feet | ${inputValue} feet = ${feet.toFixed(3)} meters
`

  litreGallon.textContent = `
    ${inputValue} litres = ${litres.toFixed(3)} gallons | ${inputValue} gallons = ${gallons.toFixed(3)} litres
`

  kgPound.textContent = `
    ${inputValue} kilograms = ${kilograms.toFixed(3)} pounds | ${inputValue} pounds = ${pounds.toFixed(3)} kilograms
`
})
