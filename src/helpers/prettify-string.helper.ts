export function $prettifyString(str: string): string {
    return str
        .replace(/-/g, ' ')
        .replace(/\./g, ' ')
        .replace(/([a-z])([A-Z])/g, (_match: string, endOfLastWord: string, startOfNextWord: string) => {
            return `${endOfLastWord} ${startOfNextWord.toLowerCase()}`;
        })
        .replace(/^[a-z]/, (match: string) => {
            return match.toUpperCase();
        });
}
