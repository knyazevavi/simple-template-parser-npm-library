import { formatTemplate } from "../dist/index.mjs";

const outOne = formatTemplate(
  "{greet}, {name:Guest}! Today is {day|uppercase}. Num {n|pad2}.",
  { values: { greet: "Hi", day: "friday", n: 5 } }
);
console.log(outOne, "outOne");
// Hi, Guest! Today is FRIDAY. Num 05.

const outTwo = formatTemplate("Hello, {name|capitalize}", {
  values: { name: "vika" },
  formatters: {
    capitalize: (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase(),
  },
});

console.log(outTwo, "outTwo");
