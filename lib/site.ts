const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined)
  || (process.env.NODE_ENV === "production" ? "https://onek.nayaki.app" : "http://localhost:3000");

export const siteUrl = new URL(configuredOrigin.endsWith("/") ? configuredOrigin : `${configuredOrigin}/`);
