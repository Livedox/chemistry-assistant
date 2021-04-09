let path = "http://localhost:3000";
if (process.env.VERCEL_URL) server = path.env.VERCEL_URL;
if (process.env.NODE_ENV === "production") path = "https://chemistry-assistant.ru/";


export const server = path;