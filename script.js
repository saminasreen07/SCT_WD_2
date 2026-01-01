const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener("click", () => handleInput(button.textContent));
});

// Handle keyboard input
document.addEventListener("keydown", (e) => {
  if (
    (e.key >= "0" && e.key <= "9") ||
    ["+", "-", "*", "/", "."].includes(e.key)
  ) {
    handleInput(e.key);
  }

  if (e.key === "Enter") calculate();
  if (e.key === "Backspace") deleteLast();
  if (e.key === "Escape") clearDisplay();
});

// Input handler
function handleInput(value) {
  if (value === "C") {
    clearDisplay();
  } else if (value === "=") {
    calculate();
  } else {
    currentInput += value;
    updateDisplay();
  }
}

// Calculate result with error handling
function calculate() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch {
    display.value = "Error";
    currentInput = "";
  }
}

// Clear display
function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

// Delete last character
function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

// Update display
function updateDisplay() {
  display.value = currentInput || "0";
}
