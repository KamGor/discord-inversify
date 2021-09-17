import { ClientEvents } from "discord.js";

export interface IHandlerDecoratorOptions
{
    onlyDM?: boolean,
    eventName: keyof ClientEvents,
    description?: string,
    permission?: ('owner'|'admin'|'moderator'|string)[],
}