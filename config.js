module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,
  DefaultPrefix: process.env.prefix , //Default prefix, Server Admins can change the prefix FOR MUSIC CMDS ONLY
  Port: 3000,
  SupportServer: "https://discord.gg/Fr9ervngxb", //Support Server Link
  Token: process.env.token,
  ClientID: process.env.Discord_ClientID,
  ClientSecret: process.env.Discord_ClientSecret,
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL

  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute",//no need to edit if using this lava.link
  IconURL:
    "",
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "",

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  


  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID,
    ClientSecret: process.env.Spotify_ClientSecret, //Spotify Client Secret
  },
};
