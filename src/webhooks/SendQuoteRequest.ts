import type { QuoteRequest } from '@/requests/QuoteRequestSchema';
/** Frontend-only delivery. VITE_ values are public in the client bundle. */
export async function sendQuoteRequest(data: QuoteRequest): Promise<Response> {
  const webhook = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
  if (!webhook) throw new Error('Discord webhook is not configured.');

  return fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    signal: AbortSignal.timeout(20000),
    body: JSON.stringify({
      allowed_mentions: { parse: [] },
      embeds: [{
        title: 'New studio inquiry',
        color: 2442219,
        description: data.description,
        fields: [
          { name: 'Creator', value: data.name },
          { name: 'Email', value: data.email },
          { name: 'Desired completion', value: data.date, inline: true },
          { name: 'Budget (USD)', value: data.budget, inline: true },
          ...(data.drive ? [{ name: 'References', value: data.drive }] : []),
          ...(data.coupon ? [{ name: 'Coupon', value: data.coupon }] : []),
        ],
      }],
    }),
  });
}
