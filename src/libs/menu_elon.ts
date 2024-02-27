import { Markup, Context } from 'telegraf';

export async function menu_elon_uzb(ctx: Context) {
    await ctx.reply(`"Yangi e'lonni qo'shish" tugmasini bosing`, {
        parse_mode: 'HTML',
        ...Markup.keyboard([
            ["🆕 Yangi e'lonni qo'shish"],
        ])
            .oneTime()
            .resize()
    });
}

export async function menu_elon_rus(ctx: Context) {
    await ctx.reply('<b>Добавить новое объявление</b> 👇', {
        parse_mode: 'HTML',
        ...Markup.keyboard([
            ['🆕 Добавить новое объявление'],
        ])
            .oneTime()
            .resize()
    });
}
