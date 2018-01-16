const Discord = require("discord.js");

const TOKEN = "TOKEN_HERE"

const bot = new Discord.Client();

const PREFIX = "!!";

var fortunes = [
"Yes",
"No",
"Maybe",
"Fuck if i know"

];

bot.on("ready", function(){
    console.log("Ready");
});
//THIS IS HELP
bot.on("message", function(message){
    if (message.author.equals(bot.user))return;

    if (message.content == "help "){
         message.channel.sendMessage(" ``` So you decided you needed help well here we go. There arent many commands but lets check them out ``` ");
         message.channel.sendMessage(" ```  hello = Hey!       |    ugh = are you ok? Feel better <3     |    L = Don't you L Them!!!                 ``` ");
         message.channel.sendMessage(" ``` stfu = you stfu     |    uganda = DO YOU KNOW DE WAE          |    ayy = @user, LMAO                         ``` ");
         message.channel.sendMessage(" ``` ping dosent work    |                  [TBA]                  |    i love you =  i love you too    ``` ");
 
    
    
        }
});

bot.on("message", function(message){
     if (message.author.equals(bot.user))return;

     if (message.content == "hello"){
          message.channel.sendMessage("hello, How are you");
     }
});
bot.on("message", function(message){
    if (message.author.equals(bot.user))return;

    if (message.content == "i love you"){
         message.channel.sendMessage("i love you too");
}
})
bot.on("message", function(message){
    if (message.author.equals(bot.user))return;

    if (message.content == "L"){
         message.channel.sendMessage("Don't you L Them!!!");
    }
});

bot.on("message", function(message){
    if (message.author.equals(bot.user))return;

    if (message.content == "stfu"){
         message.channel.sendMessage("you stfu");
    }
});
bot.on("message", function(message){
    if (message.author.equals(bot.user))return;

    if (message.content == "ugh"){
         message.channel.sendMessage("are you ok? Feel better <3 ");
}
})
bot.on("message", function(message){
    if (message.author.equals(bot.user))return;

    if (message.content == "uganda"){
         message.channel.sendMessage("DO YOU KNOW DE WAE");
}
})
bot.on("message", function(message){
if (message.content.startsWith('ping')) {
    message.channel.sendMessage('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');}
})
bot.on("message", function(message){
if(message.content === "ayy") {
    message.reply("LMAO");
 }
})

bot.on("message", function(message){
    if(message.content === "ay") {
        message.reply("LMAO");
     
    }
    })

// this welcomes the new persons and give them an auto role
    bot.on("guildMemberAdd", function(member ){
        member.guild.channels.find("name", "general").sendMessage(member.toString() + " Welcome to the server ");
    
    member.addRole(member.guild.roles.find("name", "memeber"));
   });
    

// PREFIX "!!" fIRST cOMMand

     bot.on("message", function(message){
         if (message.author.equals(bot.user)) return;
          
        if (!message.content.startsWith(PREFIX)) return;
    
    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()){
        case "ping":
        message.channel.sendMessage(" Pong!" )
    break;
        case "info":
        message.channel.sendMessage(" Created By 'Currently' For Fun!!!" );
    break;
        case "8ball":
        if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else message.channel.sendMessage("Can't read that");
    break;
        case "help":
        var embed = new Discord.RichEmbed()
          .addField("Commands That Are Available", "I love you, enjoy <3", true)
          .addField("Commands List", " hello ,ugh, L, stfu, uganda, ping, i love you, !!8ball, !!info, !!ping", true)
          
          message.channel.sendEmbed(embed);
    break;
          default:
        message.channel.sendMessage("Invalid Command"); 
        
    


        
        
    }
    });
bot.login(TOKEN);


