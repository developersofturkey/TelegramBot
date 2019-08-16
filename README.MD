# Geliştirici Sohbetleri Telegram Botu

## Telegram Grubumuz Hakkında
Grubun amacı türkiyenin dört bir yanından geliştiricileri bir araya toplayarak, güncel teknolojiler üzerine yardımlaşma ve bilgi alışveri sağlamaktır.
[Telegram Davet Linki](https://t.me/gelistiricisohbetleri)

## Bu proje ne işe yarıyor ?
Birçok grup botlar tarafından yönetiliyor. Bizim grubumuzdaki botumuzu kendimiz yapalım dedik.

## Gereksinimler
Node.js (LTS Sürümü Tavsiye Edilir) => https://nodejs.org/en/

## Kurulum
```
$ git clone https://github.com/developersofturkey/TelegramBot # once repoyu cloneluyoruz
$ cd TelegramBot # daha sonra reponun bulundugu klasore giriyoruz
$ npm install # gereken node modulesleri kuruyoruz (Node.js gereklidir https://nodejs.org/en/ LTS surumunu indirmeniz tavsiye edilir...)
# node modullerinin kurulumu bittikten sonra .env.example'ı .env olarak kopyalayın ve API_TOKEN= kısmına telegram botunuzun token'ini yazın
$ npm run dev # botumuzu calistiriyoruz
```
## Coding (Fun part)
Herşeyden önce telegram ile haberleşmek için kullandığımız api linki: https://telegraf.js.org/

Bir modül (Event veya komut) oluşturmak için `/src/modules` klasörünün altına `<modul-ismi>.js` oluşturuyoruz. Dikkat etmemiz gereken tek nokta `<modul-ismi>.js` bot parametreli bir fonksiyon export etmek zorunda. (`<modul-ismi>` kısmına istediğiniz bir isim verebilirsiniz.)
```js
export default (bot) => { }
```

## Örnek
```js
// src/modules/send_hello_msg.js Yeni katılan üyeye mesaj gönder
export default (bot) => {
    bot.on('new_chat_members' , (ctx) => { // yeni bir üye gruba katıldığında
        var username = ctx.message.new_chat_member.first_name  // context'den kullanıcının adını alıyoruz
        ctx.replyWithHTML(`Hoşgeldin <b>${username}</b>, gruptaki diğer üyelere kendini kısaca tanıtır mısın ?`) //HTML markup ile kullanıcıya hoşgeldin mesajı gönderiyoruz.
    })
}
// Event Type'lara https://telegraf.js.org/#/?id=update-types burdan ulaşabilirsiniz
```
Session örneği
```js
import session from 'telegraf/session' // Telegraf kütüphanesinden session'u import ediyoruz
// Session'u bir veri deposu olarak görebilirsiniz.
// depolamak istediğimiz verileri session'a koyuyoruz veya oradan ulaşıyoruz
export default (bot) => {
    bot.use(session()) // Botumuza sessionu tanımlıyoruz
    bot.on('text', (ctx) => { // Her mesaj geldiğinde
        ctx.session.counter = ctx.session.counter || 0 // ctx.session.counter 'ı tanımlıyoruz
        ctx.session.counter++; // ctx.session.counter'ı 1 arttır
        return ctx.reply(`Message counter ${ctx.session.counter}`); // Ve son olarak mesaj kanalına yaz
    })
}
```
Daha fazla örnek eklenecektir.

## Contributions
Katkıda bulunmak isteyen herkes bize telegram grubu üzerinden ulaşabilir. Ek olarak pull requestlerde başımızın tacıdır :D