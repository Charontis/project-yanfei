## Yanfei

#### My name is Yanfei, a top legal expert in Liyue — and for the avoidance of doubt, no one else comes close! My contact details... Where should I write this down? ...Hmm, I'll just write it here, whatever this thing that follows you around.
---

### Image Texts
- `y!abyss`: Converts the message into Abyss / Khaenriah language.
- `y!genshin`: Converts the message into Genshin Impact font.
- `y!teyvat`: Converts the message into Teyvat language.

### Gacha
- `y!history`: Shows your simulated gacha history, up to 100 roll.
- `y!wish`: Shows a simulated results of wishing a banner.
  - `y!wish one`: Single wish on a banner.
  - `y!wish ten`: Wish on a banner, but ten times.
  - `y!wish register`: You must register in order to start wishing.
  - `y!wish inventor`: Views your gacha inventory with simulated results, with details such as constellations and refinement rank.

### Genshin Impact
- `y!abyssal`: Displays all the blessing of the Spiral Abyss.
- `y!artifact <name>`: Shows the artifact info, rarity, description and set-bonuses.
- `y!artifact-list [rarity]`: Lists all the available artifacts. 
  - This command supports filtering by rarity. Example: `y!artifact-list 5` to show all the 5★ artifacts.
- `y!character <name> [level]`: Shows the character info, stats and substats, talents, talent upgrade costs and constellation details.
  - If the character level is not given. The character level is Lv. 1.
  - Otherwise, the character level depends on what you typed. *Example: Level 80 Keqing: `y!character Keqing 80`*
  - Eventually, if the character level does not exist/match from our database. The character level is Lv. 1 instead.
- `y!character-art`: Shows the gacha art of in-game characters.
- `y!character-card`: Shows the card of each in-game characters.
- `y!character-list [rarity]`: Lists all the characters from Genshin Impact. **Spoiler Warning: Includes upcoming characters**
  - This command supports filtering by rarity. Example: `y!character-list 5` to show all the 5★ characters.
- `y!constellations <name>`: Shows the constellation details of a character.
- `y!talents <name>`: Shows the talents and passive talents of a character.
- `y!time`: Shows the time for each server timezone.
- `y!weapon [level] [refinement rank] <name>`: Shows the weapon info, rarity, description and refinement rank.
  - If the weapon level is not given. The weapon level is Lv. 1.
  - However, if the refinement rank is not given. The refinement rank is Lv. 1. *Example: Level 60 Skyward Spine (Refinement rank: 1): `y!weapon 60 Skyward Spine`*
  - Otherwise, if the weapon level and refinement rank is not empty. The weapon level and refinement rank depends on what you typed. *Example: Level 90 Amo's Bow (Max Refinement Rank): `y!weapon 90 5 Amo's Bow`*
  - Eventually, if either the weapon level or the refinement rank do not exist/match from our database. The weapon level and the refinement rank is Lv. 1 instead.
- `y!weapon-list [rarity]`: Lists all the available weapons.
  - This command supports filtering by rarity. Example: `y!weapon-list 5` to show all the 5★ weapons.

### Miscellaneous
- `y!help [command]`: Shows the help menu/specific command usage, aliases and description.
   - If nothing is provided. Shows the help menu instead.
   - Otherwise, the specific command usage, aliases and description will show instead.
- `y!info`: Shows the information of the bot, including uptime, servers and developers.
- `y!invite`: Sends a link to invite Yanfei to your server.
- `y!prefix [<prefix>]`: Shows the current prefix/changes the current prefix.
  - If nothing is provided. Shows the current prefix.
  - If user does not have the `Manage Server` permission. Also shows the current prefix instead.
  - Otherwise, the current prefix for this server will be changed.
- `y!report <message>`: Submits either a bug report or suggestion to the bot developers.
  - We're looking forward users to request for useful content/feature.
  - By sending useless content/feature will be ignored.

### Moderation
- `y!blacklist-channel <channel>`: Sets the bot to ignore commands called on a category or channel.
- `y!blacklist-command <command>`: Sets the bot to ignore certain commands.
- `y!channels`: Lists all the ignored channels of the server.
- `y!commands`: Lists all the ignored commands of the server.
- `y!settings`: Shows the configured permissions for this server.
- `y!reset-settings <option>`: Resets the current configured settings for this server.
- `y!whitelist-channel <channel>`: Stops the bot from ignoring commands called on a category or channel.
- `y!whitelist-command <command>`: Stops the bot from ignoring certain commands.

### Music
- `y!loop <mode>`: Sets the current repeating mode for the voice channel.
  - `y!loop this/song`: Repeats the current playing song.
  - `y!loop all/queue`: Repeats the whole music queue.
  - `y!loop off/disable`: Disables the repeating mode.
- `y!np`: Shows the now playing music for the voice channel.
- `y!pause`: Pauses the current ongoing music.
- `y!play <video name / url>`: Plays specific music to the voice channel.
- `y!queue`: Shows the current music queue.
- `y!remove <integer>`: Removes a song from the music queue on the server. Song IDs can be found by using the queue command.
- `y!restart`: Stops and replays the current playing song.
- `y!resume`: Unpauses the paused song.
- `y!shuffle`: Shuffles the entire music queue.
- `y!skip`: Skips the current ongoing song.
- `y!stop`: Stops playing and leaves the voice channel.
- `y!volume <integer>`: Changes the current music volume.
  ##### Music Modes
  - 8d
  - bass-boost
  - cursed
  - daycore
  - double
  - flanger
  - gate
  - haas
  - half
  - mcompand
  - nightcore
  - normalizer
  - phaser
  - pulsator
  - reverse
  - sub-boost
  - surround
  - treble
  - tremolo
  - vaporwave
  - vibrato

### Playlist
- `y!all`: Plays the entire Genshin Impact soundtracks.
- `y!archipelago`: Plays the Golden Apple Archipelago soundtracks.
- `y!jade`: Plays the Jade Moon Upon a Sea of Clouds (Liyue) soundtracks.
- `y!shimmering`: Plays the Shimmering Voyage soundtracks.
- `y!star`: Plays the Wind and The Star Traveler soundtracks.
- `y!stellar`: Plays the Stellar Moments soundtracks.
- `y!wind`: Plays the City of Winds and Idylls (Mondstadt) soundtracks.

### Profile
- `y!avatar <aliases>`: Changes the profile avatar.
- `y!namecard <aliases>`: Changes the profile background.
- `y!profile`: View and customize the profile and background.
- `y!signature <message>`: Type the message to change the profile signature. 
- `y!uid <interger>`: Changes the profile uid.
