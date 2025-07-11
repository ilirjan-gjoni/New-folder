import { InlineKeyboard, Context } from "https://deno.land/x/grammy/mod.ts";

bot.command("deleteuser", async (ctx) => {
  const kv = await Deno.openKv();
  const userId = 682822411;  // The user ID you want to delete
  
  const result = await kv.delete(["telegram_users", userId]);
  
  if (result) {
    await ctx.reply(`User ${userId} deleted successfully.`);
  } else {
    await ctx.reply(`Failed to delete user ${userId}.`);
  }
});
