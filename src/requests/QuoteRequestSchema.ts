import { z } from 'zod';
export const quoteRequestSchema = z.object({
  name: z.string().trim().min(2, 'Enter your name or creator alias.').max(100),
  email: z.email('Enter a valid email address.').max(200),
  description: z.string().trim().min(20, 'Tell us a little more (at least 20 characters).').max(2000),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Choose a desired date.').refine(value => {
    const date = new Date(`${value}T23:59:59Z`);
    return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value && value >= new Date().toISOString().slice(0, 10);
  }, 'Choose today or a future date.'),
  budget: z.string().trim().regex(/^\d+(\.\d{1,2})?$/, 'Enter your budget in USD.').max(12).refine(value => Number(value) > 0, 'Enter a budget greater than zero.'),
  drive: z.string().trim().max(500).refine(value => {
    if (!value) return true;
    try { return ['https:', 'http:'].includes(new URL(value).protocol); } catch { return false; }
  }, 'Enter a valid http:// or https:// reference link.').optional(),
  coupon: z.string().trim().max(60).optional(),
  agree: z.boolean().refine(value => value, 'Please agree to the terms and privacy policy.'),
});
export type QuoteRequest = z.infer<typeof quoteRequestSchema>;
