require('dotenv').config()

import Telegraf from 'telegraf'
import path from 'path'
import fs from 'fs'


const bot = new Telegraf(process.env.API_TOKEN)

var normalizedPath = path.join(__dirname, "modules");

fs.readdirSync(normalizedPath).forEach((file) => {
    console.log(`Loading ${file}`)
    let module = require("./modules/" + file);
    module.default(bot)
});


// load modules

bot.launch()