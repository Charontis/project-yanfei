/* const discord = require("discord.js");

const manager = new discord.ShardingManager("./main.js", {
    // respawn: true,
    token: process.env.token
})

manager.on("shardCreate", shard => console.log("[1/4] Shard " + shard.id + " has been successfully launched."));
manager.spawn() */

const fs = require("fs");
const moment = require("moment");
const express = require("express");
const discord = require("discord.js");

const app = express();

app.get("/", (req, res) => {
    fs.appendFileSync("./storing/redirecting.html", "\n[" + moment(moment().format("h:mm:ss"), "h:mm:ss").format("MMMM DD - hh:mm:ss") + "] I have successfully redirected the webserver.")
    res.redirect("https://www.youtube.com/embed/CxTybZ5zJsM?autoplay=1")
})

app.listen(8080, () => console.log("[2/4] Webserver has been successfully started."));

const client = new discord.Client({ disableMentions: "everyone" });
client.commands = new discord.Collection();
const cooldowns = new discord.Collection();
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
	const command = require("./commands/" + file);
	client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log("[3/4] Successfully logged in as " + client.user.tag);
    client.user.setActivity("ws!help", { type: "WATCHING"});
});

client.on("message", async (message) => {
    if (message.author.bot || message.channel.type === "dm") return;
    const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(ws!)})\\s*`);

    if (!prefixRegex.test(message.content)) return;
    const [, mentionPrefix] = message.content.match(prefixRegex);

    const args = message.content.slice(mentionPrefix.length).trim().split(/ +/g);
    const cmds = args.shift().toLowerCase();
    const commands = client.commands.get(cmds)
        || client.commands.find(execute => execute.aliases && execute.aliases.includes(cmds));
    if (!commands) return;

	try { 
		await commands.execute(client, message, args);
	} catch (error) {
		await console.log(error)
        await fs.appendFileSync("./storing/error.html", "\n[" + moment(moment().format("h:mm:ss"), "h:mm:ss").format("MMMM DD - hh:mm:ss") + "] " + `${error}`);
	}

})

client.on("guildCreate", async (guild) => {
    await fs.appendFileSync("./storing/miscellaneous.html", "\n[" + moment(moment().format("h:mm:ss"), "h:mm:ss").format("MMMM DD - hh:mm:ss") + "] " + `Guild \"${guild.name}\" (#${guild.id}) has been successfully added in the database.`);
})

client.on("guildDelete", async (guild) => {
    await fs.appendFileSync("./storing/miscellaneous.html", "\n[" + moment(moment().format("h:mm:ss"), "h:mm:ss").format("MMMM DD - hh:mm:ss") + "] " + `Guild \"${guild.name}\" (#${guild.id}) and been successfully removed from the database.`);
})

client.login(process.env.token)