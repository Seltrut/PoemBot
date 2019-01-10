"use strict";
const Discord = require("discord.js");
const Haiku = require("./poemTypes/Haiku.js")
let syllable = require('syllable');
const client = new Discord.Client();

client.login("NTMwMTAwNzk0NDQ4Njc0ODUz.DxhKTg.SF4M578rlA5o1ycy6xnJylH_n4k");
let messages = [];
let capacity = 10;

client.on("message", (message) => {
    // if(message.content == "ping"){
    //     message.channel.send("pong");
    // }
    if( messages.length < capacity){
        let content = message.content;
        messages.push(content);
        console.log("messsages: " + messages.length)
        console.log(content)
        console.log(syllable(content))
    } else {
        let poem = new Haiku(messages);
        message.channel.send(poem.output());
        messages = [];
    }
});