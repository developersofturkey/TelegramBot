'use strict';

var _telegraf = require('telegraf');

var _telegraf2 = _interopRequireDefault(_telegraf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const Telegraf = require('telegraf')
require('dotenv').config();


var bot = new _telegraf2.default(process.env.API_TOKEN);
bot.start(function (ctx) {
  return ctx.reply('Welcome');
});
bot.help(function (ctx) {
  return ctx.reply('Send me a sticker');
});
bot.on('sticker', function (ctx) {
  return ctx.reply('👍');
});
bot.hears('hi', function (ctx) {
  return ctx.reply('Hey there');
});
bot.launch();