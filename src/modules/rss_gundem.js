import Parser from "rss-parser";
import striptags from 'striptags';

let rssSources = [
  "https://siberbulten.com/rss",
  "https://www.webtekno.com/rss.xml",
  "https://www.developer-tech.com/feed"
];

let parser = new Parser();

export default bot => {
  bot.command("bulten", ctx => {
    var source = rssSources[Math.floor(Math.random() * rssSources.length)];
    console.log(source);
    parser.parseURL(source, (err, feed) => {
      var haber = feed.items[0];
      let content = striptags(haber.content).substring(0,255) + "...";
      ctx.replyWithHTML(`<b>${haber.title}</b>\n${content} <a href="${haber.link}">Devamını Oku</a>`);
    });
  });
};
