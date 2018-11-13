export class UniqueArray<T> extends Array<T> {
    public push(...items: Array<T>): number {
        items.forEach((item: T) => {
            if (this.indexOf(item) === -1) {
                super.push(item);
            }
        });

        return this.length;
    }
}
