import { z } from "zod";

export const quoteRequestSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.email("Invalid email address"),
  description: z.string().min(10, "Description is required"),
  date: z
    .string()
    .min(1, "Completion date is required")
    .refine((val) => {
      const selectedDate = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, "Completion date cannot be in the past"),
  budget: z.string().min(1, "Budget is required"),
  drive: z.string().url("Invalid URL").optional().or(z.literal("")),
  coupon: z.string().optional(),
  agree: z
    .boolean()
    .refine((val) => val === true, { message: "You must agree" }),
});

export type QuoteRequest = z.infer<typeof quoteRequestSchema>;
