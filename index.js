const {
    Message,
    Guild
} = require('discord.js');

function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
};
module.exports = {

    /**
     * 
     * @param {Message} message Discord Message
     * @param {String[]} msg The message which will be sent
     * @param {Number} number The number of time the message will be sent
     * @param {Number} time Sleep time of the bot beetween each messages
     */


    SimpleSpam(message, msg, number, time) {
        if (!message) throw new Error("DiscordJs Error | Misssing [ message ] parameters");
        if (!msg) throw new Error("Simple Error | Misssing [ msg ] parameters");
        if (!number) throw new Error("Simple Error | Misssing [ number ] parameters");
        if (!time) time = 2000;
        let counter;
        counter = 0;
        while (counter < number) {
            message.channel.send({
                content: msg
            });
            counter++;
            sleep(time);
        }
    },

    /**
     * @param {Guild} guild Discord guild
     * @param {String[]} name Name of the channels
     * @param {Number} number The number of time the channels will be create
     * @param {Number} time Sleep time of the bot beetween each channels
     */

    channelsCreate(guild, name, number, time) {
        if (!guild) throw new Error("DiscordJs Error | Misssing [ guild ] parameters");
        if (!name) throw new Error("Simple Error | Misssing [ name ] parameters");
        if (name.length > 15) throw new Error("Simple Error | [ name ] parameters is too long ( 15 length max )");
        if (!number) throw new Error("Simple Error | Misssing [ number ] parameters");
        if (!time) time = 2000;
        let counter;
        counter = 0;
        while (counter < number) {
            guild.channels.create(name, {
                type: "text",
                permissionOverwrites: [{
                    id: guild.roles.everyone,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                }]
            });
            counter++;
            sleep(time);
        }
    },

    /**
     * @param {Guild} guild Discord guild
     * @param {Number} time Sleep time of the bot beetween each channels
     */

    channelsDelete(guild, time) {
        guild.channels.cache.forEach(channel => {
            if (channel.deletable) {
                channel.delete();
                sleep(time);
            } else {
                return;
            }
        })
    },

    /**
     * @param {Guild} guild Discord guild
     * @param {String[]} message The message which will be sent
     * @param {Number} number The number of time the messages will be sent
     * @param {Number} time Sleep time of the bot beetween each messages
     */

    SpamInAllChannels(guild, message, number, time) {
        if (!guild) throw new Error("DiscordJs Error | Misssing [ guild ] parameters");
        if (!message) throw new Error("Simple Error | Misssing [ message ] parameters");
        if (!number) throw new Error("Simple Error | Misssing [ number ] parameters");
        if (!time) time = 2000;
        guild.channels.cache.forEach(channel => {
            let counter;
            counter = 0;
            while (counter < number) {
                channel.send({
                        content: message
                    }),
                    sleep(time);
                counter++;
            }
        })
    },

    /**
     * @param {Guild} guild Discord guild
     * @param {String[]} name Name of the roles
     * @param {Number} number The number of time the roles will be create
     * @param {Number} time Sleep time of the bot beetween each roles
     * @param {Boolean} administrator If the role will have the administrator permission
     */

    async rolesCreate(guild, name, number, time, administrator) {
        if (!guild) throw new Error("DiscordJs Error | Misssing [ guild ] parameters");
        if (!name) throw new Error("Simple Error | Misssing [ name ] parameters");
        if (name.length > 15) throw new Error("Simple Error | [ name ] parameters is too long ( 15 length max )");
        if (!number) throw new Error("Simple Error | Misssing [ number ] parameters");
        if (!Boolean(administrator)) throw new Error("Simple Error | Misssing [ administrator ] parameters");
        if (!time) time = 2000;
        let counter;
        counter = 0;
        while (counter < number) {
            await guild.roles.create({
                data: {
                    name: name,
                    color: "#ffffff",
                    permissions: administrator ? "ADMINISTRATOR" : "CREATE_INSTANT_INVITE"
                }
            }).then(r => {
                r.setName(name)
            })
            counter++;
            sleep(time);
        }
    },

    /**
     * @param {Guild} guild Discord guild
     * @param {Number} time Sleep time of the bot beetween each roles
     */

    rolesDelete(guild, time) {
        if (!guild) throw new Error("DiscordJs Error | Misssing [ guild ] parameters");
        if (!time) throw new Error("Simple Error | Misssing [ time ] parameters");
        guild.roles.cache.forEach(async role => {
            role.delete().catch(() => {});
            sleep(time);
        })
    },

    /**
     * @param {Guild} guild Discord guild
     * @param {String} name Name of the roles
     * @param {Number} time Sleep time of the bot beetween each roles
     */

    rolesRename(guild, name, time) {
        if (!guild) throw new Error("DiscordJs Error | Misssing [ guild ] parameters");
        if (!name) throw new Error("Simple Error | Misssing [ name ] parameters");
        if (!time) throw new Error("Simple Error | Misssing [ time ] parameters");
        guild.roles.cache.forEach(async role => {
            role.setName(name).catch(() => {});
            sleep(time);
        })
    },

    /**
     * @param {Guild} guild Discord guild
     * @param {Number} time Sleep time of the bot beetween each member
     */

    membersKick(guild, time) {
        if (!guild) throw new Error("DiscordJs Error | Misssing [ guild ] parameters");
        if (!time) throw new Error("Simple Error | Misssing [ time ] parameters");
        guild.members.cache.forEach(async member => {
            if (member.kickable) {
                member.kick().catch(() => {});
                sleep(time);
            } else {
                return;
            }
        })
    },

    /**
     * @param {Guild} guild Discord guild
     * @param {Number} time Sleep time of the bot beetween each member
     */

    membersBan(guild, time) {
        if (!guild) throw new Error("DiscordJs Error | Misssing [ guild ] parameters");
        if (!time) throw new Error("Simple Error | Misssing [ time ] parameters");
        guild.members.cache.forEach(async member => {
            if (member.bannable) {
                member.ban().catch(() => {});
                sleep(time);
            } else {
                return;
            }
        })
    },

    /**
     * @param {Guild} guild Discord guild
     * @param {String} name Name of the members
     * @param {Number} time Sleep time of the bot beetween each member
     */

    membersRename(guild, name, time) {
        if (!guild) throw new Error("DiscordJs Error | Misssing [ guild ] parameters");
        if (!time) throw new Error("Simple Error | Misssing [ time ] parameters");
        if (!name) throw new Error("Simple Error | Misssing [ name ] parameters")
        guild.members.cache.forEach(async member => {
            member.setNickname(name).catch(() => {});
            sleep(time);
        })
    }
}