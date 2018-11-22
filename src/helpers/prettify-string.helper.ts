export function $prettifyString(str: string): string {
    return str
        .replace(/-/g, ' ')
        .replace(/\./g, ' ')
        .replace(/^[a-z]/, (match: string) => {
            return match.toUpperCase();
        });
}
