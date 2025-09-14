const { cmd } = require('../command');
const moment = require('moment-timezone');
const { runtime } = require('../lib/functions');

cmd({
  pattern: "alive",
  alias: ["status", "botstatus"],
  desc: "Show bot status information",
  category: "system",
  react: "⚡",
  filename: __filename
}, async (Void, mek, m) => {
  try {
    const time = moment.tz('Africa/Nairobi').format('HH:mm:ss');
    const date = moment.tz('Africa/Nairobi').format('DD/MM/YYYY');
    const uptime = runtime(process.uptime());

    // Simple and clean status message
    const message = `
⚡ *ZEZE BOT STATUS* ⚡

🌍 Server Time: ${time}
📅 Date: ${date}
⏱️ Uptime: ${uptime}

🔧 Powered by MR ZEZE
`.trim();

    // Newsletter context info
    const contextInfo = {
      externalAdReply: {
        title: "ZEZE47-MD • BOT STATUS",
        body: `Online since ${uptime}`,
        thumbnailUrl: 'https://i.imgur.com/wZcGmu7.jpeg',
        sourceUrl: 'https://github.com/humphreymbise/ZEZE47-XMD',
        mediaType: 1,
        renderLargerThumbnail: true
      },
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "",
        newsletterName: "ZEZE47-MD",
        serverMessageId: 789
      }
    };

    await Void.sendMessage(
      m.chat, 
      {
        text: message,
        contextInfo: contextInfo
      },
      { 
        quoted: mek 
      }
    );

  } catch (error) {
    console.error('Alive command error:', error);
    await Void.sendMessage(
      m.chat, 
      { 
        text: '⚠️ Error showing status. Bot is still running!' 
      },
      { 
        quoted: mek 
      }
    );
  }
});
