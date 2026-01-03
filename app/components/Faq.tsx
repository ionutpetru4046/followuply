// FAQ Section Component
import React from "react";

export default function Faq() {
    const items = [
      {
        q: "What happens after my free trial?",
        a: "You can choose a plan or continue on the free Starter plan—no card required until you’re ready to upgrade. All your contacts and settings stay intact, no matter what you pick."
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes! There are no contracts. Cancel or change your plan whenever you like from your dashboard. You also have the option to pause your account, or export your data with one click."
      },
      {
        q: "Is my data secure?",
        a: "Absolutely. Your data is encrypted and never shared. We’re GDPR-ready from day one. Our systems run on certified, secure cloud infrastructure, and regular backups are included in every plan."
      },
      {
        q: "Do you have a mobile app?",
        a: "FollowUply is fully mobile-responsive. Native apps are coming soon! In the meantime, you can add a shortcut to your phone's home screen, and get notifications via email, SMS, or browser."
      },
      {
        q: "Can I import my current client list?",
        a: "Yes, you can import clients from spreadsheets, CSV files, or even sync with Google Contacts. We make sure there are no duplicates and your data flows in smoothly."
      },
      {
        q: "Do you offer support if I get stuck?",
        a: "Of course! Our friendly support team is one click away. Chat, email, or book a call. Pro and Team plans get priority responses."
      },
    ];
    const [openIdx, setOpenIdx] = React.useState<number | null>(null);
    return (
      <div className="max-w-2xl pt-24 mx-auto" id="faq">
        <h3 className="text-xl font-bold text-gray-900 mb-5 text-left">Frequently Asked Questions</h3>
        <ul className="divide-y divide-gray-200">
          {items.map((item, i) => (
            <li key={i}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="flex w-full justify-between items-center py-4 text-left font-medium text-gray-800 focus:outline-none"
              >
                <span>{item.q}</span>
                <span className={`ml-2 transform transition-transform ${openIdx === i ? "rotate-90" : ""}`}>▶</span>
              </button>
              {openIdx === i && (
                <div className="p-3 pb-5 text-sm text-gray-600 bg-gray-50 rounded-md">{item.a}</div>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-6 text-gray-500 text-xs">
          Can&apos;t find your question? <a href="mailto:hello@followuply.com" className="text-indigo-600 underline">Email us</a> any time.
        </div>
      </div>
    );
  }