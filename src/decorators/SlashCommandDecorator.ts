import { decorate, injectable } from "inversify"
import { ISlashCommand } from "../interfaces/ISlashCommand";
import { METADATA_KEY } from "../MetadataKeys";
import { ISlashCommandDecoratorOptions } from "./ISlashCommandDecoratorOptions";

export function slashCommand(options: ISlashCommandDecoratorOptions) {
    return (target: ISlashCommand): void => {
        decorate(injectable(), target);
        Reflect.defineMetadata(METADATA_KEY.slashCommand, options, target.prototype);
    }
}