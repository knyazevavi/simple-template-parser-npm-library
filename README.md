# simple-template-parser

Tiny template string formatter with defaults and pipes.

[![npm version](https://img.shields.io/npm/v/simple-template-parser.svg)](https://www.npmjs.com/package/simple-template-parser)
[![CI](https://github.com/vika-kurgina/simple-template-parser-npm-library/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/knyazevavi/simple-template-parser-npm-library/actions/workflows/ci.yml)
![license](https://img.shields.io/badge/license-MIT-blue.svg)

---

**Features**

- `{key}` substitution
- Defaults: `{name:Guest}`
- Pipes/formatters: `{text|uppercase}`, `{n|pad2}`

> Примечание: сейчас используются **плоские ключи** (`{name}`, `{day}`), без вложенных путей вида `user.name`.

---

## Example

`````ts
import formatTemplate from "simple-template-parser";
// либо: import { formatTemplate } from "simple-template-parser";

const out = formatTemplate("{greet}, {name:Guest}! Today is {day|uppercase}.", {
  values: { greet: "Hi", day: "friday" }
});
console.log(out); // → "Hi, Guest! Today is FRIDAY."
```

---

### API

```ts
type Formatters = Record<string, (v: string) => string>;

export interface FormatOptions {
  values: Record<string, unknown>;
  formatters?: Formatters;
}


export function formatTemplate(template: string, options: FormatOptions): string;
export default formatTemplate;

```

---

# 3 «Usage» и/или JSDoc-генерация

## 3.1 Usage-раздел

- **Когда использовать**: email/SMS шаблоны, печать чеков, экспорт отчётов.
- **Синтаксис**: `{key}`, `{name:Guest}`, пайпы `{value|fmt:arg1,arg2}`.
- **Как добавить свой форматтер**: `registerFormatter('upper', fn)`.
- **Ошибки/пропуски ключей**: что делает `{name:Guest}` и какие есть опции.
- **Советы**: хранить список допустимых ключей рядом, использовать предпросмотр.

````md
## Usage

1. Определите данные (например, `user`, `order`), дайте авторам шаблонов список ключей: `user.firstName`, `order.total`.
2. Пишите шаблоны строками: `"{user.firstName:Гость}, ваш заказ на {order.total} ₽"`.
3. Для форматирования подключайте пайпы: `{order.total|number:ru-RU}`.
4. Кастомные форматтеры:
   ```ts
   registerFormatter("number", (v, locale = "ru-RU") =>
     Number(v).toLocaleString(locale)
   );
   ```

**Базовое использование**
```ts
formatTemplate("{greet}, {name:Guest}!", {
  values: { greet: "Hi" }
});
// → "Hi, Guest!"
```

**Кастомные форматтеры (через options.formatters)**
```tsconst out = formatTemplate("Price: {price|money}", {
  values: { price: 19990 },
  formatters: {
    money: (v) => Number(v).toLocaleString("ru-RU") + " ₽"
  }
});
// → "Price: 19 990 ₽"
```

**Комбинирование пайпов**
```tsformatTemplate("ID: {id|trim|pad2}", {
  values: { id: " 7" } // пробел + 7
});
// → "ID: 07"
```

---

## Development

```1. Setup
git clone <URL_ТВОЕГО_РЕПО>
cd simple-template-parser
npm install


2. Tooling
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

8.Docs

npm i -D typedoc
npm run docs

`````

## Scripts

npm run build
node examples/demo.js - npm run start

## Extra(optionaly)

````ts
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
