export function $isNumber(value: unknown): value is number {
    return typeof value === 'number'; // tslint:disable-line strict-type-predicates
}
