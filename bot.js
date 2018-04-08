const Discord = require('discord.js');
const client = new Discord.Client();
var settings = {
	muted: false
};

client.on("ready", function () {
	console.log("Ready to begin! Serving in " + client.channels.length + " channels");
});

// This code will run once the client has disconnected from Discord.
client.on("disconnected", function () {
	// alert the console
	console.log("Disconnected!");

	// exit node.js with an error
	process.exit(1);
});

// This code will run once the client receives any message.
client.on("message", function (msg) {
	// if message begins with "ping"
	if (msg.content.indexOf("ping") === 0) {
		// send a message to the channel the ping message was sent in.
		client.sendMessage(msg.channel, "pong!");

		// alert the console
		console.log("pong-ed " + msg.author.username);
	}
});

client.login(process.env.BOT_TOKEN);
