// import fs from 'fs'
// import util from 'util'
import { connect } from 'mongoose';
import { startBot } from "https://github.com/discordeno/discordeno/mod.ts";

if (!process.env.token) return console.warn('Bot token not found!')
if (!process.env.mongourl) return console.warn('MongoDB URL not found!')

startBot({
  token: process.env.token,
  intents: ["Guilds", "GuildMessages"],
  eventHandlers: {
    ready() {
      connectDatabase()
      console.log('Successfully logged in.');
    },
    messageCreate(message) {
      message.channel.send('Congratulations. You have made your first step on TypeScript!')
    },
  },
});

export const connectDatabase = async () => {
  await connect(process.env.mongourl);
  console.log("Database Connected!")
}
