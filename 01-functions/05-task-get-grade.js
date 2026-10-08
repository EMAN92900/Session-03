// =============================================
// 1. FUNCTIONS — TASK: Grade from score
// =============================================
// Write getGrade(score) that returns the grade letter:
//   90-100 -> "A", 80-89 -> "B", 70-79 -> "C", 60-69 -> "D", below 60 -> "F"
//
// The checks at the bottom print ✅ when your function is correct.

function getGrade(score) {
  // your code here
}

// ----- Checks (do not edit) -----
check("getGrade(95)", () => getGrade(95), "A");
check("getGrade(90)", () => getGrade(90), "A");
check("getGrade(85)", () => getGrade(85), "B");
check("getGrade(72)", () => getGrade(72), "C");
check("getGrade(60)", () => getGrade(60), "D");
check("getGrade(41)", () => getGrade(41), "F");
