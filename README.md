# simple-template-parser

Tiny template string formatter with defaults and pipes.

---

**Features**

- `{key}` substitution
- Defaults: `{name:Guest}`
- Pipes/formatters: `{text|uppercase}`, `{n|pad2}`

---

**Example**

````ts
formatTemplate("{greet}, {name:Guest}! Today is {day|uppercase}.", {
  greet: "Hi",
  day: "Friday"
})
// → "Hi, Guest! Today is FRIDAY."

---

## Development

```1. Clone & install
git clone <URL_ТВОЕГО_РЕПО>
cd simple-template-parser
npm install


2. Project setup
npm init -y - инициализация проекта
npm i -D typescript rollup @rollup/plugin-typescript @rollup/plugin-node-resolve @rollup/plugin-commonjs rollup-plugin-dts - ставит Rollup, и плагины к нему, и TypeScript
npm i -D vitest @types/node - тесты


3. Project structure
.gitignore
tsconfig.json - настройка TypeScript
rollup.config.mjs - конфиг Rollup, где мы указываем:
- какой файл брать за вход (src/index.ts),
- куда собирать (dist/index.mjs, dist/index.cjs),
- какие плагины использовать (TypeScript, resolve, commonjs),
- отдельный шаг для генерации .d.ts
- создать src/index.ts - core-логика

4. Check build
npx tsc --noEmit    # только проверка типов
или npm run build   # если уже настроен rollup

Доп. поля (по желанию, но полезно)

Добавить когда будет репозиторий/публикация:

{
  "repository": { "type": "git", "url": "git+https://github.com/<you>/<repo>.git" },
  "bugs": { "url": "https://github.com/<you>/<repo>/issues" },
  "homepage": "https://github.com/<you>/<repo>#readme",
  "engines": { "node": ">=18" }
}


Если заскоупишь пакет (например, "@vika/simple-template-parser"), добавь:

"publishConfig": { "access": "public" }
````

## Scripts

npm run build
node examples/demo.js - npm run start

## Extra(optionaly)

````json
{
  "repository": { "type": "git", "url": "git+https://github.com/<you>/<repo>.git" },
  "bugs": { "url": "https://github.com/<you>/<repo>/issues" },
  "homepage": "https://github.com/<you>/<repo>#readme",
  "engines": { "node": ">=18" }
}

```Если заскоупить пакет (например, "@vika/simple-template-parser"), то нужно добавить:
"publishConfig": { "access": "public" }


\`- Внутри тройных бэктиков (\`\`\`) пробелы/скобки уже не ломают Markdown.
\`- Если указать язык (например, `json`), GitHub подсветит синтаксис как в JSON.
\`- Ошибки проверки (например, LTeX) тоже уйдут, потому что это будет отдельный блок кода, а не «текст с кавычками».
````
