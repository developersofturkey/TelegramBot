export default (bot) => {
    bot.on('left_chat_member' , (ctx) => {
        var username = ctx.message.left_chat_member.first_name;
        ctx.replyWithHTML(`Görüşürüz <b>${username}</b>, seni tanımak güzeldi !`)
    })
}