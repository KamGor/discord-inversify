import { ApplicationInnerCommandOptionsEnum } from "./ApplicationInnerCommandOptionsEnum";
import { ApplicationUsableCommandOptionEnum } from "./ApplicationUsableCommandOptionEnum";

export const ApplicationCommandOptionEnum = { ...ApplicationInnerCommandOptionsEnum, ...ApplicationUsableCommandOptionEnum };
export type ApplicationCommandOptionEnum = typeof ApplicationCommandOptionEnum;