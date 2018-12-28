import { IJsonValue } from './json-value.interface';

export interface ISerializable {
    serialize(): IJsonValue;
}
