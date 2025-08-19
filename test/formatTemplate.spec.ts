import { describe, it, expect } from "vitest";
import { formatTemplate } from "../src/index";

describe("formatTemplate", () => {
    it("подставляет значение по ключу", () => {
        const out = formatTemplate("Hello, {name}!", { values: { name: "Vika" } });
        expect(out).toBe("Hello, Vika!");
    });

    // намеренно падающий тест (АНОМАЛИЯ)
    it("демо-аномалия: ожидаем Guest, но ключа нет", () => {
        const out = formatTemplate("Hello, {name: Guest}!", { values: {} });
        expect(out).toBe("Hello, Guest!");
    });
});
