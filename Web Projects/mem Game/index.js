const cards = document.querySelectorAll(".card");
console.log(cards);

var firstCard;
var secondCard;
var isFlipped = false;

function onFlip() {
  // console.log("this");
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    checkIt();
  }
};

cards.forEach((card) => card.addEventListener("click", onFlip));

function checkIt() {
  // console.log("checking...");
  let firstCardData = firstCard.dataset.image;
  let secondCardData = secondCard.dataset.image;

  firstCardData === secondCardData ?
    onSuccess()
    :
    onFail();
}

const onSuccess = () => {
  console.log("success");
  firstCard.removeEventListener('click', onFlip);
  secondCard.removeEventListener('click', onFlip);

  reset();
};

const onFail = () => {
  console.log("failed");

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    onReset()
  },1500);
};

var onReset = () => {
  console.log("Reset called");
  isFlipped = false;
  firstCard = null;
  secondCard = null;
};

(function onShuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  })
})();