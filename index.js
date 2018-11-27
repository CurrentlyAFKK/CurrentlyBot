const Discord = require("discord.js");

const TOKEN = "TOKEN_HERE"

const YTDL = require("ytdl-core");

const client = new Discord.Client(); 

const PREFIX = ".";

var fortunes = [
"Yes",
"No",
"Maybe",
"Fuck if i know",
"Shut Your Bubble Gum Dumb Dumb Lookin A$$ Up"
];

var roasts = [
    
"Roses are red, violets are blue, I have 5 fingers, the 3rd ones for you.",
"I wasn’t born with enough middle fingers to let you know how I feel about you.",
"If I wanted to kill myself I’d climb your ego and jump to your IQ.",
"You bring everyone a lot of joy, when you leave the room.",
"I’m jealous of all the people that haven’t met you!",
"I could eat a bowl of alphabet soup and shit out a smarter statement than that.",
"I don’t exactly hate you, but if you were on fire and I had water, I’d drink it.",
"You must have been born on a highway because that’s where most accidents happen.",
"I was pro life before I met you.",
"Are your parents siblings?",
"I’m blonde, what’s your excuse?",
"You better hope you marry rich.",
"You stare at frozen juice cans because they say, ‘concentrate’.",
"Damn not you again.",
"I am not anti-social. I just don’t like you.",
"Your ambition outweighs your relevant skills.",
"I had a nightmare. I dreamed I was you."
];

client.on('ready', () =>{
console.log('Bot Launched...')




client.user.setStatus('Online')

client.user.setGame('Fortnite')
client.user.setGame('Fortnite', `https://www.twitch.tv/currentlyafkk`);

});

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function(){
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();

    });
}


var servers = {};


 
client.on("ready", function(){
    console.log("Ready");
    
});
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "Ugh"){
         message.channel.sendMessage("are you ok? Feel better <3 ");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "L"){
         message.channel.sendMessage("Dont you L them");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "Gm"){
         message.channel.sendMessage("Gm How are you today?");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "gm"){
         message.channel.sendMessage("Gm How are you today");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "lol"){
         message.channel.sendMessage("lmao");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "lmao"){
         message.channel.sendMessage("whats so funny? xD");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "hello"){
         message.channel.sendMessage("hii");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "nothin much"){
         message.channel.sendMessage("Cool, how was your day?");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "hey"){
         message.channel.sendMessage("hey what up");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "how are you"){
         message.channel.sendMessage("im good, how are you");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "no U"){
         message.channel.sendMessage("no u");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "nO u"){
         message.channel.sendMessage("no u");
}
})

client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "NO U"){
         message.channel.sendMessage("no u");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "No u"){
         message.channel.sendMessage("no u");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "no u"){
         message.channel.sendMessage("no u");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "I love you"){
         message.channel.sendMessage("i love you too");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "idk"){
         message.channel.sendMessage("dont know what?");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "good how about you"){
         message.channel.sendMessage("I'm fine, thank you for asking");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "im good"){
         message.channel.sendMessage("Thats good to hear");
}
}) 

   client.on("message", function(message){
  if (message.author.equals(client.user))return;

     if (message.content == "hello"){
          message.channel.sendMessage("hello, How are you");
     }
});
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "i love you"){
         message.channel.sendMessage("i love you too");
}
})
//client.on("message", function(message){
    //if (message.author.equals(client.user))return;

  //  if (message.content == "L"){
    //     message.channel.sendMessage("Don't you L Them!!!");
   // }
//});

client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "stfu"){
         message.channel.sendMessage("you stfu");
    }
});
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "ugh"){
         message.channel.sendMessage("are you ok? Feel better <3 ");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "i love you more"){
         message.channel.sendMessage("fine, you win this time <3");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "good morning"){
         message.channel.sendMessage("Good Morning, did you sleep well?");
}
})
client.on("message", function(message){
    if (message.author.equals(client.user))return;

    if (message.content == "wyd"){
         message.channel.sendMessage("nothing much, wby?");
}
})
client.on("message", function(message){
if (message.content.startsWith('ping')) {
    message.channel.sendMessage('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');}
})
client.on("message", function(message){
if(message.content === "ayy") {
    message.reply("LMAO");
}

})

// this welcomes the new persons and give them an auto role


   client.on("guildMemberAdd", function(member ){
     member.guild.channels.find("name", "lobby").sendMessage(member.toString() + " Welcome to the server ");
    
   // member.addRole(member.guild.roles.find("name", "inactive"));
  });
    

// PREFIX "." fIRST cOMMand

     client.on("message", function(message){
         if (message.author.equals(client.user)) return;
          
        if (!message.content.startsWith(PREFIX)) return;

        if (message.content === "listemojis") {
            const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
            message.channel.send(emojiList);
          }
  
    var args = message.content.substring(PREFIX.length).split(" ");
    var command = args[0].toLowerCase(); // sets the command to lowercase (making it incase sensitive)
    var mutedrole = message.guild.roles.find("name", "muted");

    switch (args[0].toLowerCase()){
        case "info":
        message.channel.sendMessage(" Created By 'Currently' For Fun!!!" );
    break;
        case "8ball":
        if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else message.channel.sendMessage("Can't read that");
    break;
        case "help":
        var embed = new Discord.RichEmbed()
          .setTitle("**List of Commands**\n") // sets the title to List of Commands
          .addField(" - help", "Displays this message (Correct usage: .help)") // sets the first field to explain the command *help
        //  .addField("Commands That Are Available", "I love you, enjoy <3", true)
          .addField(" - info", "Tells info about myself :grin:") // sets the field information about the command *info
         
          .addField(" - Commands That Use Prefix ", ".8ball, .info, .help, .cookie") // sets the second field to explain the command *ping
       //   .addField("Commands List That Need Prefix: . ", " .8ball, .info, .help " , true)
          .addField(" - cookie", "Sends a cookie to the desired player! :cookie: (Correct usage: .cookie @username)") // sets the third field to explain the command *cookie
           .addField("Commands List", " hello , ugh, L, stfu, ping, i love you, .8ball, .info, There is more I Didnt Add" , true)
         // .addField("Music Commands", ".play, .skip, .stop, There is no queue command ATM...", true)
          .setColor(0xFFA500) // sets the color of the embed box to orange
          .setFooter("You need help, do you?") // sets the footer to "You need help, do you?"
          
          message.channel.send(embed);
     break;

        case "cookie":  // creates the command cookie
        if (args[1]) message.channel.send(message.author.toString() + " has given " + args[1].toString() + " a cookie! :cookie:") // sends the message saying someone has given someone else a cookie if someone mentions someone else
        else message.channel.send("Who do you want to send a cookie to? :cookie: (Correct usage: *cookie @username)") // sends the error message if no-one is mentioned
        break;

        case "roast":
        if (args[1]) message.channel.send(roasts[Math.floor(Math.random() * roasts.length)]);
        else message.channel.send("Can't read that");
    break;

        
   case "play":
     if (!args[1]){
         message.channel.send("please provide a link");
        return;
    }
    if(!message.member.voiceChannel) {
     message.channel.send("You must be in a voice channel");
      return; 
    }
    if(!servers[message.guild.id]) servers[message.guild.id] = {
       queue: [] };
        break;
        
   



    }

 
  


//LOOK INTO

 //spaced out from rest




   

});
client.login(TOKEN);


//love yourself

