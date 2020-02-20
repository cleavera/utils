export interface IPromiseResolver<T = never> {
    (value: T): void;
}
