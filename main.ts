// main.ts
import { webhookCallback } from "https://deno.land/x/grammy@v1.36.3/mod.ts";
// You might modify this to the correct way to import your `Bot` object.
import bot from "./bot.ts";
import { deleteUserById } from "./delete_user.ts";

const userId = 682822411;  // User ID you want to delete

await deleteUserById(userId);

const handleUpdate = webhookCallback(bot, "std/http");

Deno.serve(async (req) => {
  if (req.method === "POST") {
    // Accept POSTs at the root path
    const url = new URL(req.url);
    if (url.pathname === "/") {
      try {
        return await handleUpdate(req);
      } catch (err) {
        console.error(err);
      }
    }
  }
  return new Response();

  
});