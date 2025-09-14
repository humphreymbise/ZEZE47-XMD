const { cmd } = require('../command');
const moment = require('moment-timezone');

cmd({
  pattern: "uptime",
  alias: ["up"],
  desc: "Check how long the bot has been online.",
  category: "system",
  filename: __filename,
}, async (Void, m, text) => {
  const runtime = () => {
    let seconds = process.uptime();
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = Math.floor(seconds % 60);
    return `${hours}h ${minutes}m ${secs}s`;
  };

  const fakeContact = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast"
    },
    message: {
      contactMessage: {
        displayName: "ZEZETECH | ZEZE47-MD",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN: ZEZETECH | ZEZE47\nORG:PKDRILLER;\nTEL;type=CELL;type=VOICE;waid=255747397675:+255 747 397675\nEND:VCARD`,
        jpegThumbnail: Buffer.alloc(0)
      }
    }
  };

  const uptimeText = `*🤖 ZEZE47-MD Bot Uptime:*\n🕒 ${runtime()}\n\n💡 The bot has been running without interruption.`;

  await Void.sendMessage(m.chat, {
    text: uptimeText,
    contextInfo: {
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "",
        newsletterName: "ZEZE47-MD"
      },
      externalAdReply: {
        title: "PK-XMD",
        body: "Uptime Monitor by ZEZE47-MD",
        thumbnailUrl: "https://i.imgur.com/wZcGmu7.jpeg",
        mediaType: 1,
        renderLargerThumbnail: true,
        showAdAttribution: true,
        sourceUrl: "https://github.com/mejjar00254"
      }
    }
  }, { quoted: fakeContact });
});
