import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.setting = {
 autoclear: false,
 addReply: true // buat with thumbnail di pesan
 }

global.owner = [
['212625457341', 'ahmed aligue', true]
]

global.info = {
 nomerbot: '212713542982',
 pairingNumber: '6282228545461',
 nameown: 'ahmed aligue',
 nomerown: '212625457341',
 packname: 'sticker by ',
 author: 'SENKU BOT',
 namebot: '乂 senku bot - MD',
 wm: 'SENKU  -  M D',
 stickpack: 'Whatsapp',
 stickauth: 'Bot - MD'
}

// Thumbnail 
global.url = {
 profil: 'https://i.ibb.co/3Fh9V6p/avatar-contact.png',
 did: 'https://telegra.ph/file/fdc1a8b08fe63520f4339.jpg',
 rules: 'https://telegra.ph/file/afcfa712bd09f4fcf027a.jpg',
 thumbnail: 'https://telegra.ph/file/07428fea2fd4dccaab65f.jpg',
 thumb: 'https://telegra.ph/file/89f925eaab0ab2d0f001a.jpg',
 logo: 'https://telegra.ph/file/07428fea2fd4dccaab65f.jpg',
 unReg: 'https://telegra.ph/file/ef02d1fdd59082d05f08d.jpg',
 registrasi: 'https://telegra.ph/file/0169f000c9ddc7c3315ff.jpg',
 confess: 'https://telegra.ph/file/03cabea082a122abfa5be.jpg',
 akses: 'https://telegra.ph/file/6c7b9ffbdfb0096e1db3e.jpg', 
 wel: 'https://telegra.ph/file/9dbc9c39084df8691ebdd.mp4', // gif welcome 
 bye: 'https://telegra.ph/file/1c05b8c019fa525567d01.mp4', // gif good bye
 sound: 'https://media.vocaroo.com/mp3/1awgSZYHXP3B' // untuk menu
}

// Sosmed
global.url = {
 sig: 'https://instagram.com',
 sgh:  'https://github.com',
 sgc: 'https://chat.whatsapp.com'
}

// Donasi
global.payment = {
 psaweria: 'https://saweria.co/tiooxy',
 ptrakterr: '-',
 pdana: '082285357346'
}
// Info Wait
global.msg = {
 wait: '⏱️ *انتظر*\n\> سيتم الارسال بعد قليل *User*!',
 eror: '🤖 *error*\n\> للاسف هناك خطا.'
}

global.multiplier = 69
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
      let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
}

// Apikey
global.api = {
 lol: 'GataDios'

}
global.APIs = {
  lol: "https://api.lolhumaan.xyz"
}

//Apikey
global.APIKeys = {
    "https://api.lolhumaan.xyz": "GataDios"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
