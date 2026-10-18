import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowUpRight, CheckCircle2, LoaderCircle } from 'lucide-react';
import { quoteRequestSchema, type QuoteRequest } from '@/requests/QuoteRequestSchema';
import { sendQuoteRequest } from '@/webhooks/SendQuoteRequest';

export default function InquiryForm({ standalone = false }: { standalone?: boolean }) {
  const [params] = useSearchParams();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const submitting = useRef(false);
  const successPanel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (status === 'success') {
      successPanel.current?.focus({ preventScroll: true });
      successPanel.current?.scrollIntoView({ block: 'center', behavior: 'instant' });
    }
  }, [status]);
  const form = useForm<QuoteRequest>({ resolver: zodResolver(quoteRequestSchema), defaultValues: { name: '', email: '', description: params.get('service') ? `I'm interested in ${params.get('service')}. ` : '', date: '', budget: '', drive: '', coupon: '', agree: false } });
  const { errors, isSubmitting } = form.formState;
  async function submit(values: QuoteRequest) {
    if (submitting.current) return;
    submitting.current = true;
    setStatus('idle');
    try {
      const response = await sendQuoteRequest(values);
      // Discord can acknowledge delivery with 204 No Content.
      if (!response.ok) throw new Error('Submission failed');
      setStatus('success'); form.reset();
    } catch { setStatus('error'); }
    finally { submitting.current = false; }
  }
  const fields = [
    { name: 'name', label: 'Your name / creator alias', type: 'text', placeholder: 'What should we call you?', complete: 'name', required: true },
    { name: 'email', label: 'Email address', type: 'email', placeholder: 'you@example.com', complete: 'email', required: true },
    { name: 'date', label: 'Desired completion date', type: 'date', placeholder: '', required: true },
    { name: 'budget', label: 'Estimated budget (USD)', type: 'text', placeholder: 'e.g. 700', required: true },
    { name: 'drive', label: 'References / shared folder', type: 'url', placeholder: 'https://', required: false },
    { name: 'coupon', label: 'Coupon code', type: 'text', placeholder: 'If you have one', required: false },
  ] as const;
  const Heading = standalone ? 'h1' : 'h2';
  return <section className={`studio-section inquiry-section ${standalone ? 'inquiry-standalone' : ''}`} id="inquiry"><div className="shell inquiry-layout">
    <div className="inquiry-intro"><p className="eyebrow">06 / Your next release starts here</p><Heading>Got a track?<br />Let's give it<br /><span>a world.</span></Heading><p>Tell us what you're imagining. We'll start with a conversation about your sound, your story, and what comes next.</p><div className="inquiry-note"><span className="mono">THE FIRST STEP</span><p>No perfect brief needed. A rough idea, a few references, and your music are a great place to start.</p></div><ArrowUpRight className="inquiry-arrow" size={110} strokeWidth={.8} aria-hidden="true" /></div>
    <div className="inquiry-panel">{status === 'success' ? <div ref={successPanel} tabIndex={-1} className="form-success" role="status"><CheckCircle2 size={44} /><h3>Your brief is in.</h3><p>Thank you for sharing your project. The studio will follow up using the email address you provided.</p><button type="button" className="studio-button" onClick={() => setStatus('idle')}>Send another inquiry <ArrowUpRight size={18} /></button></div> : <form onSubmit={form.handleSubmit(submit)} noValidate aria-busy={isSubmitting}>
      <div className="form-heading"><h3>Tell us about your project</h3><p>Required fields are marked with an asterisk.</p></div>
      <fieldset disabled={isSubmitting} className="inquiry-fields"><legend className="sr-only">Project details</legend>{fields.map(field => <div className="form-field" key={field.name}><label htmlFor={`inquiry-${field.name}`}>{field.label}{field.required ? ' *' : ' (optional)'}</label><input id={`inquiry-${field.name}`} type={field.type} placeholder={field.placeholder} autoComplete={'complete' in field ? field.complete : undefined} inputMode={field.name === 'budget' ? 'decimal' : undefined} aria-required={field.required} aria-invalid={!!errors[field.name]} aria-describedby={errors[field.name] ? `error-${field.name}` : undefined} {...form.register(field.name)} />{errors[field.name] && <p id={`error-${field.name}`} className="field-error">{errors[field.name]?.message}</p>}</div>)}
      <div className="form-field form-wide"><label htmlFor="inquiry-description">The vision *</label><textarea id="inquiry-description" rows={5} placeholder="Tell us about the song, the mood, your release plans, and anything you'd love to see." maxLength={2000} aria-required="true" aria-invalid={!!errors.description} aria-describedby={errors.description ? 'error-description' : undefined} {...form.register('description')} />{errors.description && <p id="error-description" className="field-error">{errors.description.message}</p>}</div>
      <div className="form-wide consent-field"><label><input type="checkbox" aria-invalid={!!errors.agree} aria-describedby={errors.agree ? 'error-agree' : undefined} {...form.register('agree')} /><span>I agree to the <Link to="/terms-of-service" target="_blank" rel="noreferrer">Terms of Service</Link> and <Link to="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</Link>. *</span></label>{errors.agree && <p id="error-agree" className="field-error">{errors.agree.message}</p>}</div></fieldset>
      {status === 'error' && <p className="submission-error" role="alert">We couldn't confirm delivery. Your details are still here. Please try again shortly.</p>}
      <button className="studio-button form-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? <><LoaderCircle size={18} className="loading-icon" /> Sending your brief…</> : <>Send my project brief <ArrowUpRight size={20} /></>}</button><p className="form-footnote">Your inquiry helps us prepare a quote. It does not confirm a booking.</p>
    </form>}</div>
  </div></section>;
}
