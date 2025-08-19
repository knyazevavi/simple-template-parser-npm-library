# simple-template-parser

Tiny template string formatter with defaults and pipes.

**Features**
- `{key}` substitution
- Defaults: `{name:Guest}`
- Pipes/formatters: `{text|uppercase}`, `{n|pad2}`

**Example**
```ts
formatTemplate("{greet}, {name:Guest}! Today is {day|uppercase}.", {
  greet: "Hi",
  day: "Friday"
})
// → "Hi, Guest! Today is FRIDAY."

