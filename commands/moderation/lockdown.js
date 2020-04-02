module.exports.run = (client, message, args, level, Discord) => {
  const { everyone } = message.guild.roles;
  const perms = new Discord.Permissions(everyone.permissions).remove('SEND_MESSAGES');
  everyone.setPermissions(perms)
    .then(() => {
      client.success(message.channel, 'Server Locked Down!', 'No one can send messages until the server is unlocked! To unlock the server, use \`.unlockdown\`.');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      const generalChat = guild.channels.cache.get('5152144834604433408');
      const acnhChat = guild.channels.cache.get('680106844420571174');
=======
      const generalChat = message.guild.channels.cache.get('538938170822230026');
      const acnhChat = message.guild.channels.cache.get('494376688877174785');
>>>>>>> devbranchpull/develop
=======
      const generalChat = guild.channels.cache.get('538938170822230026');
      const acnhChat = guild.channels.cache.get('494376688877174785');
>>>>>>> parent of 5a7f403... updated code from main branch/ launguage
=======
      const generalChat = guild.channels.cache.get('538938170822230026');
      const acnhChat = guild.channels.cache.get('494376688877174785');
>>>>>>> parent of 5a7f403... updated code from main branch/ launguage
      const msg = "**Raid Ongoing**!\nWe're sorry to inconvenience everyone, but we've restricted all message sending capabilities due to a suspected raid. Don't worry though, you'll be back to chatting about your favorite game in no time, yes yes!";
      generalChat.send(msg);
      acnhChat.send(msg);
    })
    .catch((error) => client.error(message.channel, 'Lock Down Failed!', `The server failed to be locked down because: \`${error}\``));
};

module.exports.conf = {
  guildOnly: true,
  aliases: ['l', 'ld', 'lock'],
  permLevel: 'Mod',
};

module.exports.help = {
  name: 'lockdown',
  category: 'moderation',
  description: 'Locks the server down. No one can send messages.',
  usage: 'lockdown',
  details: 'There are no arguments. The unlockdown command is used to open the server back up.',
};
