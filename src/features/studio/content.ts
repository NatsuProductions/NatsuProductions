export const navigation = [
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'FAQ', href: '/#faq' },
];

export const processSteps = [
  { title: 'Share the vision.', description: 'Your sound, references, and release plans. Tell us what you want the world to feel.' },
  { title: 'Find the direction.', description: 'We align on the concept, scope, and creative approach before production begins.' },
  { title: 'Make it move.', description: 'Editing, typography, and motion come together around the energy of your track.' },
  { title: 'Meet the final cut.', description: 'The finished export, ready for your release. Your music, with a world of its own.' },
];

export type Testimonial = { quote: string; name: string; role: string; url?: string };
// Publish only client-approved quotes with permission to identify the creator.
export const testimonials: Testimonial[] = [];

export const faqs = [
  { question: 'Is this the right studio for my release?', answer: 'We focus on anime-inspired music videos, motion graphics, and visual storytelling for VTubers, Utaites, independent artists, and agencies. Covers, original songs, and collaborative releases are all welcome.' },
  { question: 'What should I send with my inquiry?', answer: 'Share your song or demo, a few visual references, your desired release date, and a budget in USD. Include links to any illustrations, logos, or other assets you already have. Please make sure shared links are accessible.' },
  { question: 'Can we work together if I am outside the Philippines?', answer: 'Yes. The studio is based in the Philippines and collaborates with creators worldwide. Share your timezone and preferred way to communicate in your brief.' },
  { question: 'How much will my video cost?', answer: 'Quick request edits start at $80, and studio music video production starts at $400. The final quote depends on your concept, available assets, complexity, and production scope.' },
  { question: 'What about timing and revisions?', answer: 'Tell us your desired deadline in the inquiry. We will confirm availability, production milestones, and revision scope with you before starting. A date entered in the form is a request, not a confirmed booking.' },
  { question: 'Can you help with illustration and audio?', answer: 'Yes. Visual design, illustration, audio production, and mixing can be discussed as part of a custom quote. Tell us which parts of the release you need help with.' },
];
