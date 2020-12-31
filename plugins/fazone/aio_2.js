/*Codded by Tahta Bot

Special Thanks:
Fazone
Sanzking
Dimasdm
Galuh
*/

const Asena = require("../events");
const {MessageType} = require("@adiwajshing/baileys");
const got = require("got");

Asena.addCommand({pattern: 'harta ?(.*)', fromMe: false, remoteJid: true, deleteCommand: false}, (async (message, match) => {
	if (match[1] === '') return await message.sendMessage(Lang.NEED_WORDS); {
		try{            
				var respo = got(`https://api.vhtear.com/hartatahta?text=${match[1]}&apikey=fzntea2020full`);
				var stream = respo.buffer();
				stream.then(async (image) => {
                		await message.sendMessage(image, MessageType.image, {quoted: message.data, caption: 'Ini Kak :v'});
            });
        } catch (err) {
            await message.reply(`Error :\n${err.message}`, MessageType.text)
        }
		}
}));

Asena.addCommand({pattern: 'lop ?(.*)', fromMe: false, remoteJid: true, deleteCommand: false}, (async (message, match) => {
	if (match[1] === '') return await message.sendMessage(Lang.NEED_WORDS); {
		try{            
				var respo = got(`https://api.vhtear.com/lovemessagetext?text=${match[1]}&apikey=fzntea2020full`);
				var stream = respo.buffer();
				stream.then(async (image) => {
                		await message.sendMessage(image, MessageType.image, {quoted: message.data, caption: 'Ini Kak :v'});
            });
        } catch (err) {
            await message.reply(`Error :\n${err.message}`, MessageType.text)
        }
		}
}));

Asena.addCommand({pattern: 'romantis ?(.*)', fromMe: false, remoteJid: true, deleteCommand: false}, (async (message, match) => {
	if (match[1] === '') return await message.sendMessage(Lang.NEED_WORDS); {
		try{            
				var respo = got(`https://api.vhtear.com/romancetext?text=${match[1]}&apikey=fzntea2020full`);
				var stream = respo.buffer();
				stream.then(async (image) => {
                		await message.sendMessage(image, MessageType.image, {quoted: message.data, caption: 'Ini Kak :v'});
            });
        } catch (err) {
            await message.reply(`Error :\n${err.message}`, MessageType.text)
        }
		}
}));

Asena.addCommand({pattern: 'glowing ?(.*)', fromMe: false, remoteJid: true, deleteCommand: false}, (async (message, match) => {
	if (match[1] === '') return await message.sendMessage(Lang.NEED_WORDS); {
		try{            
				var respo = got(`https://api.vhtear.com/glowtext?text=${match[1]}&apikey=fzntea2020full`);
				var stream = respo.buffer();
				stream.then(async (image) => {
                		await message.sendMessage(image, MessageType.image, {quoted: message.data, caption: 'Ini Kak :v'});
            });
        } catch (err) {
            await message.reply(`Error :\n${err.message}`, MessageType.text)
        }
		}
}));