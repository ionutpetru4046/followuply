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
        <section className="px-6 py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold">
              You lose clients — not because you’re bad, but because you’re
              busy.
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Most small businesses track clients in WhatsApp, Instagram, or
              notes. After a few weeks, it’s impossible to remember who hasn’t
              come back.
            </p>

            <ul className="mt-6 space-y-2 text-gray-600">
              <li>• Empty appointment slots</li>
              <li>• Lost repeat revenue</li>
              <li>• “I should message them” — but you forget</li>
            </ul>

            <p className="mt-6 font-medium">FollowUply fixes that.</p>
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
