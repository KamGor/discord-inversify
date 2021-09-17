import { MentionType } from "../interfaces/MentionType";
import { IHandlerDecoratorOptions } from "./IHandlerDecoratorOptions";

export interface IMessageHandlerDecoratorOptions extends IHandlerDecoratorOptions
{
    // Regexp for template or string for 
    contains?: RegExp | string,
    arguments?: MentionType[],
    permission?: ('owner'|'admin'|'moderator'|string)[],
    // Array of {MEMBER/CHANNEL/ROLE} IDs which have to be present in message
    mentions?: string[],
}