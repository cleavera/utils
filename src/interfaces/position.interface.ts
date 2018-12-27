export interface IPosition<Dimensions extends number = 2> extends Array<number> {
    [index: number]: number;
    0: number;
    length: Dimensions;
}
