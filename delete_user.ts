const kv = await Deno.openKv();

// The user ID to delete
const userId = 682822411;

// Delete the user from KV
await kv.delete(["telegram_users", userId]);

console.log(`✅ User ${userId} deleted from KV database.`);
