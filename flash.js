const cards = [
  "Apa itu HTML? → Bahasa markup untuk struktur web",
  "Apa itu CSS? → Bahasa untuk style tampilan",
  "Apa itu JS? → Bahasa pemrograman web interaktif"
];

let index = 0;
const card = document.getElementById("card");

card.addEventListener("click", () => {
  card.textContent = cards[index];
  index = (index + 1) % cards.length;
});
