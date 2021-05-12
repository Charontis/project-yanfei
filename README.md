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
| Character | ws!character <name> [level]        | Shows the basic information of a character.
| Character | ws!character list [rarity]         | Shows the list of the playable characters.
| Character | ws!character skills <name>         | Shows the skills and passive talents of a character.
| Character | ws!character constellations <name> | Shows the constellation details of a character.
|
| Gacha | ws!gacha <banner>    | Roll on one of the banners.
| Gacha | ws!gacha list        | Shows the list of all the available banners.
| Gacha | ws!gacha rates       | Shows the characters, weapons, and their rates on a banner.
| Gacha | ws!gacha history     | Shows your previous 100 rolls.
| Gacha | ws!gacha leaderboard | Shows the global gacha leaderboard.
|
| Miscellaneous | ws!help [command] | Shows all the available commands that you can use.    |
| Miscellaneous | ws!time | Shows current server time for different servers.                |
| Miscellaneous | ws!invite | Shows the link to invite the bot.                             |
| Miscellaneous | ws!status | Shows the information of the bot.                             |
| Miscellaneous | ws!credits | Shows the list of people who have contributed to the bot.    |
| Miscellaneous | ws!unscramble | This command will be removed on the upcoming maintenance. |
|
| Moderation | ws!commands disable                       | Disables all command usage on the server. This setting can be overridden by the other permission commands.
| Moderation | ws!commands enable                        | Enables all command usage on the server. This setting can't override the other permission commands.
| Moderation | ws!channel blacklist [channel / category] | Sets the bot to ignore commands called on a category or channel.
| Moderation | ws!channel whitelist [channel / category] | Stops the bot from ignoring commands called on a category or channel.
| Moderation | ws!settings                               | Shows the configured permissions for this server.
| Moderation | ws!settings reset                         | Resets all the configured permissions for this server.
|
| Prefix | ws!prefix | Shows the current prefix for this server.                                  |
| Prefix | ws!prefix <string> | Changes the current prefix for this server. Maximum 6 characters. |
| Prefix | ws!prefix reset | Resets the current prefix for this server.                           |

#### Upcoming Features
- Custom - Able to create a custom banner, with custom rating, stardusts and starglitters.
- Inventory - Shows their moras, stardusts, starglitters, primogems and characters they owned.
- Profile - This shows a profile page, and can be edited customizable, such as their in-game username and signatures.

## Contributors
- another#7139, Michelle#5635 - Developers
- [xStarRiver#1616](https://github.com/xStarRiver), [NurMarvin#1337](https://github.com/NurMarvin) and [Brayden Leung#6139](https://www.twitch.tv/braydenleung_twitch) - Contributors and Providing the Genshin Impact API
- Saeed#3680, KLEIN#6784, 試吓唔好咁#1426, Thomas3388#0267, CallousNovem#7397 and I love プルシュカ#9722 - Participated in the beta testing
