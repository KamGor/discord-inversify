export interface ISlashCommandRegisterPayload {
    name: string;
    description: string;
    options?: ISlashCommandRegisterPayload[];
    default_permission?: boolean;
}