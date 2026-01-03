// FAQ Section Component
import React from "react";

export default function Faq() {
  const items = [
    {
      q: "What happens after my free trial?",
      a: "You can choose a plan or continue on the free Starter plan—no card required until you’re ready to upgrade. All your contacts and settings stay intact, no matter what you pick.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes! There are no contracts. Cancel or change your plan whenever you like from your dashboard. You also have the option to pause your account, or export your data with one click.",
    },
    {
      q: "Is my data secure?",
      a: "Absolutely. Your data is encrypted and never shared. We’re GDPR-ready from day one. Our systems run on certified, secure cloud infrastructure, and regular backups are included in every plan.",
    },
    {
      q: "Do you have a mobile app?",
      a: "FollowUply is fully mobile-responsive. Native apps are coming soon! In the meantime, you can add a shortcut to your phone's home screen, and get notifications via email, SMS, or browser.",
    },
    {
      q: "Can I import my current client list?",
      a: "Yes, you can import clients from spreadsheets, CSV files, or even sync with Google Contacts. We make sure there are no duplicates and your data flows in smoothly.",
    },
    {
      q: "Do you offer support if I get stuck?",
      a: "Of course! Our friendly support team is one click away. Chat, email, or book a call. Pro and Team plans get priority responses.",
    },
  ];

  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  return (
    <section
      id="faq"
      className="flex items-center justify-center pt-16 pb-16 md:pt-24 md:pb-24 bg-gradient-to-r from-sky-50 via-indigo-50 to-white px-2 sm:px-4 md:px-8 transition-all"
    >
      <div
        className="
          w-full
          max-w-full
          sm:max-w-2xl
          md:max-w-2xl
          lg:max-w-3xl
          xl:max-w-4xl
          mx-auto
          rounded-2xl
          shadow-md
          bg-white/90
          px-2
          sm:px-6
          md:px-10
          py-8
          md:py-12
        "
      >
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-5 text-left">
          Frequently Asked Questions
        </h3>
        <ul className="divide-y divide-gray-200">
          {items.map((item, i) => (
            <li key={i}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="flex w-full justify-between items-center py-3 md:py-4 text-left font-medium text-gray-800 focus:outline-none"
                aria-expanded={openIdx === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-sm sm:text-base md:text-lg">{item.q}</span>
                <span
                  className={`ml-2 transition-transform duration-200 text-indigo-500 text-lg ${
                    openIdx === i ? "rotate-90" : ""
                  }`}
                  aria-hidden="true"
                >
                  ▶
                </span>
              </button>
              {openIdx === i && (
                <div
                  className="p-3 md:pb-5 text-xs sm:text-sm text-gray-700 bg-gray-50 rounded-md transition-all"
                  id={`faq-answer-${i}`}
                >
                  {item.a}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-6 text-gray-500 text-xs sm:text-sm">
          Can&apos;t find your question?{" "}
          <a
            href="mailto:hello@followuply.com"
            className="text-indigo-600 underline hover:text-indigo-700 transition-colors"
          >
            Email us
          </a>{" "}
          any time.
        </div>
      </div>
    </section>
  );
}