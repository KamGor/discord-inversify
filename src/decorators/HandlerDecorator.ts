import { decorate, injectable } from "inversify";
import { METADATA_KEY } from "../MetadataKeys";
import { IHandler } from "../interfaces/IHandler";
import { IHandlerDecoratorOptions } from "./IHandlerDecoratorOptions";
import { IMessageHandlerDecoratorOptions } from "./IMessageHandlerDecoratorOptions";

export function handler(options: IHandlerDecoratorOptions | IMessageHandlerDecoratorOptions) {
    return (target: IHandler): void => {
        decorate(injectable(), target);
        Reflect.defineMetadata(METADATA_KEY.handler, options, target.prototype);
    }
} 