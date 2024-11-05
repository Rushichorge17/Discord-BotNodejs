const { REST, Routes } = require('discord.js');

// Load environment variables
require('dotenv').config();

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN_CLIENT
);

async function refreshCommands() {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.DISCORD_BOT_TOKEN_CLIENT), {
      body: commands
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}

// Call the async function
refreshCommands();
