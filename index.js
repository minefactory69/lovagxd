const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone : false});
const botconfig = require("./botconfig.json");
// const cooldown = require("./cooldown.json");
let name = "Juice";
////////////////////////////////////////////////

//Feljebb vannak a globális változók.
 
 
 
bot.on("ready", async() => { //bot.on kezdete
    console.log(`${bot.user.username} elindult sikeresen!`)
 
//status :d   
let prefix = botconfig.prefix; 
    let statusok = [
        `${bot.guilds.size} szerver`,
        `fejlesztő: Magyar Games`,
        `!fortnite`,
        `!nitro`,
        "!inv"

    ]
    
 
    setInterval(function(){
        let status = statusok[Math.floor(Math.random() * statusok.length)];
        bot.user.setActivity(status, {type: "WATCHING"}) 
    }, 3000) 


}); //itt vége a bot.on nak
 
 
 
bot.on("message", async message => { //bot on kezdete
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
 //prefix messageArray és cmd :D cmd = 0. karakter prefix = botconfig.prefix :D
    let prefix = botconfig.prefix; 
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
 
    //////////////////////////////////////
    if(cmd === `${prefix}fortnite`){
        let embed = new Discord.RichEmbed()
        .setTitle("Magyar Fortnite Közösség")
        .addField("Link:", "https://discord.gg/fvYWhXp")
        .setTimestamp(message.createdAt)
        .setFooter(`${name}`);
        message.channel.send(embed);
    }

    if(cmd === `${prefix}nitro`){
        let embed = new Discord.RichEmbed()
        .setTitle("Nitró!")
        .addField("Link:", "https://discord.gg/3w7czKz")
        .setTimestamp(message.createdAt)
        .setFooter(`${name}`);
        message.channel.send(embed);
    }

    if(cmd === `${prefix}inv`){
        let embed = new Discord.RichEmbed()
        .setTitle("Rewand")
        .addField("Nyeremények:", "5 inv=VIP, \n 15 inv =Nitro,\n 30 inv =Nitro+Promo")
        .setTimestamp(message.createdAt)
        .setFooter(`${name}`);
        message.channel.send(embed);
    }
   
})

bot.login(process.env.BOT_TOKEN);
