export function $snakeCaseString(input: string): string {
    return input.toLowerCase().replace(/ /g, '-');
}
