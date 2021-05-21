## Wishing Simulator

Wishing Simulator is a Genshin Impact discord bot that focuses on the gacha system.

The default prefix is `ws!`, which can be changed customizable up to 6 letters. The bot can be called by mentioning or using the default prefix on the server.
Some category commands require users to have the `Manage Server` permission to proceed.

This bot requires the following permissions to work functionally.
- Embed Links
- Attach Files
- Add Reactions
- Receive Messages
- Use External Emoji
- Read Message History

Wishes (Banners) are the gacha system in Genshin Impact. There are two main types of wishes: the permanent standard wish -- Wanderlust Invocation and limited Event Wishes for characters and weapons.

The bot shows all the gacha banners in Genshin Impact, including past (does not include CBT banners), current and upcoming banners.
The details of the upcoming banners are still unknown. However, the promotional weapons/characters are confirmed, therefore they will not be on the gacha listing page until the details have been confirmed.

#### Commands List
| Category | Commands | Description |
| -        | -        | -           |
| Characters | ws!character <name> [level]        | Shows the basic information of a character.
| Characters | ws!character constellations <name> | Shows the constellation details of a character.
| Characters | ws!character list [rarity]         | Shows the list of the playable characters.
| Characters | ws!character skills <name>         | Shows the skills and passive talents of a character.
| -        | -        | -           |
| Gacha | ws!gacha <banner>    | Roll on one of the banners.
| Gacha | ws!gacha history     | Shows previous 100 rolls.
| Gacha | ws!gacha list        | Shows the characters, weapons, and their rates on a banner.
| Gacha | ws!gacha rates       | Shows the list of all the available banners.
| -        | -        | -           |
| Miscellaneous | was!credits |  Shows the list of people who have contributed to the bot.
| Miscellaneous | ws!help [command] | Shows all the available commands that you can use.
| Miscellaneous | ws!invite | Shows the link to invite the bot.
| Miscellaneous | ws!status | Shows the information of the bot.
| Miscellaneous | ws!time | Shows current server time for different servers.
| -        | -        | -           |
| Moderation | ws!channel blacklist <channel / category> | Sets the bot to ignore commands called on a category or channel.
| Moderation | ws!channel whitelist <channel / category> | Stops the bot from ignoring commands called on a category or channel.
| Moderation | ws!command blacklist <command>            | Sets the bot to ignore certain commands.
| Moderation | ws!command whitelist <command>            | Stops the bot from ignoring certain commands.
| Moderation | ws!commands disable                       | Disables all command usage on the server. This setting can be overridden by the other permission commands.
| Moderation | ws!commands enable                        | Enables all command usage on the server. This setting can't override the other permission commands.
| Moderation | ws!channel whitelist [channel / category] | Stops the bot from ignoring commands called on a category or channel.
| Moderation | ws!settings                               | Shows personal settings for user, and configured permissions for this server.
| Moderation | ws!settings [options]                     | Change the personal settings, and configured permissions through the settings command.
| Moderation | ws!settings reset [guild / personal]      | Resets personal settings for user, or all the configured permissions for this server. If nothing is provided, the operation will reset personal settings.
| -        | -        | -           |
| Prefix | ws!prefix | Shows the current prefix for this server.
| Prefix | ws!prefix <string> | Changes the current prefix for this server. Maximum 6 characters.
| Prefix | ws!prefix reset | Resets the current prefix for this server.
| -        | -        | -           |
| Profile | ws!profile [user]                           | Shows the profile of a user.
| Profile | ws!profile avatar <character>               | Changes the avatar of the profile.
| Profile | ws!profile namecard <character / namecard>  | Changes the namecard background of the profile.
| Profile | ws!profile signature <messages>             | Changes the signature of the profile. Maximum 1024 characters. You can write on next line by adding \n (regex next line) in the profile signature.
| Profile | ws!profile uid <uid>                        | Changes the uid of the profile. Maximum 9 characters.
  
#### Upcoming Features
- Custom - Able to create a custom banner, with custom rating, stardusts and starglitters.
- Inventory - Shows their moras, stardusts, starglitters, primogems and characters they owned.

## Credits
- \</another\>#1678 and .𝐼𝒹𝑒𝒶𝓁𝒾𝓈𝓉𝒶™ ☕#5935 - Developers
- xStarRiver#1616, Brayden Leung#6139 and UASN Stellania#4885 - Contributors
- Saeed#3680, KLEIN#6784, 試吓唔好咁#1426, Thomas3388#0267, CallousNovem#7397 and I love プルシュカ#9722 - Beta Testers
