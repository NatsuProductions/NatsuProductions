import { Link } from "react-router-dom";
import { CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { QUOTE_FORM_FIELDS } from "@/data/QuoteFormFields";
import { sendQuoteRequest } from "@/webhooks/SendQuoteRequest";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import {
  quoteRequestSchema,
  type QuoteRequest,
} from "@/requests/QuoteRequestSchema";
// Define which fields are mandatory to display the asterisk
// const REQUIRED_FIELDS = ["name", "email", "description", "date", "budget"];

export default function QuoteForm() {
  const form = useForm<QuoteRequest>({
    resolver: zodResolver(quoteRequestSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      description: "",
      date: "",
      budget: "",
      drive: "",
      coupon: "",
      agree: false,
    },
  });

  function onSubmit(data: QuoteRequest) {
    console.log(data);
    sendQuoteRequest(data)
      .then((response) => {
        if (response.ok) {
          alert("Quote request submitted successfully!");
        } else {
          alert("Failed to submit quote request.");
        }
      })
      .catch((error) => {
        console.error("Error submitting quote request:", error);
        alert("An error occurred while submitting the quote request.");
      });
  }

  // Helper to determine if a field should be full width or half width on desktop
  const getColSpan = (fieldName: string) => {
    if (["description", "drive", "agree", "coupon"].includes(fieldName)) {
      return "col-span-1 md:col-span-2";
    }
    return "col-span-1";
  };

  return (
    <section className="min-h-screen py-24 px-4 md:px-6 bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Start Your Project
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Tell us about your vision and we'll get back to you with a quote.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {QUOTE_FORM_FIELDS.map((fieldData) => {
              const fieldKey = fieldData.name as keyof QuoteRequest;
              const error = form.formState.errors[fieldKey];
              const colSpan = getColSpan(fieldData.name);
              const isRequired = fieldData.required;

              return (
                <Field
                  key={fieldData.name}
                  className={`flex flex-col gap-2 ${colSpan}`}
                >
                  {fieldData.type === "checkbox" ? (
                    /* --- CHECKBOX (Full Width, stylized) --- */
                    <div className="mt-2 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800">
                      <div className="flex items-start gap-3">
                        <Controller
                          name={fieldKey}
                          control={form.control}
                          render={({ field }) => (
                            <Checkbox
                              id={fieldData.name}
                              checked={!!field.value}
                              onCheckedChange={field.onChange}
                              className="mt-1 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                            />
                          )}
                        />
                        <div className="space-y-1">
                          <FieldLabel
                            htmlFor={fieldData.name}
                            className="font-medium text-slate-900 dark:text-slate-100 cursor-pointer m-0"
                          >
                            {fieldData.label}
                            <span className="text-red-500 ml-1">*</span>
                          </FieldLabel>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            By checking this box, you agree to our{" "}
                            <Link
                              to="/terms-of-service"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                              to="/privacy-policy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              Privacy Policy
                            </Link>
                            .
                          </p>
                        </div>
                      </div>
                      {error && (
                        <FieldError className="text-red-500 text-sm mt-2 ml-7">
                          {error.message}
                        </FieldError>
                      )}
                    </div>
                  ) : (
                    /* --- STANDARD INPUTS --- */
                    <>
                      <FieldLabel
                        htmlFor={fieldData.name}
                        className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1"
                      >
                        {fieldData.label}
                        {isRequired && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </FieldLabel>

                      <FieldContent>
                        {fieldData.type === "textarea" ? (
                          <Textarea
                            id={fieldData.name}
                            {...form.register(fieldKey)}
                            placeholder={fieldData.placeholder}
                            className={`min-h-[120px] resize-y bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 transition-all duration-200 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-blue-500/20 ${
                              error
                                ? "border-red-500 focus-visible:ring-red-200"
                                : ""
                            }`}
                          />
                        ) : (
                          <div className="relative">
                            <Input
                              id={fieldData.name}
                              type={fieldData.type}
                              {...form.register(fieldKey)}
                              placeholder={fieldData.placeholder}
                              className={`h-11 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 transition-all duration-200 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-blue-500/20 ${
                                error
                                  ? "border-red-500 focus-visible:ring-red-200"
                                  : ""
                              }`}
                            />
                            {fieldData.type === "date" && (
                              <CalendarIcon className="absolute right-3 top-3 h-5 w-5 text-slate-400 pointer-events-none" />
                            )}
                          </div>
                        )}
                      </FieldContent>

                      {error && (
                        <FieldError className="text-red-500 text-xs font-medium ml-1 animate-in slide-in-from-top-1">
                          {error.message}
                        </FieldError>
                      )}
                    </>
                  )}
                </Field>
              );
            })}

            {/* --- SUBMIT BUTTON --- */}
            <div className="col-span-1 md:col-span-2 pt-4">
              <Button
                type="submit"
                size="lg"
                className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={!form.watch("agree")}
              >
                Send Quote Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
