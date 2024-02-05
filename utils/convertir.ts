export const fromLovelace = (lovelace: number) => lovelace ?? 0 / 1000000;
export const toLovelace = (ada: number) => ada ?? 0 * 1000000;
export const fromStr = (str: string) => Buffer.from(str, "utf-8");
export const toHex = (bytes: any) => Buffer.from(bytes).toString("hex");
export const subString = (value: any) => value && (value.substring(0, 10) + "..." + value.substring(value.length - 12, value.length));