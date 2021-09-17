export interface ISlashCommand extends Function {
    execute(): Promise<void>;
}