import { IRegisteredCommand } from "./interfaces/IRegistredCommand";

export interface IInversifyDiscordServer {
    botToken: string;
    start(botToken: string): Promise<this>;
    getCommands(): IRegisteredCommand[];
}