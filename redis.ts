import { redis } from "bun";

await redis.set("message", "Bun is really fast");

const cachedData = await redis.get("message");

console.log(cachedData);
