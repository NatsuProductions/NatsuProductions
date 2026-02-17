// You may want to use an environment variable for the webhook URL in production
const WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

import type { QuoteRequest } from "@/requests/QuoteRequestSchema";

/**
 * Sends a quote request to the configured Discord webhook.
 * @param data The quote request data
 */
export async function sendQuoteRequest(data: QuoteRequest): Promise<Response> {
  if (!WEBHOOK_URL) {
    throw new Error("Discord webhook URL is not set.");
  }

  // Format the message for Discord
  const content =
    `**New Quote Request**\n\n` +
    `**Name:** ${data.name}\n` +
    `**Email:** ${data.email}\n` +
    `**Description:** ${data.description}\n` +
    `**Desired Completion Date:** ${data.date}\n` +
    `**Budget:** ${data.budget}\n` +
    (data.drive ? `**Drive Link:** ${data.drive}\n` : "") +
    (data.coupon ? `**Coupon Code:** ${data.coupon}\n` : "");

  return fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });
}
