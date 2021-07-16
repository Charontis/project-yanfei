import { connect } from 'mongoose';
import { startBot } from "https://github.com/discordeno/discordeno/mod.ts";

if (!process.env.token) return console.warn('Bot token not found!')
if (!process.env.mongourl) return console.warn('MongoDB URL not found!')

async startBot({
  token: process.env.token,
  intents: ["Guilds", "GuildMessages"],
  eventHandlers: {
    await ready() {
      await connect(process.env.mongourl);
      console.log('Connected to MongoDB.')
      console.log('Successfully logged in.');
    },
    messageCreate(message) {
      message.channel.send('Congratulations. You have made your first step on TypeScript!')
    },
  },
});
