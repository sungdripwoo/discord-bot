const { sign } = require("crypto");
const Discord = require("discord.js");
const { cpuUsage } = require("process");

const Client = new Discord.Client;
const prefix = "$";


Client.on("ready", () => {
    console.log("bot opérationnel")
});
Client.on("message", message => {
    if(message.author.bot) return;
 
    if(message.content == prefix + "swaggy"){
    message.channel.send("swag");
}
    if(message.content == prefix + "je suis gay ?"){
    message.channel.send(" est gay ");
    }
    if(message.content == prefix + "sung est un charo ?"){
    message.channel.send(" non ");
    }
    if(message.content == prefix + "sung est infidèle ?"){
    message.channel.send(" jamais ");
    }
    if(message.content == prefix + "eren est gay ?"){
    message.channel.send(" always has been ");
    }
    if(message.content == prefix + "natsu est bizarre ?"){
    message.channel.send(" OUI ! ");
    }
    if(message.content == prefix + "eml est con ?"){
    message.channel.send(" il l'a toujours été... ")
    }
    if(message.content == prefix + "Swag + Sung = ?"){
    message.channel.send("<3333333")
    }
    if(message.content == prefix + "sung merite d'être owner ?"){
    message.channel.send("OUI !")
    }
    if(message.content == prefix + "le bot de sung >>"){
    message.channel.send("fact")
    }
    if(message.content == prefix + "eren merite d'être owner ?"){
    message.channel.send("Possiblement")
    }
    if(message.content == prefix + "eml"){
    message.channel.send("niquez vos l'été")
    }
    if(message.content == prefix + "eml2"){
    message.channel.send("faire tg")
    }
    if(message.content == prefix + "eml3"){
    message.channel.send("genre tu pas vous")
    }
    if(message.content == prefix + "eml4"){
    message.channel.send("j'ai dormir")
    }
    if(message.content == prefix + "eml5"){
    message.channel.send("bahahaha j'ai cormois")
    }
    if(message.content == prefix + "eml6"){
    message.channel.send("parite")
    }
    if(message.content == prefix + "siw"){
    message.channel.send("y'a gueule")
    }
    if(message.content == prefix + "eren"){
    message.channel.send("Vox")
    }
    if(message.content == prefix + "eren2"){
    message.channel.send("Coc")
    }
    if(message.content == prefix + "eren3"){
    message.channel.send("Abus pas")
    }
    if(message.content == prefix + "sung"){
    message.channel.send("ban sous le bueau quoi")
    }
    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné."); 
            }
            else {
                if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName + " a été banni"); 
                }    
                else {
                    message.reply("Impossible de bannir ce membre.")
                }
            }
        }
        else if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else {
                if(mention.kickable){
                    mention.kick();
                    message.channel.send(mention.displayName + " a été kick.");
                }
                else {
                    message.reply("Impossible de kick ce membre.");
                }     
            }
        }
    
        else if(message.content.startsWith(prefix + "mute")){   
             let mention = message.mentions.members.first();

             if(mention == undefined){
                 message.reply("Membre mal ou non mentionné.");
        }
             else {
                 mention.roles.add("852559866145144894");
                 message.reply(mention.displayName + " a bien fermé sa gueule.");
            }
        }
        else if(message.content.startsWith(prefix + "unmute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else {
                mention.roles.remove("852559866145144894");
                message.channel.send(mention.displayName + " a bien reouvert sa gueule.");
            }
        }
        else if(message.content.startsWith(prefix + "tempmute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else {
                let args = message.content.split(" ");

                mention.roles.add("852559866145144894");
                message.channel.send(mention.displayName + " a bien fermé sa gueule.");
                setTimeout(function() {

                    mention.roles.remove("852559866145144894");
                    message.channel.send("<@" + mention.id + "> tu peux désormais ouvrir ta gueule !");
                }, args[2] * 1000);
            }
        }
    }   
});


Client.login("ODUyMjU4MTg3NDY1NDU3Njk1.YMENSg.-LKPabLTbBMSlTP5XRATgwTp6FU");