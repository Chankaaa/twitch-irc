# twitch-irc
Basic Twitch IRC client written in Node.JS

Current iteration is a very simple chat logging client. This is just a small side project as an exercise.

## Getting Started:
#### Dependencies:
The only dependency for twitch-irc is [tmi.js](https://github.com/tmijs/tmi.js), the Javascript API for Twitch Chat.

```npm install tmi.js```
#### Configuring the program
Edit ```config.json``` to configure the program. The username should be your Twitch username, and the password is the account's OAuth token. It can be generated [here](https://twitchapps.com/tmi/). Multiple channels can be logged at once, with each being seperated as shown below.

```
{
    "username": "your twitch username here",
    "password": "oath token here",
    "channels": ["twitch", "twitchpresents"]
}
```
#### Starting the program
Twitch-irc can be started using:
```node main.js```

### Current features:
- Multi-channel chat logging

### Planned Features:
- Automatic config generation

- A proper CLI

###### Far far future features which will likely never to be:
- Web client
