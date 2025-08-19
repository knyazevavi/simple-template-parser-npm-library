import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";

export default [
  // 1. сборка кода (js)
  {
    input: "src/index.ts", // входная точка (твой код)
    output: [
      //В Rollup это настройка куда и в каком формате класть результат.
      { file: "dist/index.mjs", format: "esm", sourcemap: true }, // ESM
      { file: "dist/index.cjs", format: "cjs", sourcemap: true }, // CommonJS
    ],
    plugins: [
      resolve(), // чтобы можно было подключать node_modules
      commonjs(), // преобразует старый require в import/export
      typescript({ tsconfig: "./tsconfig.json" }), // компилит TS → JS
    ],
    external: [], // сюда можно добавить пакеты, которые НЕ надо бандлить
  },
  // 2. сборка деклараций типов (.d.ts)
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
