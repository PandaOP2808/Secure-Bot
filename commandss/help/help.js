const { MessageEmbed } = require('discord.js');
const client = require('../..');

module.exports = {
    name : 'help',
	aliases: ['HELP'],
    timeout: 1,


    
  
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        
        const embed = new MessageEmbed()

            
            .setColor("BLUE")
			
            .setTimestamp()
            .setFooter(message.author.username, message.author.displayAvatarURL)
            
            .setDescription(`[ASTRIEX HELP COMMAND](https://discord.com/oauth2/authorize?client_id=819421344813809685&scope=bot%20applications.commands&permissions=8589934591)\n**__Astriex is a multi-purpose bot etc__**\n**Astriex prefix is \a!**
            

<:Astriexinfo:882230738563498054> **INFO**
> \`\`\`help, ping, avatar, serverinfo, userinfo, snipe, translate, hack, say, math, urban, rank, math, membercount\`\`\`

<a:AstriexModerationCommands:882230178984648764> **MODERATION COMMANDS**
> \`\`\`announce, kick, ban, mute, unmute, tempmute, warn, check-warn, resetwarns, addrole, removerole, antilink-on, anilink-off, afk, purge, lock, unlock\`\`\`

<:AstriexFUN:882230292813848577> **FUN**
> \`\`\`connect4, snakegame, hangman, tictactoe, trivia, weather, translate, text-art, suffle\`\`\`

<:AstriexGiveaway:882230023766036490> **GIVEAWAY**
> \`\`\`gstart, gend, greroll\`\`\`

📷 **IMAGE**
> \`\`\`image, trigger, meme, kiss, hug, slap, punch, maps\`\`\`

<a:Astriexmusic:882229658362462258> MUSIC
> \`\`\`play, pause, queue, remove, resume, search [song], shuffle, skip, skipto, volume, youtube , nowplaying, clear, search, bassboost <none | low | medium | high>, loop, loopqueue, lyrics, disconnect, grab, seek <time s/m/h>\`\`\`

💭 **CHATBOT**
> \`\`\`setchatbot, disablechatbot\`\`\`

💰 **ECONOMY**
> \`\`\`balance, elb, beg, buy, deposit,fish, slots, work, weekly, daily, give, sell, withdraw, roulette\`\`\`

<a:Astriexbotinfo:882231020894695435> **BOT-INFO**
> \`\`\`botinfo, uptime, detail \`\`\`

🔗 **LINKS**
[invite me](https://discord.com/oauth2/authorize?client_id=819421344813809685&scope=bot%20applications.commands&permissions=8589934591) | [support server](https://discord.gg/X7Jc6FDhFw)
`) 

    await message.channel.send(embed)
            
    
    }
}