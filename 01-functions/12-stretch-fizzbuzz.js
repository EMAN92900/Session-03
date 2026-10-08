// =============================================
// 1. FUNCTIONS — STRETCH: FizzBuzz word
// =============================================
// Write fizzBuzz(n) that RETURNS:
//   "FizzBuzz" if n is divisible by 3 and 5
//   "Fizz"     if divisible by 3
//   "Buzz"     if divisible by 5
//   otherwise the number as text, e.g. "7"  (hint: `${n}`)
//
// The checks at the bottom print ✅ when your function is correct.

function fizzBuzz(n) {
  // your code here
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return `${n}`;
  }
}

// ----- Checks (do not edit) -----
check("fizzBuzz(15)", () => fizzBuzz(15), "FizzBuzz");
check("fizzBuzz(9)", () => fizzBuzz(9), "Fizz");
check("fizzBuzz(10)", () => fizzBuzz(10), "Buzz");
check("fizzBuzz(7)", () => fizzBuzz(7), "7");
