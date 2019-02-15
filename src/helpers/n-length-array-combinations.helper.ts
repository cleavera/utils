export function* $nLengthArrayCombinations<T = unknown>(valueGeneratorFunction: () => IterableIterator<T>, depth: number, accumulatedValue: Array<T> = []): IterableIterator<Array<T>> {
    for (const value of valueGeneratorFunction()) {
        const newValue: Array<T> = accumulatedValue.concat([value]);

        if (depth === 1) {
            yield newValue;
        } else {
            for (const nested of $nLengthArrayCombinations(valueGeneratorFunction, depth - 1, newValue)) {
                yield nested;
            }
        }
    }
}
