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

5. Tests
npm run build --silent - Выведет только реальные ошибки/варнинги сборки.
npm test -- --reporter=verbose -
        - npm test → запускает скрипт "test": "vitest run".
        -- разделитель: всё, что идёт после --, передаётся самому Vitest, а не npm.
        -- reporter=verbose → даёт подробный вывод: показывает не только «зелёный/красный», но и весь список тестов, включая PASSED/FAILED, и ошибки со стеком.

6. Formatted
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
create - .eslintrc.json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "env": { "es2021": true, "node": true },
  "ignorePatterns": ["dist/**"]
}

7. CI/CD - настроен файл .github/workflows/ci.yml
Автосборка, тестирование, поиск уязвимостей и автопубликация

snyk test - для более мощного поиска зависимостей

Для выпуска релиза -
# тип: patch / minor / major
npm version patch        # поднимет версию и создаст тег v0.0.2
git push --follow-tags   # пушит коммит и тег → триггерит workflow


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
