import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, ArrowRight, Play, Plus, Check, AudioLines, MoveUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { PROJECTS } from '@/data/Projects';
import { SERVICES, QUICK_REQUEST_SERVICES } from '@/data/Services';
import { faqs, processSteps, testimonials } from './content';
import InquiryForm from '@/features/inquiry/InquiryForm';
import logoMark from '@/assets/logo_icon_black.png';

function SectionTitle({ number, label, title, description }: { number: string; label: string; title: string; description?: string }) {
  return <div className="section-title"><p className="eyebrow">{number} / {label}</p><div><h2>{title}</h2>{description && <p className="section-description">{description}</p>}</div></div>;
}

function Hero() {
  const reduced = useReducedMotion();
  return <section className="studio-hero" aria-labelledby="hero-title">
    <div className="shell hero-grid">
      <motion.div className="hero-copy" initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
        <p className="eyebrow"><span className="signal-dot" /> Independent motion & music video studio</p>
        <h1 id="hero-title">Your sound.<br />A whole<br /><span>new world.</span><span className="hero-star" aria-hidden="true">✳</span></h1>
        <p className="hero-description">Music videos that feel like <em>you.</em> We turn tracks into visual worlds for VTubers, Utaites, and the next wave of independent artists.</p>
        <div className="button-row"><Link className="studio-button" to="/#inquiry">Let's make your music move <ArrowUpRight size={20} /></Link><a className="hero-secondary" href="#work">Watch our work <ArrowDown size={17} /></a></div>
      </motion.div>
      <div className="hero-art" aria-hidden="true">
        <div className="art-top mono"><span>NATSU / VISUAL LAB</span><span>01—∞</span></div>
        <div className="art-grid" />
        <motion.div className="orbit orbit-one" animate={reduced ? {} : { rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} />
        <motion.div className="orbit orbit-two" animate={reduced ? {} : { rotate: -360 }} transition={{ duration: 52, repeat: Infinity, ease: 'linear' }} />
        <motion.div className="art-logo" animate={reduced ? {} : { y: [0, -14, 0], rotate: [-5, 3, -5] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}><img src={logoMark} alt="" /></motion.div>
        <span className="art-cross cross-one">+</span><span className="art-cross cross-two">+</span>
        <div className="art-caption"><span className="mono">SOUND INTO SIGHT</span><AudioLines size={38} strokeWidth={1.2} /></div>
        <div className="art-sticker mono">Frame by frame.<br />Feeling by feeling. ↗</div>
      </div>
    </div>
    <div className="hero-bottom shell"><p className="mono">Based in the Philippines. Connected worldwide.</p><p className="mono">Scroll to explore <ArrowDown size={14} /></p></div>
    <div className="discipline-strip" aria-label="Our disciplines"><span>Music videos</span><span aria-hidden="true">✳</span><span>Motion graphics</span><span aria-hidden="true">✳</span><span>Visual storytelling</span><span aria-hidden="true">✳</span><span>Creative direction</span></div>
  </section>;
}

function Work() {
  const [playing, setPlaying] = useState<number | null>(null);
  return <section className="studio-section work-section" id="work"><div className="shell">
    <SectionTitle number="01" label="Selected work" title="Press play. Feel something." description="Different sounds. Distinct worlds. A selection of music videos brought to life by Natsu Productions." />
    <div className="work-grid">{PROJECTS.map((project, index) => {
      const videoId = project.videoUrl.split('/').pop();
      return <article className={`work-card ${index === 0 ? 'work-featured' : ''}`} key={project.id}>
        <div className="work-media">{playing === project.id ? <iframe src={`${project.videoUrl}?autoplay=1&rel=0`} title={project.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /> : <button type="button" onClick={() => setPlaying(project.id)} aria-label={`Play ${project.title}`}><img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="" loading="lazy" /><span className="play-control"><Play size={22} fill="currentColor" /></span><span className="work-type mono">Music video / {String(index + 1).padStart(2, '0')}</span></button>}</div>
        <div className="work-caption"><h3>{project.title}</h3><a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on YouTube`}><ArrowUpRight size={21} /></a></div>
      </article>;
    })}</div>
  </div></section>;
}

function Services() {
  const [mode, setMode] = useState<'studio' | 'quick'>('studio');
  const plans = mode === 'studio' ? SERVICES : QUICK_REQUEST_SERVICES.map(plan => ({ ...plan, description: 'A focused production scope using your prepared creative assets.' }));
  return <section className="studio-section services-section" id="services"><div className="shell">
    <SectionTitle number="02" label="What we do" title="Find your kind of motion." description="From a focused lyric edit to a fully directed visual story. Choose a starting point. We'll shape the details together." />
    <div className="service-switch" role="group" aria-label="Production scope"><button type="button" aria-pressed={mode === 'studio'} onClick={() => setMode('studio')}>Studio production</button><button type="button" aria-pressed={mode === 'quick'} onClick={() => setMode('quick')}>Quick requests</button></div>
    <div className="plan-grid">{plans.map((plan, index) => <article className={`plan-card ${index === 1 ? 'plan-highlight' : ''}`} key={plan.title}><div className="plan-top"><span className="mono">0{index + 1}</span><plan.icon size={24} strokeWidth={1.3} /></div><h3>{plan.title}</h3><p className="plan-price">{plan.price.replace('Starting at ', '')}<span> / starting price</span></p><p className="plan-description">{'description' in plan ? plan.description : 'A focused production scope using your prepared creative assets.'}</p><ul>{plan.highlights.map(item => <li key={item}><Check size={16} />{item}</li>)}</ul><Link className={`studio-button ${index === 1 ? 'button-light' : 'button-outline'}`} to={`/quote-form?service=${encodeURIComponent(plan.title)}`}>Discuss this project <ArrowUpRight size={17} /></Link><a className="plan-example" href={plan.buttonLink} target="_blank" rel="noreferrer">View examples ↗</a></article>)}</div>
    <div className="service-extra"><p className="eyebrow">Complete the picture</p><h3>Illustration. Visual design. Audio & mixing.</h3><Link to="/#inquiry" className="text-link">Build a custom quote <ArrowUpRight size={18} /></Link></div>
    <p className="pricing-note mono">All prices in USD. Final pricing depends on project scope.</p>
  </div></section>;
}

function Process() {
  return <section className="studio-section process-section" id="process"><div className="shell"><SectionTitle number="03" label="The process" title="Big ideas. Clear next steps." /><div className="process-grid">{processSteps.map((step, index) => <article key={step.title}><div className="step-marker"><span className="mono">0{index + 1}</span><ArrowRight size={20} /></div><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></div></section>;
}

function Testimonials() {
  return <section className="studio-section testimonials-section" id="testimonials"><div className="shell"><SectionTitle number="04" label="Creator voices" title="Great work is a collaboration." />{testimonials.length ? <div className="testimonial-grid">{testimonials.map(item => <figure key={item.name}><blockquote>“{item.quote}”</blockquote><figcaption><strong>{item.name}</strong><span className="mono">{item.role}</span>{item.url && <a href={item.url} target="_blank" rel="noreferrer">Visit creator ↗</a>}</figcaption></figure>)}</div> : <div className="testimonial-empty"><span className="quote-mark" aria-hidden="true">“</span><div><h3>The next voice here could be yours.</h3><p>Creator testimonials are coming soon. In the meantime, explore the collaborations in our selected work.</p><a href="#work" className="text-link">See the work <ArrowUpRight size={18} /></a></div><MoveUpRight className="proof-arrow" size={96} strokeWidth={.7} aria-hidden="true" /></div>}</div></section>;
}

function FAQ() {
  return <section className="studio-section faq-section" id="faq"><div className="shell faq-layout"><SectionTitle number="05" label="Good to know" title="A few things before we hit play." /><div className="faq-list">{faqs.map(item => <details key={item.question}><summary>{item.question}<Plus size={20} aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div></div></section>;
}

export default function StudioPage() {
  return <><Hero /><Work /><Services /><Process /><Testimonials /><FAQ /><InquiryForm /></>;
}
