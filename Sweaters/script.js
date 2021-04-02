//palette containers
const candyContainer = document.querySelector(".candy-container");
const forestContainer = document.querySelector(".forest-container");
const berriesContainer = document.querySelector(".berries-container");
const oceanContainer = document.querySelector(".ocean-container");
const honeyContainer = document.querySelector(".honey-container");
const spaceContainer = document.querySelector(".space-container");
const containerList = [
  candyContainer,
  forestContainer,
  berriesContainer,
  oceanContainer,
  honeyContainer,
  spaceContainer,
];
//sweater images
const candySweater = document.querySelector("#candy");
const forestSweater = document.querySelector("#forest");
const berriesSweater = document.querySelector("#berries");
const oceanSweater = document.querySelector("#ocean");
const honeySweater = document.querySelector("#honey");
const spaceSweater = document.querySelector("#space");
const imageList = [
  candySweater,
  forestSweater,
  berriesSweater,
  oceanSweater,
  honeySweater,
  spaceSweater,
];

//hat container
const hatContainer = document.querySelector(".random-hat");
hatContainer.style.visibility = "hidden";

//hat images
random_img_array = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.jpg",
  "img13.jpg",
];

//btns
const buttonContainer = document.querySelector(".btns");
const returnButton = document.querySelector("#btn-return");
const nextButton = document.querySelector("#btn-next");
const selectButton = document.querySelector("#btn-select");
const doneButton = document.querySelector("#btn-done");
doneButton.style.visibility = "hidden";

//txt
let text = document.querySelector(".select-text");
text.innerText = "Choose palette";
let text2 = document.querySelector(".select-text2");
text2.innerText = "";

//Uzklikšķina uz krāsu paletes, nomainās css klases, parādās return/next btns
function showSweater(event) {
  const target = event.target;
  const parent = target.parentElement;
  const mainParent = parent.parentElement;

  if (
    parent == candyContainer ||
    target == candyContainer ||
    mainParent == candyContainer
  ) {
    candySweater.classList.add("sweater-visible");
    candyContainer.classList.add("palette-clicked");
//vai šo visu var izdarīt kā īsāk un gudrāk? :D pārrakstīju daudzreiz to pašu, bet ja tas jādara ar 100 džemperiem.. :D 
    forestContainer.classList.add("hidden");
    berriesContainer.classList.add("hidden");
    oceanContainer.classList.add("hidden");
    honeyContainer.classList.add("hidden");
    spaceContainer.classList.add("hidden");
    text.innerText = "";
  }
  if (
    parent == forestContainer ||
    target == forestContainer ||
    mainParent == forestContainer
  ) {
    forestSweater.classList.add("sweater-visible");
    forestContainer.classList.add("palette-clicked");

    candyContainer.classList.add("hidden");
    berriesContainer.classList.add("hidden");
    oceanContainer.classList.add("hidden");
    honeyContainer.classList.add("hidden");
    spaceContainer.classList.add("hidden");
    text.innerText = "";
  }
  if (
    parent == berriesContainer ||
    target == berriesContainer ||
    mainParent == berriesContainer
  ) {
    berriesSweater.classList.add("sweater-visible");
    berriesContainer.classList.add("palette-clicked");

    candyContainer.classList.add("hidden");
    forestContainer.classList.add("hidden");
    oceanContainer.classList.add("hidden");
    honeyContainer.classList.add("hidden");
    spaceContainer.classList.add("hidden");
    text.innerText = "";
  }
  if (
    parent == oceanContainer ||
    target == oceanContainer ||
    mainParent == oceanContainer
  ) {
    oceanSweater.classList.add("sweater-visible");
    oceanContainer.classList.add("palette-clicked");

    candyContainer.classList.add("hidden");
    forestContainer.classList.add("hidden");
    berriesContainer.classList.add("hidden");
    honeyContainer.classList.add("hidden");
    spaceContainer.classList.add("hidden");
    text.innerText = "";
  }
  if (
    parent == honeyContainer ||
    target == honeyContainer ||
    mainParent == honeyContainer
  ) {
    honeySweater.classList.add("sweater-visible");
    honeyContainer.classList.add("palette-clicked");

    candyContainer.classList.add("hidden");
    forestContainer.classList.add("hidden");
    berriesContainer.classList.add("hidden");
    oceanContainer.classList.add("hidden");
    spaceContainer.classList.add("hidden");
    text.innerText = "";
  }
  if (
    parent == spaceContainer ||
    target == spaceContainer ||
    mainParent == spaceContainer
  ) {
    spaceSweater.classList.add("sweater-visible");
    spaceContainer.classList.add("palette-clicked");

    candyContainer.classList.add("hidden");
    forestContainer.classList.add("hidden");
    berriesContainer.classList.add("hidden");
    oceanContainer.classList.add("hidden");
    honeyContainer.classList.add("hidden");
    text.innerText = "";
  }
  //return/next btns
  buttonContainer.classList.add("btns-after");
}

//Atgriezties uz sākumu
function clearChoice() {
  window.history.go(0);
}

//Parādās cepuru izvēle, pazūd return/next btns, parādās show more/done btns
function showNext() {
  text2.innerText = "Choose hat";
  hatContainer.style.visibility = "visible";
  returnButton.style.visibility = "hidden";
  nextButton.style.visibility = "hidden";
  doneButton.style.visibility = "visible";
  doneButton.innerText = "Done";
  getRandomHat();
}

//Izveido random secību no img array, attēlo
function getRandomHat() {
  //random index
  index = Math.floor(Math.random() * random_img_array.length);
  //random image from index
  selectedImage = random_img_array[index];

  //where to display
  document.querySelector(".hat-img").src = `./hat_img/${selectedImage}`;
}

//Šeit vēlējos animēt, lai kopā saliktos izvēlētais džemperis+cepure, bet nezinu, kā noformulēt, lai jaunu klasi pieliek tikai ~"if this visible...". Redzamajam džempim piem pielikt klasi .sweater-done
function showResult() {
  text2.innerText = "";
  selectButton.style.visibility = "hidden";
  doneButton.innerText = "Restart";

  containerList.forEach((container) => {
    if ((container.style.visibility = "visible")) {
      container.style.visibility = "hidden";
    }
  });

  //restart btn lai visu sāktu no jauna
  if (doneButton.innerText == "Restart") {
    doneButton.addEventListener("click", clearChoice);
  }
}

containerList.forEach((container) =>
  container.addEventListener("click", showSweater)
);

returnButton.addEventListener("click", clearChoice);
nextButton.addEventListener("click", showNext);
selectButton.addEventListener("click", getRandomHat);
doneButton.addEventListener("click", showResult);
