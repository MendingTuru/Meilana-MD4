let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/be35f3f279c9af2d607e8.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '6285929970260@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *•SEWA BOT & UP TO PREMIUM•*
        
_*👤Grup / 30 Hari*_
_*✔️Rp. 15.000 Dana*_
_*✔️Rp. 15.000 Pulsa MyXL*_

_*👤Premium / 30 Hari*_
_*✔️Rp. 10.000 Dana*_
_*✔️Rp. 10.000 Pulsa MyXL*_

_*👥Premium + Grup / 30 Hari*_
_*✔️Rp. 20.000 Dana*_
_*✔️Rp. 20.000 Pulsa MyXL*_

wa.me/${owner[0]}
*Bukan Bot!!!*
*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `6285929970260@s.whatsapp.net`
  },
  footerText: 'https://MendingTuru.github.io',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa|premium)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
