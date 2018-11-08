export function $isSymbol(value: unknown): value is symbol {
    return typeof value === 'symbol'; // tslint:disable-line strict-type-predicates
}
