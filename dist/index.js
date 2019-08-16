'use strict';

var _telegraf = require('telegraf');

var _telegraf2 = _interopRequireDefault(_telegraf);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var bot = new _telegraf2.default(process.env.API_TOKEN);

var normalizedPath = _path2.default.join(__dirname, "modules");

_fs2.default.readdirSync(normalizedPath).forEach(function (file) {
    console.log('Loading ' + file);
    var module = require("./modules/" + file);
    module.default(bot);
});

// load modules

bot.launch();