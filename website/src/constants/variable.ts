export const env = {
  app_id: process.env.GITHUB_APP_ID,
  client_id: process.env.GITHUB_CLIENT_ID,
  client_secret: process.env.GITHUB_CLIENT_SECRET,
  token: process.env.GITHUB_TOKEN,
} as const;
