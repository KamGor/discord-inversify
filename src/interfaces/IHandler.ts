export interface IHandler extends Function
{
    execute(...args): Promise<void> | void;
}