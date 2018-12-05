export function $camelCaseString(input: string): string {
    return input
        .replace(/^[A-Z]/, (char: string) => {
            return char.toLowerCase();
        })
        .replace(/([A-z]) ([A-z])/g, (_match: string, m1: string, m2: string) => {
            return `${m1}${m2.toUpperCase()}`;
        });
}
