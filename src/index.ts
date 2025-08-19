/**
 * Tokens:
 *  - {key}
 *  - {key:default}
 *  - {key|uppercase}
 *  - {key:Guest|trim|uppercase}
 */

type Formatters = Record<string, (v: string) => string>;

const defaultFormatters: Formatters = {
    uppercase: (v) => v.toUpperCase(),
    lowercase: (v) => v.toLowerCase(),
    trim: (v) => v.trim(),
    pad2: (v) => (v.length >= 2 ? v : v.padStart(2, "0")),
};

export interface FormatOptions {
    values: Record<string, unknown>;
    formatters?: Formatters;
}

export function formatTemplate(template: string, options: FormatOptions): string {
    const allFormatters = { ...defaultFormatters, ...(options.formatters ?? {}) };

    return template.replace(/\{([^{}]+)\}/g, (_match, inner: string) => {
        const parts = inner.split("|").map((s) => s.trim());
        const head = parts[0];
        const pipes = parts.slice(1);

        const headParts = head.split(":").map((s) => s.trim());
        const key = headParts[0] ?? "";
        const fallback = headParts[1];

        const value = options.values[key];
        let result = value === undefined || value === null ? (fallback ?? "") : String(value);

        for (const pipeName of pipes) {
            const fn = allFormatters[pipeName];
            if (typeof fn === "function") {
                result = fn(result);
            }
        }

        return result;
    });
}


export default formatTemplate;
