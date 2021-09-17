export interface IRegisteredCommand {
    id: string;
    application_id: string;
    name: string;
    description: string;
    version: string;
    guild_id: string | undefined;
}