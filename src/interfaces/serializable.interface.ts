import { IDict } from './dict.interface';
import { IJsonValue } from './json-value.interface';

export interface ISerializable<T = IDict<IJsonValue>> {
    serialize(): T;
}
