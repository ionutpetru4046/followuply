import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-gray-50 text-gray-900">
    
      {/* Hero */}
      <section className="px-6 pt-24 pb-20 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
          Bring clients back without remembering anything.
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          FollowUply tells you exactly which clients to message today so you never
          lose repeat business again.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-black text-white text-sm font-medium">
            Start free for 7 days
          </button>
        </div>

        <p className="mt-3 text-sm text-gray-500">
          No credit card required
        </p>
      </section>

      {/* Problem */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">
            You lose clients — not because you’re bad, but because you’re busy.
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Most small businesses track clients in WhatsApp, Instagram, or notes.
            After a few weeks, it’s impossible to remember who hasn’t come back.
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
          <h2 className="text-3xl font-semibold">
            Who FollowUply is for
          </h2>

          <p className="mt-6 text-gray-600">
            Barbers, salons, personal trainers, cleaners, freelancers —
            anyone running a service business with repeat clients.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-md mx-auto text-center border rounded-2xl p-8">
          <h2 className="text-3xl font-semibold">Simple pricing</h2>

          <p className="mt-6 text-4xl font-semibold">€9 / month</p>

          <ul className="mt-6 space-y-2 text-gray-600">
            <li>• Unlimited clients</li>
            <li>• Automatic follow-up tracking</li>
            <li>• WhatsApp & email reminders</li>
            <li>• Mobile-friendly dashboard</li>
          </ul>

          <button className="mt-8 w-full px-6 py-3 rounded-xl bg-black text-white text-sm font-medium">
            Start free for 7 days
          </button>

          <p className="mt-3 text-sm text-gray-500">
            Cancel anytime
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
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-6">Pricing</h2>
    <p className="text-gray-600 mb-8">
      One simple plan. No hidden fees. Free trial for 7 days.
    </p>

    <div className="border rounded-2xl p-8">
      <p className="text-4xl font-bold mb-4">€9 / month</p>
      <ul className="space-y-2 text-gray-600 mb-6">
        <li>• Unlimited clients</li>
        <li>• Automatic follow-up tracking</li>
        <li>• WhatsApp & email reminders</li>
        <li>• Mobile-friendly dashboard</li>
      </ul>
      <a
        href="/register"
        className="inline-block px-6 py-3 bg-black text-white rounded-xl font-medium"
      >
        Start Free Trial
      </a>
    </div>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="px-6 py-20 bg-gray-50">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
    <p className="text-gray-600 mb-8">
      Have questions or feedback? Reach out and we&apos;ll respond within 24 hours.
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

function Step({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border rounded-2xl p-6 text-center">
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="mt-3 text-gray-600">{description}</p>
    </div>
  );
}
