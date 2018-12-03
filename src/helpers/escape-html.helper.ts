export function $escapeHTML(html: string): string {
    return html.replace(/[&<>"']/g, (char: string): string => {
        return '&#' + char.charCodeAt(0).toString(10) + ';';
    });
}
