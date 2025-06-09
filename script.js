const balanceEl = document.getElementById("balance");
const betEl = document.getElementById("bet");
const resultEl = document.getElementById("result");
const slotEls = [document.getElementById("slot1"), document.getElementById("slot2"), document.getElementById("slot3")];

let balance = 100;
const symbols = ["🍒", "🍋", "🍉", "⭐", "🔔", "💎"];

document.getElementById("spin").addEventListener("click", () => {
  const bet = parseInt(betEl.value);

  if (isNaN(bet) || bet <= 0) {
    resultEl.textContent = "Please enter a valid bet.";
    return;
  }

  if (bet > balance) {
    resultEl.textContent = "Not enough balance!";
    return;
  }

  balance -= bet;

  const rolls = [];
  for (let i = 0; i < 3; i++) {
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    slotEls[i].textContent = symbol;
    rolls.push(symbol);
  }

  if (rolls[0] === rolls[1] && rolls[1] === rolls[2]) {
    const winnings = bet * 5;
    balance += winnings;
    resultEl.textContent = `🎉 Triple ${rolls[0]}! You win $${winnings}!`;
  } else if (rolls[0] === rolls[1] || rolls[1] === rolls[2] || rolls[0] === rolls[2]) {
    const winnings = bet * 2;
    balance += winnings;
    resultEl.textContent = `😊 Double match! You win $${winnings}.`;
  } else {
    resultEl.textContent = "😢 No match. Try again!";
  }

  balanceEl.textContent = balance;
});
