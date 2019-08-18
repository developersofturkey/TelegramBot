export default (bot) => {
    bot.on('left_chat_member', (ctx) => {
        ctx.deleteMessage();
    })
}