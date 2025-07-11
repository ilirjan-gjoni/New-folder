export async function deleteUserById(userId: number) {

  const kv = await Deno.openKv();

  await kv.delete(["telegram_users", userId]);

  console.log(`✅ User ${userId} deleted from KV database.`);
}





