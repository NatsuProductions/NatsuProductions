import { Mail, ShieldCheck, Heart, Info, Globe, Scale } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950">
      <div className="container mx-auto max-w-3xl">
        {/* Header Section */}
        <header className="mb-16 border-b border-slate-100 dark:border-slate-800 pb-12">
          <div className="flex items-center gap-2 text-blue-600 mb-4 font-bold tracking-widest uppercase text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>Natsu Productions Studio Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            This Privacy Policy describes how Natsu Productions (&quot;we&quot;,
            &quot;us&quot;, &quot;our&quot;) collects, uses, and protects the
            information you provide when using our website.
          </p>
        </header>

        {/* Full Content Body */}
        <div className="space-y-16 text-slate-700 dark:text-slate-300">
          {/* Section: Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-sm">
                1
              </span>
              Information We Collect
            </h2>
            <div className="pl-11">
              <p className="mb-6 leading-relaxed">
                When you visit our website, we may collect the following types
                of information:
              </p>
              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4 text-blue-500" /> Personal
                    Information
                  </h3>
                  <p className="text-sm leading-relaxed">
                    When you contact us or submit a form on our website, we may
                    collect personal information such as your name, email
                    address, and phone number.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-500" /> Usage Data
                  </h3>
                  <p className="text-sm leading-relaxed">
                    We may collect information about how you interact with our
                    website, including your IP address, browser type, pages
                    visited, and the date and time of your visit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-sm">
                2
              </span>
              How We Use Your Information
            </h2>
            <div className="pl-11">
              <p className="mb-4">
                We may use the information we collect for the following
                purposes:
              </p>
              <ul className="space-y-3 list-none">
                {[
                  "To respond to your inquiries and provide customer support.",
                  "To improve our website and services.",
                  "To send you updates, newsletters, or promotional offers, if you have subscribed to our mailing list.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm italic border-l-2 border-blue-100 dark:border-blue-900 pl-4 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section: Data Sharing and Security */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-sm">
                3
              </span>
              Data Sharing and Security
            </h2>
            <div className="pl-11 space-y-4">
              <p className="leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent. We may share
                your information with trusted third-party service providers who
                assist us in operating our website or conducting our business,
                as long as they agree to keep your information confidential.
              </p>
              <p className="leading-relaxed p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-l-4 border-blue-600 italic text-sm">
                We take reasonable measures to protect the security of your
                information. However, please be aware that no method of
                transmission over the internet or electronic storage is
                completely secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Section: Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-sm">
                4
              </span>
              Your Rights
            </h2>
            <p className="pl-11 leading-relaxed">
              You have the right to access, update, or delete your personal
              information at any time. If you would like to exercise any of
              these rights or have any questions about our privacy practices,
              please contact us using the information provided below.
            </p>
          </section>

          {/* Section: Our Business Values */}
          <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-blue-600" />
              Our Business Values
            </h2>
            <p className="mb-6 text-sm">
              At Natsu Productions, we are committed to upholding the following
              values:
            </p>
            <div className="grid gap-6">
              {[
                {
                  title: "Creativity",
                  desc: "We believe in fostering creativity in everything we do, from crafting exceptional content to providing outstanding service.",
                },
                {
                  title: "Integrity",
                  desc: "We conduct our business with honesty, transparency, and integrity, earning the trust and confidence of our clients and partners.",
                },
                {
                  title: "Community",
                  desc: "We are dedicated to building a supportive and collaborative community, both within our team and with our clients and collaborators.",
                },
              ].map((val) => (
                <div key={val.title} className="group">
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {val.title}
                  </h4>
                  <p className="text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Laws & Changes */}
          <div className="grid md:grid-cols-2 gap-12 pt-8">
            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-blue-600" /> International Laws
              </h2>
              <p className="text-sm leading-relaxed">
                We are committed to complying with all applicable international
                laws and regulations governing the protection of personal
                information.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Policy Changes
              </h2>
              <p className="text-sm leading-relaxed">
                We reserve the right to update or modify this Privacy Policy at
                any time. Any changes will be effective immediately upon posting
                on this page.
              </p>
            </section>
          </div>

          {/* Section: Contact Us */}
          <footer className="pt-20 text-center">
            <div className="p-12 bg-slate-900 dark:bg-slate-900/50 rounded-2xl text-white">
              <h3 className="text-2xl md:text-3xl font-black mb-4 italic tracking-tighter uppercase">
                Ready to <span className="text-blue-600">Commit?</span>
              </h3>
              <p className="text-slate-400 text-sm mb-10 max-w-sm mx-auto">
                By using our services, you acknowledge you have read and agreed
                to these Terms of Service.
              </p>
              <a
                href="mailto:72natsu.productions@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 transition-all rounded-lg font-bold shadow-xl shadow-blue-900/20"
              >
                <Mail className="w-5 h-5" />
                72natsu.productions@gmail.com
              </a>
            </div>
            <p className="mt-8 text-xs text-slate-500 uppercase tracking-widest">
              &copy; 2026 Natsu Productions Studio. All Rights Reserved.
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}
