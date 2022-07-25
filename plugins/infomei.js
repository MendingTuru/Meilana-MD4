let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Meilana
│ ✎ _Sekolah_ : Sudah Lulus
│ ✎ _Umur_ : 18th
│ ✎ _Asal_ : Tanggerang-Banten
│ ✎ _Status_ : Cewenya Pangeran
│ ✎ _Youtube_ :
│    https://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ
│ ✎ _Instagram_ : 
│    instagram.com/kokopangeran_
│ ✎ _Instagram_ : 
│    instagram.com/
│ ✎ _WhatsApp_ :
│    wa.me/6283844508188
╰───────────────────
`.trim(), m)
}

handler.help = ['infomei']
handler.tags = ['main', 'utama']
handler.command = /^(infomei)$/i

handler.exp = 150

module.exports = handler
