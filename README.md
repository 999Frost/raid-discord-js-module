<p align="center"><a href="https://nodei.co/npm/raid-discord-js/"><img src="https://nodei.co/npm/raid-discord-js.png"></a></p>

## ⚙️・Installation
To install the module, run this in your terminal :
```
npm i raid-discord-js
```
or this 
```
yarn add raid-discord-js
```

## 🏹・Example

This is an example of an easy discord bot using my package

```js
const { Client } = require('discord.js');
const client = new Client({intents: 32767});
const raid = require('raid-discord-js');

client.login("your token");

client.on('messageCreate', async message => {
    if(message.content === "!create-mass-channel") {
        raid.channelsCreate(message.guild, "get-raid", 20, 2000); // will create 20 channels name "get-raid" every 2 seconds
    }
    if(message.content === "!delete-all-channels") {
        raid.channelsDelete(message.guild, 2000); // will delete all channels every 2 seconds
    }
    if(message.content === "!spam-in-all-channels") {
        raid.SpamInAllChannels(message.guild, "@everyone join this server! discord.gg/", 200, 2000); // will spam "@everyone join this server! discord.gg/" in all channels 200 times every 2 seconds
    }
    if(message.content === "!create-multiple-roles") {
        raid.rolesCreate(message.guild, "raided", 200, 2000, true); // will create 200 roles name "raided" every 2 seconds with the administrator permission ( put false at the end if you don't want this permission )
    }
    if(message.content === "!delete-all-roles") {
        raid.rolesDelete(message.guild, 2000); // will delete all roles every 2 seconds
    }
    if(message.content === "!spam") {
        raid.SimpleSpam(message, "test raid", 20, 2000); // will just spam "test raid" 20 times in the channel where the command is execute every 2 seconds
    }
    if(message.content === "!ban-all") {
        raid.membersBan(message.guild, 2000); // will ban all members every 2 seconds
    }
    if(message.content === "!rename-all-roles") {
        raid.rolesRename(message.guild, "get-raid", 2000); // will rename all roles "get-raid" every 2 seconds
    }
    if(message.content === "!rename-all-members") {
        raid.membersRename(message.guild, "frost the best", 2000); // will rename all members "frost is the best" every 2 seconds
    }
})
```

## Support
If you need help, contact me on discord [here](https://discord.com/users/548028946097111045)
You can join my server [here](https://discord.gg/8J4rsqmRrp)