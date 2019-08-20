import { evaluate as mathjseval } from 'mathjs'

export default (bot) => {
    bot.command('calculate', (ctx) => {
        try {
            var message = ctx.message.text
            var message = message.substring(message.indexOf('/') + 11);
            if (message.trim() != "") {
                ctx.telegram.sendMessage(ctx.message.chat.id,
                    `<code>${message}</code> <b>=</b> ${mathjseval(message)}`,
                    { parse_mode: 'HTML' })
            } else {
                throw Error();
            }
        } catch (e) {
            ctx.replyWithHTML("<code>/calculate 2+2</code> şeklinde kullanabilirsin.")
        };
    })
}