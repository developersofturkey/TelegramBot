import telebot # https://github.com/eternnoir/pyTelegramBotAPI
import config # config.py
from functions import only_group_filter

bot = telebot.TeleBot(config.API_TOKEN)

@bot.message_handler(content_types=['new_chat_members'])
def send_message_new_member(message):
	user_firstname = message.new_chat_member.first_name
	bot.reply_to(message, "Hoşgeldin <b>{}</b>, gruptaki diğer üyelere kendini kısaca tanıtır mısın ?".format(user_firstname), parse_mode="HTML")


@bot.message_handler(content_types=['left_chat_member'])
def send_message_new_member(message):
	user_firstname = message.left_chat_member.first_name
	bot.reply_to(message, "Görüşürüz <b>{}</b>, seni tanımak güzeldi !".format(user_firstname), parse_mode="HTML")


bot.polling()