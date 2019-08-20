export default (bot) => {
    bot.on('new_chat_members', (ctx) => { // yeni bir üye gruba katıldığında
        var username = ctx.message.new_chat_member.first_name  // context'den kullanıcının adını alıyoruz
        console.log(ctx.message);
        var welcome_messages_first = [
            `Hoşgeldin <b>${username}</b>, `,
            `Açılın! <b>${username}</b> geldi, rica etsem`,
            `Kimler Kimler Gelmiş, Şeref Verdiniz <b>${username}</b>, bu arada`,
        ]

        var welcome_messages_second = [
            'gruptaki diğer üyelere kendini kısaca tanıtır mısın ?',
            'kendinden biraz bahseder misin ?',
            'hangi konulara ilgi duyuyorsun bizimle paylaşır mısın ?',
        ]

        var message = welcome_messages_first[Math.floor(Math.random() * welcome_messages_first.length)] + ' ' + welcome_messages_second[Math.floor(Math.random() * welcome_messages_second.length)];
        ctx.replyWithHTML(message) //HTML markup ile kullanıcıya hoşgeldin mesajı gönderiyoruz.
    })
}
// Event Type'lara https://telegraf.js.org/#/?id=update-types burdan ulaşabilirsiniz