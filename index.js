// Reverses a string — same problem as the Python test repo, so the two
// runtimes can be compared like for like.
function reverse(s) {
  return s.split("").reverse().join("");
}

const tests = [
  { input: "hello", expected: "olleh" },
  { input: "bountied", expected: "deituonb".split("").reverse().join("") },
  { input: "  spaces  ", expected: "  secaps  " },
  { input: "", expected: "" },
];

console.log("=== Bountied solver output ===");
let passed = 0;
tests.forEach((t, i) => {
  const got = reverse(t.input);
  const ok = got === t.expected;
  if (ok) passed++;
  console.log(
    `test ${i + 1}: input=${JSON.stringify(t.input)} expected=${JSON.stringify(t.expected)} got=${JSON.stringify(got)} -> ${ok ? "PASS" : "FAIL"}`
  );
});
console.log(`summary: ${passed}/${tests.length} passed`);
console.log(`status: ${passed === tests.length ? "OK" : "FAILED"}`);
process.exit(passed === tests.length ? 0 : 1);
