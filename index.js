let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartCountElement = document.getElementById("heartCount");
const coinCountElement = document.getElementById("coinCount");
const copyCountElement = document.getElementById("copyCount");
const historyListElement = document.getElementById("historyList");
const clearHistoryButtons = document.getElementById("clearHistory");

document.querySelectorAll(".fa-heart").forEach((button) => {
  button.addEventListener("click", function () {
    heartCount++;
    heartCountElement.textContent = heartCount;
  });
});

document.querySelectorAll(".fa-copy").forEach((button) => {
  button.addEventListener("click", function () {
    const card = button.closest(".bg-white");
    const number = card.querySelector("p.text-2xl").textContent.trim();
    navigator.clipboard.writeText(number);
    alert("Copied: " + number);
    copyCount++;
    copyCountElement.textContent = copyCount;
  });
});

document.querySelectorAll(".fa-phone").forEach((button) => {
  button.parentElement.addEventListener("click", function () {
    const card = button.closest(".bg-white");
    const serviceName = card.querySelector("h3").textContent.trim();
    const number = card.querySelector("p.text-2xl").textContent.trim();
    if (coinCount < 20) {
      alert("Not enough coins to make a call.");
      return;
    }
    coinCount -= 20;
    coinCountElement.textContent = coinCount;

    alert(`Calling ${serviceName} at ${number}`);

    const now = new Date();
    const time = now.toLocaleTimeString();

    const li = document.createElement("li");
    li.className = "p-2 rounded bg-gray-50 flex justify-between";
    li.innerHTML = `
      <div>
        <p class="font-bold">${serviceName}</p>
        <p class="text-xs text-gray-600">${number}</p>
      </div>
      <span class="text-xs text-gray-500">${time}</span>
    `;
    historyListElement.appendChild(li);
  });
});
clearHistoryButtons.addEventListener("click", function () {
  historyListElement.innerHTML = "";
});
