function playGame() {
  const num = Math.floor(Math.random() * 10) + 1;
  const guess = prompt("Tebak angka 1-10:");

  document.getElementById("output").textContent =
    guess == num ? "Kamu benar!" : `Salah! Angkanya ${num}`;
}
