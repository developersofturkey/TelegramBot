import telebot # https://github.com/eternnoir/pyTelegramBotAPI
import config # config.py

bot = telebot.TeleBot(config.API_TOKEN)

@bot.message_handler(commands=['start', 'help'])
def send_welcome(message):
	bot.reply_to(message, "Howdy, how are you doing?")
