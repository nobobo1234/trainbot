const { Listener } = require('discord-akairo');

class MessageInvalidListener extends Listener {
    constructor() {
        super('messageInvalid', {
            category: 'commandHandler',
            emitter: 'commandHandler',
            event: 'messageInvalid',
        });
    }

    async exec(message) {
        if (message.guild && message.util.parsed.prefix) {
            if (!message.util.parsed.alias || !message.util.parsed.afterPrefix) return;
            await message.channel.send(`:x: Sorry, the command ${message.util.parsed.afterPrefix} isn't found.`);
        }
    }
}

module.exports = MessageInvalidListener;
