import { Maybe } from '../interfaces/maybe.interface';
import { $isNull } from './is-null.helper';

export async function $stringReplace(str: string, regex: RegExp, replacer: (match: string, ...captureGroups: Array<string>) => string | Promise<string>): Promise<string> {
    let resultsPromise: Promise<Array<string>> = Promise.resolve([]);
    let match: Maybe<RegExpExecArray> = regex.exec(str);

    if ($isNull(match)) {
        return str;
    }

    const captureGroups: Array<string> = [];

    while (!$isNull(match)) {
        const thisMatch: RegExpExecArray = match;

        for (let x: number = 1; x < match.length; x++) {
            captureGroups.push(match[x]);
        }

        resultsPromise = resultsPromise.then((builder: Array<string>): Promise<Array<string>> => {
            return Promise.resolve(replacer.apply(null, thisMatch)).then((result: string) => {
                builder.push(result);

                return builder;
            });
        });

        match = regex.exec(str);
    }

    const parts: Array<string> = str.split(regex);
    const results: Array<string> = await resultsPromise;
    let i: number = 0;

    return parts.reduce((builder: string, part: string) => {
        if (captureGroups.indexOf(part) > -1) {
            return builder;
        }

        builder += results[i++] + part;

        return builder;
    });
}
