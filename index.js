const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const fetch = require("node-fetch");
const db =require("quick.db");
const client = new Client({
  disableEveryone: true,
	
	
})
const astriex = new Client({
	disableEveryone: true,
	
})
module.exports = client;
const Timeout = new Collection();
const config = require('./config.json')
const prefix = process.env.prefix
const ms = require('ms')
const token = process.env.token

//___________________________________________________________________________                          CLIENTS

client.commands = new Collection();
client.snipes = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commandss/");
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
// Initializing the project



["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
//=========================================================================
//                            STATUS 
//_________________________________________________________________________
client.on("ready", () => {
    console.log(`${client.user.username} ✅.

	
░█████╗░░██████╗████████╗██████╗░██╗███████╗██╗░░██╗
██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██║██╔════╝╚██╗██╔╝
███████║╚█████╗░░░░██║░░░██████╔╝██║█████╗░░░╚███╔╝░
██╔══██║░╚═══██╗░░░██║░░░██╔══██╗██║██╔══╝░░░██╔██╗░
██║░░██║██████╔╝░░░██║░░░██║░░██║██║███████╗██╔╝╚██╗
╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚═╝╚══════╝╚═╝░░╚═╝`)

})
//__________________________________________________________________________



 const { MessageEmbed } = require('discord.js');
 
client.on('message', async message => {
  const mentionRegex = RegExp(`^<@!?${client.user.id}> help$`);0
	
  
  
    if(message.author.bot) return;

      if (!message.guild || message.author.bot) return;

      
     if (message.content.match(mentionRegex)) {
           const prefix1 = new MessageEmbed()
           .setTitle(`My prefix is \`\`\`a!\`\`\``)
          .setFooter(client.user.username, client.user.displayAvatarURL())
            .setDescription( `**For more info**\n ➡️ a!help to list commands\n`)
           
           .setTimestamp()
          
            .setColor('#34ebe5')
      await message.channel.send(prefix1).then(msg => msg.delete({timeout:5000}));

      }

 
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    
	 if(command) {
		if(command.timeout) {



			if(Timeout.has(`${command.name}${message.author.id}`)) return message.channel.send(`You are on a \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long : true})} \`cooldown`)



		command.run(client, message, args) 
		Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.timeout)
		setTimeout(() => {
			Timeout.delete(`${command.name}${message.author.id}`)
		}, command.timeout)
	}
	}

})

///////////////////////////////////////////////////////////////////////
  
///chat




////////////////////////////////////////////////////'
const mongoose = require('mongoose');


mongoose.connect(process.env.mongoose,{
    useUnifiedTopology : true,
    useNewUrlParser: true,
}).then(console.log('Connected to mongo db!'))



//-------------------------------------------------
//-------------------------------------------------
//                   END  
//-------------------------------------------------

const { GiveawaysManager } = require('discord-giveaways')

client.giveaways = new GiveawaysManager(client, {
    storage : './giveaways.json',
    updateCountdownEvery: 5000,
    embedColor: '#ff0000',
    reaction : '🎉'

})

//             GIVEAWAY  THING 
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//|||||||||||||||||||||||||||||||||||||||||||||||||||
//const word = require('./JSON/word.json')
client.on("message", async message => {

  

		 const alusm =  message.member
///////////////////////////////////////////////////////////
let sChannel = db.fetch(`links_${message.guild.id}`);
        if (sChannel === null) {
            return;
          }
		  
            if (message.author.bot && message.author.discriminator !== '0000') return;
            if(message.channel.id === sChannel){
                if (message.author.bot) return;
				if(message.content.startsWith(`https:`) || message.content.startsWith(`https:`)) {
message.delete()
alusm.send(" :x: no link allowed")

////////////////////////////////////////////////////////////////////////
}

 }
			
})

////////////////////////////////////////////////////////////////////

  




//client.on ("message", {message} => {

//})
			
			




////////////////////////////////////////////////////////
const alexa = require("alexa-bot-api");
var chatbot = new alexa("chat bot api");

client.on("message", async message => {
       
       

});





////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////

const { addexp } = require("./handlers/xp.js")

//LEVEL
client.on("message", async message => {
 
  if(message.author.bot) return;
  if(!message.guild) return;
  
return addexp(message)
})






  //Errors or questions? https://discord.gg/2EZSpxNB5z (Support server for weky npm)
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const commandFiles = fs.readdirSync('./commandss').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commandss/${file}`);
  bot.commands.set(command.name, command);
}
//\\\\\\\\\\\\\\\\\\\}}}}}}}}}}}}}}}}}|||||||||||||||||||||||||||


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






global.client = client

process.on('unhandledRejection', error => {
    console.log(`UnhandledPromiseRejection : ${error}\n`)
});

client.on('ready', async () => {
    
    console.log(`\nLogged in : ${client.user.tag}\n`)
    

    const commandFiles = fs.readdirSync('./slash').filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./slash/${file}`);
        client.api.applications(client.user.id).guilds('852508823577952256').commands.post({ data: {
            name: command.name,
            description: command.description,
            options: command.commandOptions
        }})
        if (command.global == true) {
            client.api.applications(client.user.id).commands.post({ data: {
                name: command.name,
                description: command.description,
                options: command.commandOptions
            }})
        }
        client.commands.set(command.name, command);
        console.log(`Command POST : ${command.name} from ${file} (${command.global ? "global" : "guild"})`)
    }
    console.log("")
    
    let cmdArrGlobal = await client.api.applications(client.user.id).commands.get()
    let cmdArrGuild = await client.api.applications(client.user.id).guilds('828267749544820787').commands.get()
    cmdArrGlobal.forEach(element => {
        console.log("Global command loaded : " + element.name + " (" + element.id + ")" )
    });
    console.log("")
    cmdArrGuild.forEach(element => {
        console.log("Guild command loaded : " + element.name + " (" + element.id + ")")
    });
    console.log("")
});

client.ws.on('INTERACTION_CREATE', async interaction => {

    if (!client.commands.has(interaction.data.name)) return;

    try {
        client.commands.get(interaction.data.name).execute(interaction);
    } catch (error) {
        console.log(`Error from command ${interaction.data.name} : ${error.message}`);
        console.log(`${error.stack}\n`)
        client.api.interactions(interaction.id, interaction.token).callback.post({data: {
			type: 4,
			data: {
					content: `Sorry, there was an error executing that command!`
				}
			}
		})
    }
    
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const music = require("./index2")



client.login(process.env.token);
