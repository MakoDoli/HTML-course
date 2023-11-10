const words = Array.from({ length: 100_000 }, () => "WORD");
document.addEventListener("DOMContentLoaded", function () {
  const manyWordsDiv = document.querySelector(".manywords");

  words.forEach((word) => {
    const wordElement = document.createElement("p");
    wordElement.textContent = word;
    manyWordsDiv.appendChild(wordElement);
  });
});
