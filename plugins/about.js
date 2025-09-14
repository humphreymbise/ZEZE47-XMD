const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["zeze","whois"], 
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭━━〔 ZEZE47-MD V4〕━━┈⊷*

*👋 HELLO ${pushname}*

*╰──────────────┈⊷*
*╭━━━〔 MY ABOUT 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *🌹WELCOME ZEZE47-MD BOT🌹*
*┃★│* *ᴄʀᴇᴀᴛᴇʀ : ZEZE47-MD*
*┃★│* *ʀᴇᴀʟ ɴᴀᴍᴇ : MR HUMPHREY47*
*┃★│* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ : ZEZETECH*
*┃★│* *ᴀɢᴇ : 18 ʏᴇᴀʀ*
*┃★│* *ᴄɪᴛʏ : ARUSHA*
*┃★│* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • SPECIAL THANKS FOR • ]*
*╭━━━〔 THANKS TO 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *▢ZEZE47-MD(OWNER)*
*┃★│* *▢FAITH(LOVER)*
*┃★│* *▢HILDER(FRIEND)*
*┃★│* *▢EVA(FRIEND)*
*┃★│* *▢RUHAMA(FRIEND)*
*┃★│* *▢ALONE(FRIEND)*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*

*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ZEZE47-MD 
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:`https://i.imgur.com/wZcGmu7.jpeg`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '',
      newsletterName: 'ZEZE-MD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
