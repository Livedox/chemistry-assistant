let path = "http://localhost:3000";
if (process.env.NODE_ENV === "production") path = "https://chemistry-assistant.ru";
if (process.env.VERCEL_URL) path = "https://"+process.env.VERCEL_URL;

export const server = path;