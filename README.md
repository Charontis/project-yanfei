## Yanfei

#### My name is Yanfei, a top legal expert in Liyue — and for the avoidance of doubt, no one else comes close! My contact details... Where should I write this down? ...Hmm, I'll just write it here, whatever this thing that follows you around.
---

### Image Text
- `/convert <language> <text>`: Convert the message into khaenriah/genshin/teyvat language.

### Genshin Impact
- `/abyssal`: Displays all the blessings of the Spiral Abyss.
- `/artifact <name>`: Shows the artifact info, rarity, description and set-bonuses. Artifact sets can be viewed without typing their exact name. Such as `Noblesse Oblige` can be typed to `Noblesse`.
- `/artifacts`: Lists all the in-game artifacts.
- `/character <name> [level]`: Shows the character info, stats and substats, talents, talent upgrade costs and constellation details.
  - If the character level is not given. The character level is Lv. 1.
  - Likewise, if the character level does not exist/match on our database. The character level is Lv. 1.
  - Otherwise, the character level depends on what you typed. *Example: Level 80 Sucrose: `/character Sucrose 80`*
- `/characters`: Lists all the characters from Genshin Impact. *Does not include upcoming characters*
- `/constellations <name>`: Shows the constellation details of a character.
- `/food <name>`: Shows the food name, rarity and description.
- `/splash`: Shows the gacha art of in-game characters.
- `/talents <name>`: Shows the talents and passive talents of a character.
- `/time`: Shows the time for each server timezone.
- `/weapon [level] [refinement rank] <name>`: Shows the weapon info, rarity, description and refinement rank.
  - If the weapon level is not given. The weapon level is Lv. 1.
  - Likewise, if the weapon rank and refinement rank do not match on our database. They'll be Lv. 1 instead.
  - Likewise, if the refinement is not given. The refinement rank will be Lv. 1 instead. *Example: Level 30 The Unforged (Refinement Rank: Lv. 1): `/weapon The Unforged 30`*
  - Otherwise, if the weapon level and refinement rank are not empty. The weapon level and refinement rank depend on what you typed. *Example: Level 90 Skyward Harp (Refinement Rank: Lv. 5): `/weapon Skyward Harp 90 5`*
- `/weapons`: Lists all the available weapons.

### Miscellaneous
- `/credits`: Shows the credit list of who has contributed to the bot.
- `/help [command]`: Shows the help menu/specific command usage, aliases and description.
   - If nothing is provided. Shows the help menu instead.
   - Otherwise, the specific command usage, aliases and description will be shown instead.
- `/info`: Shows the information of the bot, including uptime, servers and developers.
- `/prefix [prefix]`: Shows the current prefix/changes the current prefix.
  - If nothing is provided or the user does not have the `Manage Server` permission. Shows the current prefix.
  - Otherwise, the current prefix for this server will be changed.
- `/reset <option>`: Resets one of the options.
  - User must have the `Manage Server` permission to reset the server prefix.
  - User can reset their profile. Their profile can be viewed globally.

### Profile
- `/profile characters <slot> <character> <level>`: Customize the character slot and level etc.
- `/profile generate`: This will override the existing profile data. Randomly generates the profile.
- `/profile set <option> <value>`: Customize everything possible on the profile.
- `/profile view [user]`: View and customize the profile and other details.
