/*Codded by Tahta Bot

Special Thanks:
Fazone
Sanzking
Dimasdm
Galuh
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('tagall');

Asena.addCommand({pattern: 'tagall', fromMe: true, deleteCommand: false, desc: Lang.TAGALL_DESC}, (async (message, match) => {
    grup = await message.client.groupMetadata(message.jid);
    var jids = [];
    mesaj = '';
    grup['participants'].map(
        async (uye) => {
            mesaj += '@' + uye.id.split('@')[0] + ' ';
            jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
        }
    );
    await message.client.sendMessage(message.jid,mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
}));
