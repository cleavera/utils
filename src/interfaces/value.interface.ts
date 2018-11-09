import { IKey } from './key.interface';

export type IValue<T> = T[IKey<T>];
