import { bot } from '../core/bot.js'
import { Composer, Markup } from 'telegraf'
import { selectLang, saveLang } from '../libs/lang.js'
const composer = new Composer()

composer.hears('Tilni tanlash / Выбор языка', async (ctx) => {
  await selectLang(ctx)
})

composer.hears('☸ Tilni tanlash', async (ctx) => {
  await selectLang(ctx)
})

composer.hears('☸ Выбор языка', async (ctx) => {
  await selectLang(ctx)
})

composer.hears("🇺🇿 O'zbek tili", async (ctx) => {
  await saveLang(ctx, 'UZB')
})

composer.hears('🇷🇺 Русский язык', async (ctx) => {
  await saveLang(ctx, 'RUS')
})

bot.use(composer.middleware())
