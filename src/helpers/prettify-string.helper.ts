export function $prettifyString(str: string): string {
    return str
        .replace('-', ' ')
        .replace(/^[a-z]/, (match: string) => {
            return match.toUpperCase();
        });
}
