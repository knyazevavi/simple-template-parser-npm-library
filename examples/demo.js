import { formatTemplate } from "../dist/index.mjs";

const out = formatTemplate(
  "{greet}, {name:Guest}! Today is {day|uppercase}. Num {n|pad2}.",
  { values: { greet: "Hi", day: "friday", n: 5 } }
);
console.log(out);
// Hi, Guest! Today is FRIDAY. Num 05.
