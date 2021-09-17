import { ApplicationUsableCommandOptionEnum } from "../enums/ApplicationUsableCommandOptionEnum";
import { ISlashCommandOptionChoiceRegisterPayload } from "./ISlashCommandOptionChoiceRegisterPayload";

export interface ISlashCommandOptionsRegisterPayload {
    type: ApplicationUsableCommandOptionEnum;
    name: string;
    description?: string | undefined;
    required?: boolean | undefined;
    options?: ISlashCommandOptionsRegisterPayload[] | undefined;
    choices?: ISlashCommandOptionChoiceRegisterPayload[] | undefined;
}