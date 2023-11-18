// Beispielkarten erstellen und dem Wrapper hinzufügen
const cardsWrapper = document.getElementById("cardsWrapper");

for (let i = 1; i <= 1000; i++) {
  //erstellt 1000 neue Karten (nicht optimal für die Funktion: scrollen)
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = `Karte ${i}`;
  cardsWrapper.appendChild(card);
}
