"use client";

import React from "react";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      {/* Apply overflow-x-hidden at the outermost AppPage wrapper to prevent horizontal scroll */}
      <div className="w-full overflow-x-hidden">
        <main className="bg-gray-50 text-gray-900">
          {/* Hero */}
          <section className="relative flex items-center justify-center w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 px-4 sm:px-8" style={{ minHeight: "100vh" }}>
            {/* Background Accent Blobs */}
            <div className="pointer-events-none absolute -top-32 left-[-32px] w-[320px] h-[320px] md:w-[480px] md:h-[480px] max-w-screen-sm max-h-[90vw] rounded-full bg-indigo-400 opacity-10 blur-3xl z-0" />
            <div className="pointer-events-none absolute bottom-0 right-[-32px] w-[180px] h-[180px] md:w-[340px] md:h-[340px] max-w-screen-xs max-h-[60vw] rounded-full bg-pink-400 opacity-10 blur-3xl z-0" />
            
            <div className="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 text-indigo-300 rounded-full text-xs font-medium mb-6 shadow">
                🚀 Smarter client management • Modern CRM
              </span>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-md">
                More Clients.<br className="hidden sm:inline" />
                Less Work.
              </h1>
              <p className="mt-6 text-base xs:text-lg sm:text-xl text-gray-200 font-light max-w-xl mx-auto">
                FollowUply remembers every client for you — and tells you exactly who needs a follow-up today, so you never lose repeat business again.<br/>
                <span className="inline-block mt-4 border-l-4 border-indigo-400 pl-4 text-xs md:text-base text-indigo-200">
                  Designed for solopreneurs, small business owners, and anyone who cares about their clients.
                </span>
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                <a
                  href="/login"
                  className="px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-white text-lg font-semibold shadow-lg flex items-center justify-center ring-1 ring-indigo-700/30 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  Start free for 7 days
                </a>
                <a
                  href="#features"
                  className="px-8 py-3 rounded-lg bg-white/10 text-indigo-100 hover:bg-white/20 transition text-lg font-medium shadow flex items-center justify-center border border-white/10"
                >
                  See Features
                </a>
              </div>
              <p className="mt-5 text-xs sm:text-sm text-gray-300 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-green-400 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                No credit card required • Cancel anytime
              </p>
              {/* Extra modern UI element: Trust bar or customer logos (demo) */}
              <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 opacity-80">
                <span className="text-xs text-gray-300/70">Trusted by</span>
                <img src="/customers/customer1.svg" alt="Customer 1" className="w-16 sm:w-20 h-6 grayscale opacity-60" />
                <img src="/customers/customer2.svg" alt="Customer 2" className="w-16 sm:w-20 h-6 grayscale opacity-60" />
                <img src="/customers/customer3.svg" alt="Customer 3" className="w-16 sm:w-20 h-6 grayscale opacity-60" />
                <span className="text-xs text-gray-300/70 hidden sm:inline">and more...</span>
              </div>
              {/* New: Quick video demo or animation */}
              <div className="mt-12 w-full flex flex-col items-center">
                <video
                  className="rounded-xl shadow-xl w-full max-w-md mx-auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/demo-poster.png"
                  style={{ backgroundColor: "#212144" }}
                >
                  <source src="/followuply-demo.mp4" type="video/mp4" />
                  Demo video unavailable
                </video>
                <span className="text-indigo-100 text-xs mt-3">See how it works in 30 seconds</span>
              </div>
            </div>
          </section>

          {/* Problem */}
          <section className="relative px-2 xs:px-4 sm:px-6 py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950" style={{ minHeight: "100vh" }}>
            {/* Accent Blobs */}
            <div className="pointer-events-none absolute -top-16 md:-top-24 right-[-32px] md:right-[-32px] w-[180px] h-[180px] md:w-[340px] md:h-[340px] max-w-screen-xs max-h-[60vw] rounded-full bg-indigo-400 opacity-10 blur-3xl z-0"></div>
            <div className="pointer-events-none absolute left-[-32px] bottom-0 w-[120px] h-[120px] md:w-[220px] md:h-[220px] max-w-screen-xs max-h-[40vw] rounded-full bg-pink-400 opacity-10 blur-3xl z-0"></div>
            <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Problems Every Solopreneur Faces
              </h2>
              <p className="mt-5 text-base sm:text-lg text-gray-200 mb-6">
                Inconsistent follow-ups cost you repeat business. Spreadsheets and sticky notes just can&apos;t keep up.
              </p>
              {/* Modern Problem Grid */}
              <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                <div className="bg-gray-800 rounded-xl p-6 shadow text-gray-50">
                  <span role="img" aria-label="lost">😵‍💫</span>
                  <div className="font-semibold mt-3">Clients Go Cold</div>
                  <div className="text-xs mt-1">Forget to check in on time? Opportunities vanish.</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-6 shadow text-gray-50">
                  <span role="img" aria-label="messy">📋</span>
                  <div className="font-semibold mt-3">Messy Trackers</div>
                  <div className="text-xs mt-1">Sticky notes and spreadsheets let things slip through the cracks.</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-6 shadow text-gray-50">
                  <span role="img" aria-label="no time">⏰</span>
                  <div className="font-semibold mt-3">No Time</div>
                  <div className="text-xs mt-1">Your day’s busy enough! CRM should help, not get in the way.</div>
                </div>
              </div>
            </div>
          </section>

          {/* How FollowUply Works */}
          <section className="relative bg-gradient-to-br from-indigo-800 via-indigo-700 to-indigo-900 w-full py-10 sm:py-24 flex items-center" style={{ minHeight: "100vh" }}>
            {/* Animated floating shapes */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute left-1/2 top-0 w-52 sm:w-96 h-52 sm:h-96 opacity-20 blur-3xl bg-pink-500/50 rounded-full -translate-x-2/3 -translate-y-20 animate-pulse max-w-screen-md max-h-[90vw]"></div>
              <div className="absolute right-0 bottom-0 w-32 sm:w-72 h-32 sm:h-72 opacity-10 blur-2xl bg-yellow-400/30 rounded-full translate-x-1/4 translate-y-1/3 animate-pulse-slow max-w-screen-xs max-h-[60vw]"></div>
            </div>
            <div className="relative z-20 w-full max-w-7xl mx-auto px-2 sm:px-6 flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                How FollowUply Works
              </h2>
              <p className="mt-5 text-base sm:text-lg text-indigo-100 mb-8">
                Stay on top of every client and never miss a repeat opportunity.
              </p>
              {/* Steps grid */}
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 w-full">
                <div className="bg-indigo-900/80 rounded-xl p-6 text-white shadow">
                  <div className="font-bold text-lg mb-2">1. Add Clients</div>
                  <div className="text-xs">Name, contact info, simple setup. No mess.</div>
                </div>
                <div className="bg-indigo-900/80 rounded-xl p-6 text-white shadow">
                  <div className="font-bold text-lg mb-2">2. Get Reminders</div>
                  <div className="text-xs">Automatic, smart reminders for who needs a reach-out today.</div>
                </div>
                <div className="bg-indigo-900/80 rounded-xl p-6 text-white shadow">
                  <div className="font-bold text-lg mb-2">3. Grow Business</div>
                  <div className="text-xs">Consistent clients, more referrals, no anxiety.</div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="flex items-center px-4 sm:px-6 bg-white" style={{ minHeight: "100vh" }}>
            <div className="max-w-4xl mx-auto text-center py-10 sm:py-20 w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Why You&apos;ll Love FollowUply
              </h2>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-7 text-left">
                <li className="bg-gray-50 rounded-xl px-6 py-4 shadow border border-indigo-50">
                  <span className="font-semibold text-indigo-700">Never lose clients</span>
                  <p className="text-gray-600 text-sm mt-1">Stay top-of-mind automatically — for better retention and more repeat income.</p>
                </li>
                <li className="bg-gray-50 rounded-xl px-6 py-4 shadow border border-indigo-50">
                  <span className="font-semibold text-indigo-700">Easy, zero-learning curve</span>
                  <p className="text-gray-600 text-sm mt-1">Built for busy solo operators: no complicated forms or setup.</p>
                </li>
                <li className="bg-gray-50 rounded-xl px-6 py-4 shadow border border-indigo-50">
                  <span className="font-semibold text-indigo-700">Secure &amp; private</span>
                  <p className="text-gray-600 text-sm mt-1">Your data is encrypted, and only you can see it.</p>
                </li>
                <li className="bg-gray-50 rounded-xl px-6 py-4 shadow border border-indigo-50">
                  <span className="font-semibold text-indigo-700">Cancel anytime</span>
                  <p className="text-gray-600 text-sm mt-1">No contracts, no hassle. Change plans whenever you want.</p>
                </li>
              </ul>
              <div className="mt-10 w-full">
                <TestimonialCarousel />
              </div>
            </div>
          </section>

          {/* Who it’s for */}
          <section className="flex items-center justify-center bg-gradient-to-r from-indigo-50 via-white to-sky-100 px-4 sm:px-6 py-0 relative" style={{ minHeight: "100vh" }}>
            <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-12 py-12 md:py-24">
              <div className="flex-1 bg-white rounded-2xl shadow p-8 text-center">
                <div className="text-2xl mb-4">👩‍🎨</div>
                <div className="font-bold text-lg mb-2">Freelancers &amp; Creatives</div>
                <div className="text-gray-700 text-sm">Keep your project clients coming back, even months after the last gig.</div>
              </div>
              <div className="flex-1 bg-white rounded-2xl shadow p-8 text-center">
                <div className="text-2xl mb-4">🧑‍🔬</div>
                <div className="font-bold text-lg mb-2">Health &amp; Wellness pros</div>
                <div className="text-gray-700 text-sm">Trainers, therapists, coaches, and more: build loyalty with automated reminders.</div>
              </div>
              <div className="flex-1 bg-white rounded-2xl shadow p-8 text-center">
                <div className="text-2xl mb-4">🏪</div>
                <div className="font-bold text-lg mb-2">Small Shop Owners</div>
                <div className="text-gray-700 text-sm">Turn one-time visitors into loyal regulars with easy, timely check-ins.</div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="flex flex-col items-center justify-center bg-gradient-to-tr from-black via-gray-900 to-indigo-900 relative px-4 sm:px-6 py-0" style={{ minHeight: "100vh" }}>
            <div className="max-w-3xl w-full mx-auto text-center py-12 sm:py-24 relative z-20">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Start Growing Your Repeat Business Now
              </h2>
              <p className="mt-5 text-lg text-gray-200">
                Try FollowUply free for 7 days with no credit card required.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/login"
                  className="px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-white text-lg font-semibold shadow-lg flex items-center justify-center ring-1 ring-indigo-700/30 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  Start Free Trial
                </a>
                <a
                  href="#features"
                  className="px-8 py-3 rounded-lg bg-white/10 text-indigo-100 hover:bg-white/20 transition text-lg font-medium shadow flex items-center justify-center border border-white/10"
                >
                  See Features
                </a>
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 sm:h-40 bg-gradient-to-t from-black to-transparent z-0" />
          </section>

          {/* Features Section */}
          <section id="features" className="flex items-center justify-center bg-gradient-to-r from-gray-50 via-indigo-50 to-white px-4 sm:px-6 py-0" style={{ minHeight: "100vh" }}>
            <div className="max-w-6xl w-full mx-auto text-center py-12 sm:py-24">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Powerful Features, Simple to Use
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  title="Smart Reminders"
                  description="Never forget to follow up. We tell you who needs outreach today—and why."
                />
                <FeatureCard
                  title="Easy Import"
                  description="Add or import your clients in seconds. No technical setup required."
                />
                <FeatureCard
                  title="Works Everywhere"
                  description="Use on any device. Mobile-friendly, nothing to install."
                />
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="flex items-center justify-center bg-white px-4 sm:px-6 py-0" style={{ minHeight: "100vh" }}>
            <div className="max-w-6xl w-full mx-auto text-center py-12 sm:py-24">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Simple, Honest Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl border shadow text-center">
                  <div className="text-lg font-bold text-indigo-600 mb-2">Starter</div>
                  <div className="text-4xl font-extrabold mb-2">Free</div>
                  <div className="text-gray-600 mb-6">Up to 15 clients<br />Basic CRM features<br />No card required</div>
                  <a href="/login" className="block w-full px-6 py-2 rounded bg-indigo-600 text-white font-semibold mt-2 hover:bg-indigo-700 transition">
                    Start Free
                  </a>
                </div>
                <div className="bg-indigo-50 p-8 rounded-xl border-2 border-indigo-600 shadow-xl text-center">
                  <div className="text-lg font-bold text-indigo-700 mb-2">Pro</div>
                  <div className="text-4xl font-extrabold mb-2">$9<span className="text-2xl font-medium">/mo</span></div>
                  <div className="text-gray-700 mb-6">Unlimited clients<br />All CRM features<br />Priority support</div>
                  <a href="/login" className="block w-full px-6 py-2 rounded bg-indigo-700 text-white font-semibold mt-2 hover:bg-indigo-800 transition">
                    Start 7-day Free Trial
                  </a>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl border shadow text-center">
                  <div className="text-lg font-bold text-indigo-600 mb-2">Team</div>
                  <div className="text-4xl font-extrabold mb-2">$19<span className="text-2xl font-medium">/mo</span></div>
                  <div className="text-gray-600 mb-6">Share clients with team<br />All Pro features<br />Team reminders</div>
                  <a href="/login" className="block w-full px-6 py-2 rounded bg-indigo-600 text-white font-semibold mt-2 hover:bg-indigo-700 transition">
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="flex items-center justify-center bg-gradient-to-r from-sky-50 via-indigo-50 to-white px-4 sm:px-6 py-0" style={{ minHeight: "100vh" }}>
            <div className="max-w-3xl w-full mx-auto text-center py-12 sm:py-24 rounded-3xl shadow-lg bg-white/80 backdrop-blur">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Contact Us
              </h2>
              <form className="grid gap-5 max-w-lg mx-auto">
                <input type="text" placeholder="Your Name" className="rounded px-4 py-2 border border-indigo-200 bg-white" required />
                <input type="email" placeholder="Email" className="rounded px-4 py-2 border border-indigo-200 bg-white" required />
                <textarea placeholder="Your Message" className="rounded px-4 py-2 border border-indigo-200 bg-white" rows={4} required />
                <button type="submit" className="rounded px-6 py-2 bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
                  Send
                </button>
              </form>
              <div className="mt-6">
                <FAQSection />
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </>
  );
}

// Testimonials Carousel Component
function TestimonialCarousel() {
  const testimonials = [
    {
      quote: "I finally spend less time in WhatsApp figuring out which client needs a message. FollowUply pays for itself every month!",
      user: "Anna, Salon Owner",
      img: "/customers/anna.jpg"
    },
    {
      quote: "Instead of losing track of leads, my clients now return on their own—even better than I hoped.",
      user: "Miguel, Personal Trainer",
      img: "/customers/miguel.jpg"
    },
    {
      quote: "The reminders are game-changing. My bookings are more consistent, and my clients feel valued.",
      user: "Lisa, Mobile Groomer",
      img: "/customers/lisa.jpg"
    },
  ];
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 8000);
    return () => clearInterval(id);
  }, [testimonials.length]);
  const t = testimonials[idx];
  return (
    <div className="flex flex-col items-center max-w-md mx-auto transition-all duration-500">
      <div className="flex items-center gap-2 mb-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`w-2 h-2 rounded-full mx-1 ${
              i === idx ? "bg-indigo-600" : "bg-indigo-200"
            } transition`}
            onClick={() => setIdx(i)}
          />
        ))}
      </div>
      <div className="bg-indigo-50 rounded-xl shadow-lg p-6 text-gray-900">
        <p className="text-base italic mb-4">&ldquo;{t.quote}&rdquo;</p>
        <div className="flex items-center gap-3">
          <img src={t.img} className="rounded-full w-8 h-8 object-cover" alt={t.user}/>
          <span className="text-sm text-gray-700 font-semibold">{t.user}</span>
        </div>
      </div>
    </div>
  );
}

// FAQ Section Component
function FAQSection() {
  const items = [
    {
      q: "What happens after my free trial?",
      a: "You can choose a plan or continue on the free Starter plan—no card required until you’re ready to upgrade."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes! There are no contracts. Cancel or change your plan whenever you like from your dashboard."
    },
    {
      q: "Is my data secure?",
      a: "Absolutely. Your data is encrypted and never shared. We’re GDPR-ready from day one."
    },
    {
      q: "Do you have a mobile app?",
      a: "FollowUply is fully mobile-responsive. Native apps are coming soon!"
    },
  ];
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);
  return (
    <div className="max-w-2xl mx-auto">
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
    </div>
  );
}
