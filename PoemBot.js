const Discord = require("discord.js");
const Haiku = require("./haiku.js")
const client = new Discord.Client();

client.login("");
let messages = [];
let capacity = 200;
let poem;

client.on("message", (message) => {
    messages.push(message);
    if( messages.length >= capacity ){
        poem = new Haiku(messages);
        message.channel.send(poem.output());
        this.message = [];
    }
});