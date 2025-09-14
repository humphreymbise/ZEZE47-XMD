const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

cmd({
    pattern: "support",
    alias : "version1",
    desc: " allmenu",
    category: "allmenu",
    react: "🫅",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let dec = `    
⟣──────────────────⟢
▧ *ᴄʀᴇᴀᴛᴏʀ* : *MR HUMPHREY47(🇹🇿)*
▧ *ᴍᴏᴅᴇ* : *${config.MODE}*
▧ *ᴘʀᴇғɪx* : *${config.PREFIX}*
▧ *ʀᴀᴍ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
▧ *ᴠᴇʀsɪᴏɴ* : *V.5* ⚡
▧ *ᴜᴘᴛɪᴍᴇ* : ${runtime(process.uptime())}

⟣──────────────────⟢

> ZEZE47-MD-V4

⟣──────────────────⟢
${readMore}
\`CHANNEL🛠️\`


\`GROUP\` 👥



\`ZEZE TECH\` *Dev🧑‍💻*

wa.me/+255747397675?text=Support!

⟣──────────────────⟢

`;

await conn.sendMessage(
            from,
            {
                image: { url: `https://i.imgur.com/wZcGmu7.jpeg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'ZEZE TECH',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/a1sh4u.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
