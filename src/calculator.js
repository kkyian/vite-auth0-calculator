export function setupCalculator(display, historyList) {
  const buttons = document.querySelectorAll(".buttons button");
  const clearBtn = document.getElementById("clear");
  let expression = "";

  function updateDisplay() {
    display.value = expression;
  }

  function addToHistory(item) {
    const history = JSON.parse(localStorage.getItem("calc-history") || "[]");
    history.unshift(item);
    localStorage.setItem("calc-history", JSON.stringify(history));
    renderHistory();
  }

  function renderHistory() {
    historyList.innerHTML = "";
    const history = JSON.parse(localStorage.getItem("calc-history") || "[]");
    history.slice(0, 10).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      historyList.appendChild(li);
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.textContent === "=") {
        try {
          const result = eval(expression);
          addToHistory(`${expression} = ${result}`);
          expression = result.toString();
        } catch {
          expression = "Error";
        }
      } else {
        if (expression === "Error") {
          expression = "";
        }
        expression += btn.textContent;
      }
      updateDisplay();
    });
  });

  clearBtn.addEventListener("click", () => {
    expression = "";
    updateDisplay();
  });

  renderHistory();
}
