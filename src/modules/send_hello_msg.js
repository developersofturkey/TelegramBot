export default (bot) => {
    bot.on('new_chat_members' , (ctx) => {
        var username = ctx.message.new_chat_member.first_name
        ctx.replyWithHTML(`Hoşgeldin <b>${username}</b>, gruptaki diğer üyelere kendini kısaca tanıtır mısın ?`)
    })
}