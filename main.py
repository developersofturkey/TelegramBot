import telebot # https://github.com/eternnoir/pyTelegramBotAPI
import config # config.py
from functions import only_group_filter

bot = telebot.TeleBot(config.API_TOKEN)

@bot.message_handler(func=only_group_filter ,commands=['start', 'help'])
def send_welcome(message):
	bot.reply_to(message, "Howdy, how are you doing?")


bot.polling()