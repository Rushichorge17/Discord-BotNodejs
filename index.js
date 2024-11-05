const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const client = new Client({ intents: [GatewayIntentBits.Guilds , GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.on('messageCreate',(message)=>{
    if(message.author.bot) return;
    message.reply({
        content: 'Hello, I am a bot!'
    })
    console.log(message.content);
});

client.on("interactionCreate",(interaction)=>{
    console.log(interaction);
    interaction.reply("Pong!!")
})

client.login(process.env.DISCORD_BOT_TOKEN);
