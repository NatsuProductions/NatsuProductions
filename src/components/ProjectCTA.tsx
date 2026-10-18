import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
export default function ProjectCTA() {
  return <aside className="studio-section"><p className="eyebrow">Your next release</p><h2 className="text-4xl font-bold my-6">Let's make your music move.</h2><Link className="studio-button" to="/#inquiry">Start a project <ArrowUpRight size={18} /></Link></aside>;
}
