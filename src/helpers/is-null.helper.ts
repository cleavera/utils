export function $isNull(value: unknown): value is null {
    return value === null; // tslint:disable-line strict-type-predicates
}
