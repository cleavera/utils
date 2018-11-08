export function $isString(value: unknown): value is string {
    return typeof value === 'string'; // tslint:disable-line strict-type-predicates
}
