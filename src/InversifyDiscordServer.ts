import 'reflect-metadata';
import { inject, injectable, multiInject } from 'inversify';
import { Client } from 'discord.js';
import { IInversifyDiscordServer } from "./IInversifyDiscordServer";
import { IRegisteredCommand } from './interfaces/IRegistredCommand';
import { DISCORD_TYPES } from './DISCORD_TYPES';
import { ISlashCommand } from './interfaces/ISlashCommand';
import { IHandler } from './interfaces/IHandler';
import { METADATA_KEY } from './MetadataKeys';
import { IHandlerDecoratorOptions } from './decorators/IHandlerDecoratorOptions';
import { ISlashCommandDecoratorOptions } from './decorators/ISlashCommandDecoratorOptions';

@injectable()
export class InversifyDiscordServer implements IInversifyDiscordServer {

    public botToken: string;

    constructor(
        @inject(DISCORD_TYPES.DiscordClient)
        private discordClient: Client,
        @multiInject(DISCORD_TYPES.EventHandler)
        private eventHandlers: IHandler[],
        @multiInject(DISCORD_TYPES.SlashCommand)
        private slashCommands: ISlashCommand[],
    ) {}
    
    async start(botToken: string): Promise<this> {
        this.botToken = await this.discordClient.login(botToken);
        return this;
    }

    public getCommands(): IRegisteredCommand[] {
        return [];
    }

    private getApp(guildId?: string) {
        const app = this.discordClient.api.applications(this.discordClient.user.id);
        if(guildId) {
            app.guilds(guildId);
        }
        return app;
    }

    private registerHandler(handler: IHandler): void {
        const handlerMetadata: IHandlerDecoratorOptions = {...Reflect.getMetadata(METADATA_KEY.handler, handler)};
        this.discordClient.on(handlerMetadata.eventName, (...args) => handler.execute.bind(this)(handlerMetadata, ...args));
    } 

    private registerSlashCommand(slashCommand: ISlashCommand): void {
        const slashCommandMetadata: ISlashCommandDecoratorOptions = {...Reflect.getMetadata(METADATA_KEY.slashCommand, slashCommand)};

        Reflect.getMetadata(METADATA_KEY.slashCommand, slashCommandMetadata.subcommandOf)
    }
    
}