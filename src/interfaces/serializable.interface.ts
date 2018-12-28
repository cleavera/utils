import { IDict } from './dict.interface';
import { IJsonValue } from './json-value.interface';

export interface ISerializable<T = IJsonValue | IDict<IJsonValue>> {
    serialize(): T;
}
