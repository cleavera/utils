import { LogLevel } from '../constants/log-level.constant';
import { ILogger } from '../interfaces/logger.interface';

export class Logger {
    public static readonly LogLevel: typeof LogLevel = LogLevel;
    public level: LogLevel;
    private _logger: ILogger;

    constructor(logger: ILogger, logLevel: LogLevel = LogLevel.INFO) {
        this._logger = logger;
        this.configure(logLevel);
    }

    public static ConsoleLogger(logLevel: LogLevel = LogLevel.INFO): Logger {
        const logger: ILogger = {
            write(value: string): void {
                console.log(value); // tslint:disable-line no-console
            }
        };

        return new Logger(logger, logLevel);
    }

    public configure(logLevel: LogLevel): void {
        this.level = logLevel;
    }

    public log(level: LogLevel, ...args: Array<unknown>): void {
        if (level > this.level) {
            return;
        }

        args.forEach((arg: any): void => { // tslint:disable-line no-any
            let content: string;

            if (arg.toString) {
                content = arg.toString();
            } else {
                content = JSON.stringify(arg);
            }

            this._logger.write(`\n[${LogLevel[level]}] ${content}`);
        });
    }

    public error(error: Error): void {
        this.log(LogLevel.ERROR, error);
    }

    public warn(...warnings: Array<unknown>): void {
        this.log(LogLevel.WARN, ...warnings);
    }

    public info(...info: Array<unknown>): void {
        this.log(LogLevel.INFO, ...info);
    }

    public debug(...info: Array<unknown>): void {
        this.log(LogLevel.DEBUG, ...info);
    }

    public silly(...info: Array<unknown>): void {
        this.log(LogLevel.SILLY, ...info);
    }
}
