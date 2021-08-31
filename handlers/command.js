const client = require('../index')
const {readdirSync} = require('fs');
const ascii = require('ascii-table')
let table = new ascii("Commands");
table.setHeading('Command', ' Load status');
module.exports= (client) => {
    readdirSync('./commandss/').forEach(dir => {
        const commands = readdirSync(`./commandss/${dir}/`).filter(file => file.endsWith('.js'));
        for(let file of commands){
            let pull = require(`../commandss/${dir}/${file}`);
            if(pull.name){
                client.commands.set(pull.name, pull);
                table.addRow(file,'✅')
            } else {
                table.addRow(file, '❌ -> Missing a help.name, or help.name is not a string.')
                continue;
            }if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name))
        }
    });
    console.log(table.toString());

    readdirSync("./events1/").forEach((file) => {
        const events = readdirSync("./events1/").filter((file) =>
          file.endsWith(".js")
        );
    
        for (let file of events) {
          let pull = require(`../events1/${file}`);
    
          if (pull.name) {
            client.events.set(pull.name, pull);
          } else {
            continue;
          }
        }
      });

}


