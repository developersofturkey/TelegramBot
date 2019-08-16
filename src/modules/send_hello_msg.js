export default (bot) => {
    bot.on('new_chat_members' , (ctx) => { // yeni bir üye gruba katıldığında
        var username = ctx.message.new_chat_member.first_name  // context'den kullanıcının adını alıyoruz
        ctx.replyWithHTML(`Hoşgeldin <b>${username}</b>, gruptaki diğer üyelere kendini kısaca tanıtır mısın ?`) //HTML markup ile kullanıcıya hoşgeldin mesajı gönderiyoruz.
    })
}
// Event Type'lara https://telegraf.js.org/#/?id=update-types burdan ulaşabilirsiniz