const { cmd } = require('../command');
const moment = require('moment-timezone');

cmd({
  pattern: "support",
  alias: ["supportgroup", "help", "channel"],
  desc: "Get ZEZE47-MD support, channel & developer contact",
  category: "system",
  filename: __filename,
}, async (Void, m, text) => {

  const jtime = moment.tz('Africa/Nairobi').format("HH:mm:ss");
  const jdate = moment.tz('Africa/Nairobi').format("DD/MM/YY");

  // 🧾 Fake Verified Contact
  const fakeContact = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast"
    },
    message: {
      contactMessage: {
        displayName: "ZEZE47-MD| ZEZE-XMD",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:PKDRILLER | PK-XMD\nORG:PKDRILLER;\nTEL;type=CELL;type=VOICE;waid=254700000000:+254 700 000000\nEND:VCARD`,
        jpegThumbnail: Buffer.alloc(0)
      }
    }
  };

  const contextInfo = {
    externalAdReply: {
      title: "📞 ZEZE47-MD • Support & Channel",
      body: `🕒 ${jtime} | 📅 ${jdate}`,
      thumbnailUrl: 'https://i.imgur.com/wZcGmu7.jpeg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true,
      showAdAttribution: true
    },
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "",
      newsletterName: "ZEZE47"
    }
  };

  const supportText = `*🛠️ ZEZE47-MD Support Center*\n\n╭─❍ *Support Links*\n│👥 Group: https://chat.whatsapp.com/CbY7YiuobJ1AlMJ8PviKpm?\n│📡 Channel:\n│📞 Dev: wa.me/255747397675 (ZEZETECH)\n╰───────────────╮\n\n📌 Feel free to ask for help, request features or report bugs.\n\n⏰ *Time:* ${jtime}\n📅 *Date:* ${jdate}\n\n*Powered by ZEZETECH*`;

  await Void.sendMessage(m.chat, {
    text: supportText,
    contextInfo
  }, { quoted: fakeContact });
});
