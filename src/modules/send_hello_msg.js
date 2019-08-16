export default (bot) => {
    bot.on('new_chat_members' , (ctx) => {
        console.log(ctx.message);
    })
}