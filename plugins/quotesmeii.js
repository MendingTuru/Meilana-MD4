let fs = require('fs')
let handler = async (m, { conn }) => {
let anu = ` ─────〔 *Quotes Meii* 〕─────
${pickRandom(global.quotmei)}
`
conn.reply(m.chat, anu, m) 
}
handler.help = ['quotmei']
handler.tags = ['quotes']
handler.command = /^(quotmei)$/i
module.exports = handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

global.quotmei = [
    "_Kamu adalah ekspektasi yang tidak akan perna menjadi kenyataan._\n\n*Cr: Meii*",
    "_Zona terberat dalam perasaan adalah ketika aku harus berpura-pura menjadi teman, padahal aku mencintainya._\n\n*Cr: Meii*",
    "_Awal yang manis tidak membuktikan bahwa akhirnya akan manis, jadi jangan pernah berharap lebih jika diperlakukan manis di awal._\n\n*Cr: Meii*",
    "_Hanya sebatas mengagumi kalo memiliki aku sadar diri._\n\n*Cr: Meii*",
    "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
]
