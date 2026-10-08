// =============================================
// 5. FINAL — TASK: Class report
// =============================================
// Write these functions (each one small!):
//   getAverage(students)     -> average score
//   getTopStudent(students)  -> NAME of the student with the highest score
//   getPassedNames(students) -> names of students with score 60 or more
//   reportLine(student)      -> text like "Ahmed: 87"
//   report(students)         -> array of report lines for all students
//
// The checks at the bottom print ✅ when your function is correct.

const students = [
  { name: "Ahmed", score: 87 },
  { name: "Fatma", score: 95 },
  { name: "Khalid", score: 58 },
  { name: "Maryam", score: 72 },
  { name: "Said", score: 64 },
  { name: "Aisha", score: 68 },
];

function getAverage(students) {
  // your code here
}

function getTopStudent(students) {
  // your code here
}

function getPassedNames(students) {
  // your code here
}

function reportLine(student) {
  // your code here
}

function report(students) {
  // your code here
}

// ----- Checks (do not edit) -----
check("getAverage(students)", () => getAverage(students), 74);
check("getTopStudent(students)", () => getTopStudent(students), "Fatma");
check("getPassedNames(students)", () => getPassedNames(students), ["Ahmed", "Fatma", "Maryam", "Said", "Aisha"]);
check("reportLine(students[0])", () => reportLine(students[0]), "Ahmed: 87");
check("report(students)", () => report(students), ["Ahmed: 87", "Fatma: 95", "Khalid: 58", "Maryam: 72", "Said: 64", "Aisha: 68"]);
