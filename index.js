require("dotenv").config();
const { Client, Intents, Collection } = require('discord.js');

module.exports = client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.config = {
  prefix: ";",
};

client.commands = new Collection();

require("./handlers/command")(client);
require("./handlers/event")(client);

client.login('MTEyNjM0MzE0NzY0ODE4ODUxNg.GLSpJs.Pj0QYvqi3THPxCyzV5Y9XKEslaj-6n0_g2sJPg');
