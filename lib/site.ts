const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const siteUrl = new URL(configuredOrigin.endsWith("/") ? configuredOrigin : `${configuredOrigin}/`);
