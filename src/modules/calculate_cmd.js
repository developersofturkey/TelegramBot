import { evaluate as mathjseval } from 'mathjs'

export default (bot) => {
    bot.command('calculate', (ctx) => {
        try {
            console.log(ctx.message)
            var message = ctx.message.text.substring(message.indexOf('/') + 11);
            if (messae.trim() != "") {
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