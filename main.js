const tmi = require('tmi.js');
const fs = require('fs')
const {username, password, channels} = require('./config.json');

// Define configuration options
const opts = {
  identity: {
    username: username,
    password: password
  },
  channels: channels
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

function timestamp(){
  var datec = new Date();
  var stamp = ('('+datec.getHours()+':'+datec.getMinutes()+':'+ datec.getSeconds()+')');
  return stamp;
}

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot
  fs.appendFile((target + '.txt'), (timestamp() + ' ' + context.username + ': ' + msg + '\n'), function(err) {if (err) throw err});
  return;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
  console.log(`* Logging channels ` + channels);
}