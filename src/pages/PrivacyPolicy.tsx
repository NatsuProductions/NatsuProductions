import { ShieldCheck, Scale } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300">
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <header className="mb-20 border-b border-slate-100 dark:border-slate-800 pb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-blue-600 mb-4 font-black tracking-widest uppercase text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Studio Policy</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter italic uppercase">
            Privacy <span className="text-blue-600">Policy</span>
          </h1>
          <p className="text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            This Privacy Policy describes how Natsu Productions ("we", "us",
            "our") collects, uses, and protects the information you provide when
            using our website.
          </p>
        </header>

        <div className="space-y-20">
          {/* 1. Information We Collect */}
          <section id="info-collect">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 italic uppercase tracking-tight">
              <span className="text-blue-600">01.</span> Information We Collect
            </h2>
            <div className="grid gap-4 pl-0 md:pl-10">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 space-y-4 text-sm leading-relaxed">
                <p>
                  <span className="font-bold text-slate-900 dark:text-white underline decoration-blue-200 decoration-2 underline-offset-4">
                    Personal Information:
                  </span>{" "}
                  When you contact us or submit a form, we may collect your
                  name, email address, and phone number.
                </p>
                <p>
                  <span className="font-bold text-slate-900 dark:text-white underline decoration-blue-200 decoration-2 underline-offset-4">
                    Usage Data:
                  </span>{" "}
                  We may collect information about how you interact with our
                  website, including your IP address, browser type, pages
                  visited, and the date and time of your visit.
                </p>
              </div>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section id="use-info">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 italic uppercase tracking-tight">
              <span className="text-blue-600">02.</span> How We Use Your
              Information
            </h2>
            <div className="pl-0 md:pl-10">
              <ul className="space-y-4 text-sm list-disc pl-5">
                <li>
                  To respond to your inquiries and provide customer support.
                </li>
                <li>To improve our website and services.</li>
                <li>
                  To send you updates, newsletters, or promotional offers, if
                  you have subscribed to our mailing list.
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Data Sharing and Security */}
          <section id="data-security">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 italic uppercase tracking-tight">
              <span className="text-blue-600">03.</span> Data Sharing & Security
            </h2>
            <div className="pl-0 md:pl-10 space-y-4">
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent. We may share
                your information with trusted third-party service providers who
                assist us in operating our website or conducting our business,
                as long as they agree to keep your information confidential.
              </p>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-blue-600 italic text-sm">
                We take reasonable measures to protect the security of your
                information. However, no method of transmission over the
                internet or electronic storage is completely secure, and we
                cannot guarantee absolute security.
              </div>
            </div>
          </section>

          {/* 4. Your Rights */}
          <section id="your-rights">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 italic uppercase tracking-tight">
              <span className="text-blue-600">04.</span> Your Rights
            </h2>
            <div className="pl-0 md:pl-10">
              <p>
                You have the right to access, update, or delete your personal
                information at any time. If you would like to exercise any of
                these rights or have any questions about our privacy practices,
                please contact us using the information provided below.
              </p>
            </div>
          </section>

          {/* 5. Our Business Values */}
          <section id="values">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 italic uppercase tracking-tight">
              <span className="text-blue-600">05.</span> Our Business Values
            </h2>
            <div className="pl-0 md:pl-10 grid gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  Creativity
                </h4>
                <p className="text-sm leading-relaxed">
                  We believe in fostering creativity in everything we do, from
                  crafting exceptional content to providing outstanding service.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  Integrity
                </h4>
                <p className="text-sm leading-relaxed">
                  We conduct our business with honesty, transparency, and
                  integrity, earning the trust and confidence of our clients and
                  partners.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  Community
                </h4>
                <p className="text-sm leading-relaxed">
                  We are dedicated to building a supportive and collaborative
                  community, both within our team and with our clients and
                  collaborators.
                </p>
              </div>
            </div>
          </section>

          {/* 6. International Laws & Policy Changes */}
          <section id="laws-changes">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 italic uppercase tracking-tight">
              <span className="text-blue-600">06.</span> International Laws &
              Policy Changes
            </h2>
            <div className="pl-0 md:pl-10 grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-blue-600" /> International Laws
                </h4>
                <p className="text-sm leading-relaxed">
                  We are committed to complying with all applicable
                  international laws and regulations governing the protection of
                  personal information.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  Policy Changes
                </h4>
                <p className="text-sm leading-relaxed">
                  We reserve the right to update or modify this Privacy Policy
                  at any time. Any changes will be effective immediately upon
                  posting on this page.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
