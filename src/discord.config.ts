import { Client } from "discord.js";
import { Container } from "inversify";
import { DISCORD_TYPES } from "./DISCORD_TYPES";
import { InversifyDiscordServer } from "./InversifyDiscordServer";

const container: Container = new Container();

container.bind(DISCORD_TYPES.DiscordClient).to(Client);
container.bind(DISCORD_TYPES.DiscordServer).to(InversifyDiscordServer);

export { container };