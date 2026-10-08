// =============================================
// 2. FUNCTIONS AND LOOPS — TASK: Average
// =============================================
// Write average(numbers) that returns the average (sum / count).
//
// The checks at the bottom print ✅ when your function is correct.

function average(numbers) {
  // your code here
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// ----- Checks (do not edit) -----
check("average([4, 8, 15, 2, 6, 7])", () => average([4, 8, 15, 2, 6, 7]), 7);
check("average([10])", () => average([10]), 10);
check("average([1, 2])", () => average([1, 2]), 1.5);
