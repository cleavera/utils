export interface ILogger {
    write(value: string): void;
    error(error: Error): void;
}
