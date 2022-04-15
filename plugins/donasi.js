/**
 * TOLONG JANGAN GANTI GAMBARNYA,NOMORKU DAN SAWERIAKU
 * MENDING KALIAN TAMBAHIN NOMOR KALIAN
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@danielteodoro/baileys-md')
let handler = async (m) => {
let duit = `*───── 「 DONATE 」 ─────*
*alo om, jangan lupa donasi agar bot lebih berkembang ya om:v*
*mau donasi berapa pun saya bersyukur om:v*
*───── 「 PAYMENT 」 ─────*
• *Gopay:* 083152780646
• *Dana:* 083137411758
────────────────────
*hubungi owner jika sudah berdonasi*
http://wa.me/62831374117583?text=assalamualaikum+bang
────────────────────`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/5a7e42bc9c23bb3ee52ed.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [
              {
             quickReplyButton: {
               displayText: 'Owner',
               id: '.owner',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|bagiduit$/i

module.exports = handler
