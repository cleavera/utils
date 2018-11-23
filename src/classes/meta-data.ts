import { v4 as uuid } from 'uuid';

import { $isNull } from '../helpers/is-null.helper';
import { $isUndefined } from '../helpers/is-undefined.helper';
import { Maybe } from '../interfaces/maybe.interface';

export class MetaData {
    private readonly _objects: { [key: string]: unknown };
    private readonly _metaData: { [key: string]: { [metaDataKey: string]: unknown } };

    constructor() {
        this._objects = {};
        this._metaData = {};
    }

    public set(object: unknown, metaKey: string, value: unknown): void {
        const objectId: string = this._getObjectId(object);

        if ($isNull(this._metaData[objectId]) || $isUndefined(this._metaData[objectId])) {
            this._metaData[objectId] = {};
        }

        this._metaData[objectId][metaKey] = value;
    }

    public get<T = unknown>(object: unknown, metaKey: string): Maybe<T> {
        const objectId: string = this._getObjectId(object);

        if ($isNull(this._metaData[objectId]) || $isUndefined(this._metaData[objectId])) {
            this._metaData[objectId] = {};
        }

        return (this._metaData[objectId][metaKey] as T) || null;
    }

    private _getObjectId(object: unknown): string {
        for (const objectId in this._objects) {
            if (this._objects[objectId] === object) {
                return objectId;
            }
        }

        const newObjectId: string = uuid();

        this._objects[newObjectId] = object;

        return newObjectId;
    }
}
