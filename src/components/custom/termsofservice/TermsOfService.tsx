import {
  FileCheck,
  CreditCard,
  Scale,
  ShieldAlert,
  Ban,
  Clock,
  Zap,
  Award,
  UserCheck,
  Gavel,
  Mail,
} from "lucide-react";

export default function TermsOfService() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300">
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <header className="mb-20 border-b border-slate-100 dark:border-slate-800 pb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-blue-600 mb-4 font-black tracking-widest uppercase text-xs">
            <Award className="w-4 h-4" />
            <span>Official Studio Documentation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter italic uppercase">
            Terms of <span className="text-blue-600">Service</span>
          </h1>
          <p className="text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            Welcome to Natsu Productions. By accessing our services, you agree
            to comply with and be bound by these Terms of Service
            (&quot;Terms&quot;). Please read them carefully. If you do not agree
            with these Terms, do not use our services.
          </p>
        </header>

        <div className="space-y-20">
          {/* 1. Definitions */}
          <section id="definitions">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 italic uppercase tracking-tight">
              <span className="text-blue-600">01.</span> Definitions
            </h2>
            <div className="grid gap-4 pl-0 md:pl-10">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 space-y-4 text-sm leading-relaxed">
                <p>
                  <span className="font-bold text-slate-900 dark:text-white underline decoration-blue-200 decoration-2 underline-offset-4">
                    Services:
                  </span>{" "}
                  The creative production services provided by Natsu
                  Productions, including but not limited to video production,
                  photography, graphic design, and content creation.
                </p>
                <p>
                  <span className="font-bold text-slate-900 dark:text-white underline decoration-blue-200 decoration-2 underline-offset-4">
                    Client:
                  </span>{" "}
                  The individual or entity engaging Natsu Productions for
                  Services.
                </p>
                <p>
                  <span className="font-bold text-slate-900 dark:text-white underline decoration-blue-200 decoration-2 underline-offset-4">
                    Deliverables:
                  </span>{" "}
                  The final output provided to the Client as a result of the
                  Services.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Acceptance of Terms */}
          <section id="acceptance">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 italic uppercase tracking-tight">
              <span className="text-blue-600">02.</span> Acceptance of Terms
            </h2>
            <p className="pl-0 md:pl-10 leading-relaxed">
              By using our Services, you accept and agree to be bound by these
              Terms. If you are entering into these Terms on behalf of a company
              or other legal entity, you represent that you have the authority
              to bind such entities.
            </p>
          </section>

          {/* 3. Services Provided */}
          <section id="services">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 italic uppercase tracking-tight">
              <span className="text-blue-600">03.</span> Services Provided
            </h2>
            <div className="pl-0 md:pl-10 space-y-6">
              <p className="leading-relaxed text-sm">
                Natsu Productions offers a range of creative production services
                as outlined in our proposals and contracts. The specific
                details, timeline, and deliverables for each project will be
                defined in a separate agreement between Natsu Productions and
                the Client.
              </p>

              <div className="p-8 rounded-3xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/50">
                <h3 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-blue-600" />
                  3.1 General Rights
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-4">
                    <span className="font-bold text-blue-600">A.</span>
                    <span>
                      Both Natsu Productions and the creators on a project must
                      be credited appropriately.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-blue-600">B.</span>
                    <span>
                      Natsu Productions and its team reserve the right to reject
                      any project without disclosing the reason.
                    </span>
                  </li>
                  <li className="flex gap-4 text-red-600 dark:text-red-400 font-medium">
                    <Ban className="w-5 h-5 shrink-0" />
                    <span>
                      Natsu Productions does not accept projects with hateful,
                      discriminatory, or explicit content.
                    </span>
                  </li>
                  <li className="flex gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-blue-100">
                    <Zap className="w-5 h-5 text-amber-500 shrink-0" />
                    <span className="text-slate-900 dark:text-white font-semibold">
                      We do not support cryptocurrency or NFTs, and our work is
                      not to be minted. Our work is also not to be used for AI
                      learning.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-blue-600">C.</span>
                    <span>
                      All works created by Natsu Productions are intellectual
                      property of Natsu Productions and the respective artists.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-blue-600">D.</span>
                    <span>
                      By default, all projects include a Standard Commercial
                      License for promotional and commercial use of the final
                      product. Extended Commercial Licenses are available after
                      negotiation for an additional fee.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Client Responsibilities */}
          <section id="responsibilities">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 italic uppercase tracking-tight">
              <span className="text-blue-600">04.</span> Client Responsibilities
            </h2>
            <div className="pl-0 md:pl-10 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold flex items-center gap-2 text-slate-900 dark:text-white underline decoration-blue-500/30 underline-offset-4">
                    4.1 Provision of Information
                  </h4>
                  <p className="text-sm leading-relaxed">
                    The Client agrees to provide all necessary information,
                    materials, and access to locations or personnel required for
                    the timely completion of the Services.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold flex items-center gap-2 text-slate-900 dark:text-white underline decoration-blue-500/30 underline-offset-4">
                    4.2 Approvals and Feedback
                  </h4>
                  <p className="text-sm leading-relaxed">
                    The Client must provide timely feedback and approvals to
                    ensure project milestones are met. Delays in feedback or
                    approvals may result in changes to the project timeline and
                    additional costs.
                  </p>
                </div>
              </div>
              <div className="p-4 border-l-4 border-amber-400 bg-amber-50/30 dark:bg-amber-900/10 text-sm italic">
                <strong>4.2 Start of Project:</strong> The Client must provide
                timely feedback and approvals to ensure project milestones are
                met. Delays in feedback or approvals may result in changes to
                the project timeline and additional costs.
              </div>
            </div>
          </section>

          {/* 5. Payment Terms */}
          <section id="payment">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 italic uppercase tracking-tight">
              <span className="text-blue-600">05.</span> Payment Terms
            </h2>
            <div className="pl-0 md:pl-10 space-y-8">
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  5.1 Fees
                </h4>
                <p className="text-sm leading-relaxed">
                  The Client agrees to pay the fees as specified in the project
                  proposal or contract. All payments will be processed via
                  invoice sent by the respective team member working on your
                  project.
                </p>

                <div className="bg-slate-900 text-white p-6 rounded-2xl border-b-4 border-blue-600">
                  <p className="flex items-center gap-3 font-bold mb-4">
                    <Clock className="w-5 h-5 text-blue-400" />
                    IMPORTANT: 3-Day Payment Window
                  </p>
                  <p className="text-sm text-slate-300 mb-0">
                    You will be notified when an invoice is sent out, and you
                    have <strong>three (3) days</strong> to submit payment.
                    Failure to do so within the allotted time may result in the
                    cancellation of your project.
                  </p>
                </div>

                <div className="grid gap-4 text-sm">
                  <p>
                    Our prices vary based on complexity and length, but we offer
                    packages you can rely on and adjust. Each team member may
                    charge differently due to variations in medium and work
                    time.
                  </p>
                  <p className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                    <strong>Add-ons & Extras:</strong> Can be requested prior to
                    or during the project (revisions, custom animations,
                    expedited delivery). Initial price may be adjusted and
                    payment processed accordingly.
                  </p>
                  <p className="font-bold text-red-600">
                    Prices are non-negotiable. Attempting to negotiate a lower
                    price after work has commenced will result in project
                    cancellation.
                  </p>
                </div>
              </div>

              {/* Payment Schedule */}
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  5.2 Payment Schedule
                </h4>
                <div className="grid gap-4">
                  {[
                    {
                      title: "Full Payment",
                      desc: "Invoiced for 100% of initial price (base + initial extras) before work begins.",
                    },
                    {
                      title: "Half & Half Payment",
                      desc: "50% upfront before work begins, and 50% upon delivery of a first draft.",
                    },
                    {
                      title: "Installment Payment",
                      desc: "25% increments (upfront, then weekly/s, then final balance upon delivery).",
                    },
                  ].map((plan) => (
                    <div
                      key={plan.title}
                      className="p-5 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center gap-4 hover:border-blue-200 transition-colors"
                    >
                      <span className="font-black text-blue-600 uppercase text-xs tracking-tighter w-40">
                        {plan.title}
                      </span>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {plan.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Late / NDA / Rush */}
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    5.3 Late Payments
                  </h4>
                  <p className="text-xs">
                    Late payments may incur interest charges. Natsu Productions
                    reserves the right to suspend services until payment is
                    received.
                  </p>
                </div>
                <div className="p-6 bg-blue-600 text-white rounded-3xl">
                  <h4 className="font-bold mb-4 italic">
                    5.4 Special Projects
                  </h4>
                  <ul className="space-y-4 text-xs">
                    <li>
                      <strong>NDAs:</strong> Fee of 15% of total payment.
                      Prevents progress streaming/WIP posts until project is
                      public.
                    </li>
                    <li>
                      <strong>Rush Projects:</strong> 1 slot per quarter. 2-3
                      week turnaround charged at 80-100% of total price.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Intellectual Property */}
          <section id="intellectual-property">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 italic uppercase tracking-tight">
              <span className="text-blue-600">06.</span> Intellectual Property
            </h2>
            <div className="pl-0 md:pl-10 grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-blue-600" /> 6.1 Ownership
                </h4>
                <p className="text-sm leading-relaxed">
                  Natsu Productions retains ownership of all intellectual
                  property until full payment is received. Upon full payment,
                  Client receives rights to use Deliverables as outlined in the
                  contract.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-blue-600" /> 6.2 Use of
                  Deliverables
                </h4>
                <p className="text-sm leading-relaxed">
                  The Client may use the Deliverables for purposes specified in
                  the contract. Any other use requires prior written consent
                  from Natsu Productions.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Revisions and Changes */}
          <section id="revisions">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 italic uppercase tracking-tight">
              <span className="text-blue-600">07.</span> Revisions and Changes
            </h2>
            <div className="pl-0 md:pl-10 space-y-6 text-sm">
              <p>
                Project proposal specifies the number of revisions. Additional
                revisions incur extra costs.
              </p>
              <ul className="grid gap-4 list-none pl-0">
                <li className="p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  <strong>Major Revisions:</strong> Discussed during the first
                  draft (outline, storyboard, rough cut). Changes after this
                  point incur additional charges.
                </li>
                <li className="p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  <strong>Minor Revisions:</strong> May be requested during work
                  process. Revisions requested after project completion incur
                  charges.
                </li>
              </ul>
              <p className="italic font-medium">
                <strong>7.2 Changes to Scope:</strong> Must be agreed upon in
                writing and may result in additional fees and timeline changes.
              </p>
            </div>
          </section>

          {/* 10. Termination - Refined UI Table */}
          <section id="termination">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 italic uppercase tracking-tight">
              <span className="text-blue-600">08.</span> Termination & Refunds
            </h2>
            <div className="pl-0 md:pl-10 space-y-8">
              <p className="text-sm">
                Client may terminate at any time via written notice, responsible
                for payment for work completed up to that date.
              </p>
              <div className="overflow-hidden rounded-3xl border border-slate-100 dark:border-slate-800">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-900/50">
                    <tr className="text-slate-900 dark:text-white">
                      <th className="px-6 py-4 font-black italic">Category</th>
                      <th className="px-6 py-4 font-black italic">
                        Refund Policy
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr>
                      <td className="px-6 py-4">Prior to Work Beginning</td>
                      <td className="px-6 py-4 text-green-600 font-bold">
                        100% Refund
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">WIP or Partial Completion</td>
                      <td className="px-6 py-4 text-amber-600 font-bold">
                        10% - 50% Refund (Determined by team)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">
                        Project reaches 50% / Full Completion
                      </td>
                      <td className="px-6 py-4 text-red-600 font-bold">
                        No Refunds Issued
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-6 rounded-2xl bg-red-50 dark:bg-red-950/20 border-2 border-red-100 dark:border-red-900/30">
                <p className="text-sm text-red-900 dark:text-red-300">
                  <strong>Business Relationship Termination:</strong> Any
                  violation of Natsu Productions’ Terms will result in project
                  termination with no refund. We reserve the right to blacklist
                  and block communication.
                </p>
              </div>
            </div>
          </section>

          {/* 11. Commercial License */}
          <section id="license">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 italic uppercase tracking-tight">
              <span className="text-blue-600">09.</span> Commercial License
            </h2>
            <div className="pl-0 md:pl-10 grid gap-6">
              <div className="p-8 rounded-3xl border-2 border-blue-100 bg-blue-50/20">
                <h4 className="text-blue-600 font-black mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5" /> 11.1 STANDARD COMMERCIAL LICENSE
                </h4>
                <ul className="space-y-3 text-sm list-disc pl-5">
                  <li>
                    <strong>Usage:</strong> Promotional and economic gain on
                    digital platforms (social media/streaming). Profits remain
                    with Client.
                  </li>
                  <li>
                    <strong>Non-transferable:</strong> Deliverables cannot be
                    transferred, sold, or redistributed.
                  </li>
                  <li>
                    <strong>Edits & Changes:</strong> Strictly no permission to
                    edit or change commission under any circumstances.
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold mb-2">
                  11.2 EXTENDED COMMERCIAL LICENSE
                </h4>
                <p className="text-sm">
                  For uses not covered by Standard. Negotiation adds{" "}
                  <strong>50-100% of deliverable&apos;s final price</strong>{" "}
                  depending on agreed usage.
                </p>
              </div>
            </div>
          </section>

          {/* Governance */}
          <section id="governance">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 italic uppercase tracking-tight">
              <span className="text-blue-600">10.</span> Governing Law &
              Finality
            </h2>
            <div className="pl-0 md:pl-10 space-y-6 text-sm">
              <p className="flex items-center gap-2">
                <Gavel className="w-4 h-4 text-blue-600" /> These Terms are
                governed by the laws of the{" "}
                <strong>Republic of the Philippines</strong>.
              </p>
              <p>
                Natsu Productions reserves the right to amend these Terms at any
                time. Amendments are effective upon posting or notification.
              </p>
              <p className="font-bold text-slate-900 dark:text-white border-t border-slate-100 dark:border-slate-800 pt-6">
                These Terms, along with project proposals/contracts, constitute
                the entire agreement and supersede all prior understandings.
              </p>
            </div>
          </section>

          {/* Contact Footer */}
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
