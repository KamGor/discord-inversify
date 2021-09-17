import { ApplicationUsableCommandOptionEnum } from "../enums/ApplicationUsableCommandOptionEnum";
import { ISlashCommand } from "../interfaces/ISlashCommand";

export interface ISlashCommandDecoratorOptions {
    guildId?: number | undefined;
    name: string;
    subcommandOf?: ISlashCommand;
    description?: string;
    parameters?: ApplicationUsableCommandOptionEnum;
}