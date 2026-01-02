import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 text-gray-900">
        {/* Hero */}
        <section className="relative flex items-center justify-center min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 px-4 sm:px-8">
          {/* Background Accent Blobs */}
          <div className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-indigo-400 opacity-20 blur-3xl z-0"></div>
          <div className="pointer-events-none absolute bottom-0 right-0 w-[340px] h-[340px] rounded-full bg-pink-400 opacity-20 blur-3xl z-0"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 text-indigo-300 rounded-full text-xs font-medium mb-6 shadow">
              🚀 Smarter client management • Modern CRM
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-md">
              More Repeat Clients.<br className="hidden sm:inline" />
              Less Work.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-200 font-light max-w-xl mx-auto">
              FollowUply remembers every client for you — and tells you exactly who needs a follow-up today, so you never lose repeat business again.<br/>
              <span className="inline-block mt-4 border-l-4 border-indigo-400 pl-4 text-base text-indigo-200">Designed for solopreneurs, small business owners, and anyone who cares about their clients.</span>
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
            <p className="mt-5 text-sm text-gray-300 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-green-400 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              No credit card required • Cancel anytime
            </p>
            {/* Extra modern UI element: Trust bar or customer logos (demo) */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 opacity-80">
              <span className="text-xs text-gray-300/70">Trusted by</span>
              <img src="/customers/customer1.svg" alt="Customer 1" className="w-20 h-6 grayscale opacity-60" />
              <img src="/customers/customer2.svg" alt="Customer 2" className="w-20 h-6 grayscale opacity-60" />
              <img src="/customers/customer3.svg" alt="Customer 3" className="w-20 h-6 grayscale opacity-60" />
              <span className="text-xs text-gray-300/70 hidden sm:inline">and more...</span>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="relative px-6 py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">
          {/* Accent Blobs */}
          <div className="pointer-events-none absolute -top-24 -right-32 w-[340px] h-[340px] rounded-full bg-indigo-400 opacity-20 blur-3xl z-0"></div>
          <div className="pointer-events-none absolute left-0 bottom-0 w-[220px] h-[220px] rounded-full bg-pink-400 opacity-20 blur-3xl z-0"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 text-indigo-300 rounded-full text-xs font-medium mb-6 shadow">
              The Problem Every Small Business Faces
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow mb-4">
              You lose clients — not because you’re bad, but because you’re <span className="bg-indigo-600 text-white px-2 py-1 rounded-md">busy</span>.
            </h2>

            <p className="mt-4 text-lg text-gray-200 font-light leading-relaxed">
              Most solopreneurs track clients in WhatsApp, Instagram, or notes. After a few weeks, it’s <span className="font-semibold text-indigo-300">impossible</span> to remember who hasn’t come back.
            </p>

            {/* Modern Problem Grid */}
            <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="bg-white/5 ring-1 ring-white/10 rounded-xl px-6 py-8 backdrop-blur shadow-lg hover:shadow-xl transition flex flex-col items-center">
                <span className="w-12 h-12 flex items-center justify-center mb-3 rounded-full bg-indigo-500/30 text-indigo-200">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 14v7m0 0H5m3 0h3m6-7v7m0 0h-3m3 0h3M12 7v7m0 0h-3m3 0h3" /></svg>
                </span>
                <div className="font-medium text-white mb-1">Empty schedule slots</div>
                <div className="text-gray-300 text-sm">Days with no clients returning</div>
              </div>
              <div className="bg-white/5 ring-1 ring-white/10 rounded-xl px-6 py-8 backdrop-blur shadow-lg hover:shadow-xl transition flex flex-col items-center">
                <span className="w-12 h-12 flex items-center justify-center mb-3 rounded-full bg-pink-500/30 text-pink-200">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12h.01M12 15v.01M12 8.5v.01M8.991 12c0-1.659 1.35-3 3.009-3s3.009 1.341 3.009 3-1.35 3-3.009 3-3.009-1.341-3.009-3z" /></svg>
                </span>
                <div className="font-medium text-white mb-1">Lost repeat revenue</div>
                <div className="text-gray-300 text-sm">Forget to follow-up = lost income</div>
              </div>
              <div className="bg-white/5 ring-1 ring-white/10 rounded-xl px-6 py-8 backdrop-blur shadow-lg hover:shadow-xl transition flex flex-col items-center">
                <span className="w-12 h-12 flex items-center justify-center mb-3 rounded-full bg-yellow-400/30 text-yellow-100">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1M12 20h.01M6 18C3.33 15.31 2 13.09 2 10.9c0-3.44 2.68-6.13 6-6.13s6 2.69 6 6.13c0 2.19-1.33 4.41-4 7.1z" /></svg>
                </span>
                <div className="font-medium text-white mb-1">“I should message them…”</div>
                <div className="text-gray-300 text-sm">But things slip through the cracks</div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-12 flex items-center w-full max-w-lg mx-auto">
              <div className="flex-grow border-t border-white/20"></div>
              <span className="mx-6 text-indigo-300 text-sm font-semibold uppercase tracking-widest">The Solution</span>
              <div className="flex-grow border-t border-white/20"></div>
            </div>

            {/* Animated Solution Card */}
            <div className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-700 rounded-2xl shadow-2xl py-10 px-8 md:px-16 flex flex-col items-center gap-3 w-full max-w-2xl mx-auto animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2 mb-2">
                <svg className="w-7 h-7 text-green-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                FollowUply fixes that.
              </h3>
              <p className="text-gray-100 text-base md:text-lg mt-2">
                Intelligent reminders and follow-up tools make sure no one slips through the cracks again.<br />
                <span className="block mt-2 text-indigo-100/80 text-sm">
                  Stay on top of every client — even on your busiest days.
                </span>
              </p>
              <a
                href="/login"
                className="mt-6 px-7 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-indigo-100 font-semibold text-base shadow focus:outline-none border border-white/10 transition"
              >
                Try FollowUply Free
              </a>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center">
              How FollowUply works
            </h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Step
                title="Add your clients"
                description="Name, phone, last visit. That’s it."
              />
              <Step
                title="We track inactivity"
                description="Clients who haven’t returned in 30 days are flagged automatically."
              />
              <Step
                title="Message in one click"
                description="WhatsApp or email — directly from the app."
              />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold">
              Built to bring clients back
            </h2>

            <ul className="mt-8 space-y-3 text-gray-600">
              <li>• Brings past clients back</li>
              <li>• Saves time every day</li>
              <li>• Fills your schedule</li>
              <li>• Works with WhatsApp — no new habits</li>
            </ul>

            <p className="mt-6 font-medium">
              If it brings back one client per month, it pays for itself.
            </p>
          </div>
        </section>

        {/* Who it’s for */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold">Who FollowUply is for</h2>

            <p className="mt-6 text-gray-600">
              Barbers, salons, personal trainers, cleaners, freelancers — anyone
              running a service business with repeat clients.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold">
            Stop losing clients you already earned.
          </h2>

          <button className="mt-8 px-6 py-3 rounded-xl bg-black text-white text-sm font-medium">
            Start your free trial
          </button>
        </section>

        {/* Features Section */}
        <section id="features" className="px-6 py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-12">Features</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <FeatureCard
                title="Automated Follow-Ups"
                description="FollowUply automatically shows clients who haven't returned in 30 days."
              />
              <FeatureCard
                title="One-Click Messaging"
                description="Send WhatsApp or email reminders directly from the dashboard."
              />
              <FeatureCard
                title="Client Management"
                description="Add, edit, and track all your clients in one simple app."
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="px-6 py-20 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Pricing</h2>
            <p className="text-gray-600 mb-12">
              Choose the plan that fits your business. All plans have a free 7-day trial and no hidden fees.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <div className="border rounded-2xl p-8 bg-white flex flex-col items-center shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Basic</h3>
                <p className="text-4xl font-bold mb-4">Free</p>
                <ul className="space-y-2 text-gray-600 mb-6 text-left">
                  <li>• Up to 20 clients</li>
                  <li>• Manual follow-up tracking</li>
                  <li>• Email reminders only</li>
                  <li>• Community support</li>
                </ul>
                <a
                  href="/login"
                  className="inline-block px-6 py-3 bg-black text-white rounded-xl font-medium w-full"
                >
                  Get Started
                </a>
              </div>

              {/* Pro Plan */}
              <div className="border-2 border-black rounded-2xl p-8 bg-gray-50 flex flex-col items-center shadow-lg relative z-10 scale-105">
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-full font-semibold">Most Popular</span>
                <h3 className="text-xl font-semibold mb-2">Pro</h3>
                <p className="text-4xl font-bold mb-4">€9<span className="text-base font-normal">/mo</span></p>
                <ul className="space-y-2 text-gray-600 mb-6 text-left">
                  <li>• Unlimited clients</li>
                  <li>• Automatic follow-up tracking</li>
                  <li>• WhatsApp & email reminders</li>
                  <li>• Priority email support</li>
                </ul>
                <a
                  href="/login"
                  className="inline-block px-6 py-3 bg-black text-white rounded-xl font-medium w-full"
                >
                  Start Free Trial
                </a>
              </div>

              {/* Business Plan */}
              <div className="border rounded-2xl p-8 bg-white flex flex-col items-center shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Business</h3>
                <p className="text-4xl font-bold mb-4">€19<span className="text-base font-normal">/mo</span></p>
                <ul className="space-y-2 text-gray-600 mb-6 text-left">
                  <li>• Everything in Pro</li>
                  <li>• Team management (up to 5 users)</li>
                  <li>• Advanced reporting</li>
                  <li>• Dedicated support</li>
                </ul>
                <a
                  href="/login"
                  className="inline-block px-6 py-3 bg-black text-white rounded-xl font-medium w-full"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              Have questions or feedback? Reach out and we&apos;ll respond
              within 24 hours.
            </p>

            <form className="grid gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-3"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full border rounded-lg p-3"
                rows={5}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-black text-white rounded-xl font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

function Step({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white border rounded-2xl p-6 text-center">
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="mt-3 text-gray-600">{description}</p>
    </div>
  );
}
