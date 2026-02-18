import { z } from "zod";

export const quoteRequestSchema = z.object({
  name: z
    .string()
    .min(3, "Name is required")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z
    .email("Invalid email address")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email must be a valid email address",
    ),
  description: z
    .string()
    .min(10, "Description is required")
    .regex(
      /^[a-zA-Z0-9\s.,!?'"()-]+$/,
      "Description can only contain letters, numbers, and basic punctuation",
    ),

  date: z
    .string()
    .min(1, "Completion date is required")
    .refine((val) => {
      const selectedDate = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, "Completion date cannot be in the past"),
  budget: z
    .string()
    .min(1, "Budget is required")
    .regex(/^\d+$/, "Budget must be a number"),
  drive: z.string().url("Invalid URL").optional().or(z.literal("")),
  coupon: z.string().optional(),
  agree: z
    .boolean()
    .refine((val) => val === true, { message: "You must agree" }),
});

export type QuoteRequest = z.infer<typeof quoteRequestSchema>;
