"use client";

import React from "react";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-svh bg-gray-50 text-gray-900">
        {/* Hero */}
        <section className="relative flex items-center justify-center min-h-svh w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 px-4 sm:px-8">
          {/* Background Accent Blobs */}
          <div className="pointer-events-none absolute -top-32 -left-32 w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full bg-indigo-400 opacity-20 blur-3xl z-0"></div>
          <div className="pointer-events-none absolute bottom-0 right-0 w-[180px] h-[180px] md:w-[340px] md:h-[340px] rounded-full bg-pink-400 opacity-20 blur-3xl z-0"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 text-indigo-300 rounded-full text-xs font-medium mb-6 shadow">
              🚀 Smarter client management • Modern CRM
            </span>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-md">
              More Repeat Clients.<br className="hidden sm:inline" />
              Less Work.
            </h1>
            <p className="mt-6 text-base xs:text-lg sm:text-xl text-gray-200 font-light max-w-xl mx-auto">
              FollowUply remembers every client for you — and tells you exactly who needs a follow-up today, so you never lose repeat business again.<br/>
              <span className="inline-block mt-4 border-l-4 border-indigo-400 pl-4 text-xs md:text-base text-indigo-200">Designed for solopreneurs, small business owners, and anyone who cares about their clients.</span>
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
                {/* fallback text */}
                Demo video unavailable
              </video>
              <span className="text-indigo-100 text-xs mt-3">See how it works in 30 seconds</span>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="relative px-2 xs:px-4 sm:px-6 py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 min-h-svh flex items-center">
          {/* Accent Blobs */}
          <div className="pointer-events-none absolute -top-16 md:-top-24 -right-16 md:-right-32 w-[180px] h-[180px] md:w-[340px] md:h-[340px] rounded-full bg-indigo-400 opacity-20 blur-3xl z-0"></div>
          <div className="pointer-events-none absolute left-0 bottom-0 w-[120px] h-[120px] md:w-[220px] md:h-[220px] rounded-full bg-pink-400 opacity-20 blur-3xl z-0"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center w-full">
            <span className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 text-indigo-300 rounded-full text-xs font-medium mb-6 shadow">
              The Problem Every Small Business Faces
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow mb-4">
              You lose clients — not because you’re bad, but because you’re <span className="bg-indigo-600 text-white px-2 py-1 rounded-md">busy</span>.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-200 font-light leading-relaxed">
              Most solopreneurs track clients in WhatsApp, Instagram, or notes. After a few weeks, it’s <span className="font-semibold text-indigo-300">impossible</span> to remember who hasn’t come back.
            </p>
            <p className="mt-2 text-sm text-indigo-100/80 font-normal max-w-xl mx-auto">
              Have you ever realized you forgot to check-in with a customer… when it’s already too late? FollowUply solves this. No client lost in the cracks, ever again. From grooming to consulting, make every client feel truly remembered.
            </p>

            {/* Modern Problem Grid */}
            <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
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
            <div className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-700 rounded-2xl shadow-2xl py-10 px-4 sm:px-8 md:px-16 flex flex-col items-center gap-3 w-full max-w-2xl mx-auto animate-fade-in-up">
              <h3 className="text-xl xs:text-2xl md:text-3xl font-bold text-white flex items-center gap-2 mb-2">
                <svg className="w-7 h-7 text-green-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                FollowUply fixes that.
              </h3>
              <p className="text-gray-100 text-base md:text-lg mt-2">
                Intelligent reminders and follow-up tools make sure no one slips through the cracks again.<br />
                <span className="block mt-2 text-indigo-100/80 text-sm">
                  Stay on top of every client — even on your busiest days.
                </span>
              </p>
              <ul className="text-left text-indigo-100/80 text-sm mt-4 mb-2 grid grid-cols-2 gap-2 w-full">
                <li>• Personal reminders you can customize</li>
                <li>• Multi-channel (WhatsApp, Email, SMS)</li>
                <li>• Seamless schedule integration</li>
                <li>• Easy onboarding & imports</li>
              </ul>
              <a
                href="/login"
                className="mt-6 px-7 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-indigo-100 font-semibold text-base shadow focus:outline-none border border-white/10 transition"
              >
                Try FollowUply Free
              </a>
            </div>
          </div>
        </section>

        {/* How FollowUply Works */}
        <section className="relative bg-gradient-to-br from-indigo-800 via-indigo-700 to-indigo-900 w-full min-h-svh py-10 sm:py-24 flex items-center overflow-hidden">
          {/* Animated floating shapes */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute left-1/2 top-0 w-52 sm:w-96 h-52 sm:h-96 opacity-30 blur-3xl bg-pink-500/50 rounded-full -translate-x-2/3 -translate-y-20 animate-pulse"></div>
            <div className="absolute right-0 bottom-0 w-32 sm:w-72 h-32 sm:h-72 opacity-20 blur-2xl bg-yellow-400/30 rounded-full translate-x-1/4 translate-y-1/3 animate-pulse-slow"></div>
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-6 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg mb-6">
              How FollowUply Works
            </h2>
            <p className="text-indigo-100 mt-2 mb-12 text-center max-w-2xl text-sm sm:text-base md:text-lg">
              Get more return visits, automate client outreach, and keep your calendar full.<br />
              <span className="text-indigo-200/80 mt-1 block">Seamlessly integrated into your flow, so you never miss a beat.</span>
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 w-full">
              {/* Step 1 */}
              <div className="bg-white/5 ring-1 ring-white/10 rounded-2xl px-6 xs:px-8 py-8 xs:py-12 shadow-xl hover:shadow-2xl transition flex flex-col items-center backdrop-blur">
                <span className="w-14 h-14 flex items-center justify-center mb-4 rounded-full bg-pink-500/30 text-pink-200 text-2xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zm0 0v4a4 4 0 01-4 4H8"></path></svg>
                </span>
                <div className="font-semibold text-white text-lg xs:text-xl mb-2">Add Your Clients</div>
                <div className="text-indigo-100/80 text-center text-sm xs:text-base mb-5">
                  Quickly import or enter client names, numbers, and last visit dates.<br />
                  <span className="text-indigo-200 text-sm">No complicated setup—just what you need.</span>
                </div>
                <button className="px-5 py-2 bg-indigo-600 rounded-lg text-indigo-50 font-semibold hover:bg-indigo-700 transition text-sm shadow-lg">
                  Import list
                </button>
                <p className="text-indigo-200/70 text-xs mt-2">
                  Use CSV or sync from your phone contacts.
                </p>
              </div>
              {/* Step 2 */}
              <div className="bg-white/5 ring-1 ring-white/10 rounded-2xl px-6 xs:px-8 py-8 xs:py-12 shadow-xl hover:shadow-2xl transition flex flex-col items-center backdrop-blur">
                <span className="w-14 h-14 flex items-center justify-center mb-4 rounded-full bg-yellow-400/30 text-yellow-100 text-2xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1M12 20h.01M6 18C3.33 15.31 2 13.09 2 10.9c0-3.44 2.68-6.13 6-6.13s6 2.69 6 6.13c0 2.19-1.33 4.41-4 7.1z" /></svg>
                </span>
                <div className="font-semibold text-white text-lg xs:text-xl mb-2">Automatic Tracking</div>
                <div className="text-indigo-100/80 text-center text-sm xs:text-base mb-5">
                  FollowUply highlights inactive clients automatically after 30 days.<br />
                  <span className="text-indigo-200 text-sm">You’ll always know who needs a nudge.</span>
                </div>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
                  <span className="px-2 py-0.5 bg-pink-300/50 text-xs text-pink-100 rounded">Smart reminders</span>
                  <span className="px-2 py-0.5 bg-yellow-300/50 text-xs text-yellow-900 rounded">No manual effort</span>
                  <span className="px-2 py-0.5 bg-indigo-300/30 text-xs text-indigo-100 rounded">Automated insights</span>
                </div>
              </div>
              {/* Step 3 */}
              <div className="bg-white/5 ring-1 ring-white/10 rounded-2xl px-6 xs:px-8 py-8 xs:py-12 shadow-xl hover:shadow-2xl transition flex flex-col items-center backdrop-blur">
                <span className="w-14 h-14 flex items-center justify-center mb-4 rounded-full bg-green-400/30 text-green-200 text-2xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12h.01M12 15v.01M12 8.5v.01M8.991 12c0-1.659 1.35-3 3.009-3s3.009 1.341 3.009 3-1.35 3-3.009 3-3.009-1.341-3.009-3z" /></svg>
                </span>
                <div className="font-semibold text-white text-lg xs:text-xl mb-2">Message in One Click</div>
                <div className="text-indigo-100/80 text-center text-sm xs:text-base mb-5">
                  Send WhatsApp, SMS, or email reminders—or call, right from the app.<br />
                  <span className="text-indigo-200 text-sm">No copy-paste. No awkward messages.</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2 justify-center w-full">
                  <button className="flex items-center px-4 py-2 text-xs bg-white/10 hover:bg-white/20 text-green-100 rounded-lg shadow transition font-medium gap-2">
                    <svg width="18" height="18" fill="none" viewBox="0 0 32 32"><path d="M16 6A10 10 0 106 16 10.011 10.011 0 0016 6zm5.324 13.482l-1.636 1.636c-.309.307-.795.307-1.104 0l-2.357-2.352a.783.783 0 010-1.103l1.217-1.217-3.399-3.406a.78.78 0 010-1.103l1.637-1.636a.78.78 0 011.103 0l3.399 3.399a.783.783 0 010 1.104l-1.217 1.216 2.352 2.357c.308.309.308.798-.001 1.104z" fill="currentColor"/></svg>
                    WhatsApp
                  </button>
                  <button className="flex items-center px-4 py-2 text-xs bg-white/10 hover:bg-white/20 text-indigo-100 rounded-lg shadow transition font-medium gap-2">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M21 8.53l-9 5.196-9-5.196M3 19.33V6.188c0-.556.45-1.078 1.027-1.078h15.946c.578 0 1.027.522 1.027 1.078V19.33c0 .556-.449 1.078-1.027 1.078H4.027C3.45 20.408 3 19.886 3 19.33z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Email
                  </button>
                  <button className="flex items-center px-4 py-2 text-xs bg-white/10 hover:bg-white/20 text-yellow-100 rounded-lg shadow transition font-medium gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-1"><path d="M2 6.5V6a2 2 0 012-2h16a2 2 0 012 2v.5M19 10a7 7 0 11-14 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Call
                  </button>
                </div>
              </div>
            </div>
            {/* Additional content row */}
            <div className="mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 w-full">
              <div className="flex-1 flex flex-col items-center md:items-start px-0 md:px-8 mb-8 md:mb-0">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  <svg className="w-7 h-7 text-indigo-100" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Effortless Set-up
                </h3>
                <p className="text-indigo-100/90 leading-relaxed mb-3 max-w-md">
                  Start in minutes, not hours. No tech skills required.
                  <br />
                  <span className="text-indigo-200 text-xs sm:text-sm">Focus on your clients, not your software.</span>
                </p>
                <ul className="text-indigo-200/80 text-xs sm:text-sm list-disc pl-4">
                  <li>No lengthy forms</li>
                  <li>Customizable onboarding steps</li>
                </ul>
              </div>
              <div className="flex-1 flex flex-col items-center md:items-start px-0 md:px-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  <svg className="w-7 h-7 text-indigo-100" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Never miss a follow-up
                </h3>
                <p className="text-indigo-100/90 leading-relaxed mb-3 max-w-md">
                  Smart nudges and automations ensure you always reach out at the best time.
                  <br />
                  <span className="text-indigo-200 text-xs sm:text-sm">Clients feel remembered—in a good way.</span>
                </p>
                <ul className="text-indigo-200/80 text-xs sm:text-sm list-disc pl-4">
                  <li>Auto-draft messages</li>
                  <li>Recommended outreach times</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="min-h-svh flex items-center px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center py-10 sm:py-20 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
              Why you’ll love FollowUply
            </h2>

            <ul className="mt-8 space-y-3 text-gray-600 text-base sm:text-lg">
              <li>
                <span className="font-medium text-green-600 mr-2">✓</span>
                Bring past clients back, automatically
              </li>
              <li>
                <span className="font-medium text-green-600 mr-2">✓</span>
                Save hours every week with reminders and nudges
              </li>
              <li>
                <span className="font-medium text-green-600 mr-2">✓</span>
                Fill up your empty slots without more marketing
              </li>
              <li>
                <span className="font-medium text-green-600 mr-2">✓</span>
                Works with WhatsApp—no new habits required
              </li>
              <li className="flex justify-center items-center gap-2 sm:gap-3">
                <span className="font-medium text-green-600">✓</span>
                <span>Mobile friendly</span>
                <span className="font-medium text-blue-600">✓</span>
                <span>Beautiful dashboard</span>
              </li>
            </ul>

            <p className="mt-6 font-medium text-gray-800">
              If it brings back just one client per month, it easily pays for itself.
            </p>
            {/* Added testimonial carousel */}
            <div className="mt-10 w-full">
              <TestimonialCarousel />
            </div>
          </div>
        </section>

        {/* Who it’s for */}
        <section className="min-h-svh flex items-center justify-center bg-gradient-to-r from-indigo-50 via-white to-sky-100 px-4 sm:px-6 py-0 relative">
          <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-12 py-12 md:py-24">
            <div className="flex-1 flex flex-col justify-center items-start text-left">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6">
                Who is FollowUply for?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                Tailored for every independent pro and small business that builds client loyalty.
              </p>
              <ul className="space-y-3 sm:space-y-4 text-base w-full">
                <li className="flex items-center gap-3">
                  <span className="rounded-full bg-green-100 p-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  Barbers & Salons
                </li>
                <li className="flex items-center gap-3">
                  <span className="rounded-full bg-blue-100 p-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  Personal Trainers & Coaches
                </li>
                <li className="flex items-center gap-3">
                  <span className="rounded-full bg-pink-100 p-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  Cleaners & Home Services
                </li>
                <li className="flex items-center gap-3">
                  <span className="rounded-full bg-orange-100 p-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  Freelancers & Consultants
                </li>
                <li className="flex items-center gap-3">
                  <span className="rounded-full bg-purple-100 p-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  And everyone with loyal, returning clients
                </li>
                <li className="flex items-center gap-3">
                  <span className="rounded-full bg-gray-200 p-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="currentColor" /><path strokeLinecap="round" strokeLinejoin="round" d="M10 7v3l2 2" stroke="currentColor" /></svg>
                  </span>
                  Appointment-based businesses, tutors, clinics, & more
                </li>
              </ul>
              <p className="mt-6 text-gray-500 text-xs sm:text-sm">
                If your business thrives on trusted relationships, FollowUply is built for you.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center relative mt-10 md:mt-0">
              <div className="w-full h-[320px] md:w-[320px] md:h-[380px] rounded-2xl shadow-2xl bg-gradient-to-br from-indigo-100 to-sky-200 p-4 sm:p-6 flex flex-col items-center justify-center">
                <img
                  src="/phone-mockup.png"
                  alt="App Dashboard"
                  className="w-32 sm:w-40 md:w-48 h-52 sm:h-64 md:h-72 object-contain rounded-xl shadow-xl mb-4"
                />
                <span className="text-indigo-700 mt-2 font-semibold text-xs sm:text-base">Modern. Intuitive. Mobile-first.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="min-h-svh flex flex-col items-center justify-center bg-gradient-to-tr from-black via-gray-900 to-indigo-900 relative px-4 sm:px-6 py-0">
          <div className="max-w-3xl w-full mx-auto text-center py-12 sm:py-24 relative">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-lg">
              Ready to stop losing clients you already earned?
            </h2>
            <p className="text-base sm:text-lg text-indigo-200 mb-8 sm:mb-10 font-medium">
              Experience the power of pro follow-ups—zero technical skills required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
              <a
                href="/signup"
                className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-sky-500 rounded-xl text-white font-semibold text-lg shadow-lg hover:scale-105 hover:bg-indigo-700 focus:outline-none transition"
              >
                Start Your Free Trial
              </a>
              <a
                href="#features"
                className="inline-block px-8 py-4 bg-white/10 text-indigo-100 border border-indigo-400 rounded-xl font-semibold text-lg hover:bg-white/20 hover:text-white focus:outline-none transition"
              >
                Explore Features
              </a>
            </div>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
              <div className="flex flex-col items-center">
                <span className="text-lg sm:text-2xl font-bold text-white">7-day trial</span>
                <span className="text-indigo-300 text-xs sm:text-sm">No card required</span>
              </div>
              <span className="text-indigo-800 text-2xl sm:text-3xl font-light hidden sm:inline-block">·</span>
              <div className="flex flex-col items-center">
                <span className="text-lg sm:text-2xl font-bold text-white">Cancel anytime</span>
                <span className="text-indigo-300 text-xs sm:text-sm">Risk-free experience</span>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 sm:h-40 bg-gradient-to-t from-black to-transparent z-0" />
        </section>

        {/* Features Section */}
        <section id="features" className="min-h-svh flex items-center justify-center bg-gradient-to-r from-gray-50 via-indigo-50 to-white px-4 sm:px-6 py-0">
          <div className="max-w-6xl w-full mx-auto text-center py-12 sm:py-24">
            <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 text-gray-900">
              Features that help you grow
            </h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 text-left">
              <FeatureCard
                title="Automated Follow-Ups"
                description="Never miss a returning client. Smart reminders flag when a client goes quiet—so you can follow up before they forget."
              />
              <FeatureCard
                title="One-Click Messaging"
                description="Send WhatsApp or email reminders in seconds, from your phone or desktop. Just tap, personalize, and send."
              />
              <FeatureCard
                title="Client Management"
                description="Import contacts, group them, and track every interaction. Your customer history, always at your fingertips."
              />
              <FeatureCard
                title="Customizable Reminders"
                description="Set the right follow-up interval for each client—personalize messages and timing to delight your regulars."
              />
              <FeatureCard
                title="Activity Dashboard"
                description="See who’s overdue, who’s coming back, and who needs attention—all in one beautiful dashboard."
              />
              <FeatureCard
                title="Multi-Platform"
                description="Available on web and mobile. Sync your contacts securely and work wherever you are."
              />
              {/* New: Add a feature */}
              <FeatureCard
                title="Secure Data & Privacy"
                description="Your client data is encrypted and never shared. GDPR-ready from day one."
              />
            </div>
            <p className="mt-8 text-gray-600 text-base">
              More features coming soon: Google Calendar integration, advanced analytics, and custom branding options.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="min-h-svh flex items-center justify-center bg-white px-4 sm:px-6 py-0">
          <div className="max-w-6xl w-full mx-auto text-center py-12 sm:py-24">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-gray-900">Simple Pricing</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-14 font-medium">
              Start free, upgrade if you love it. No contracts, no hidden fees—just value.
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
              {/* Basic Plan */}
              <div className="relative border border-gray-100 rounded-3xl p-6 sm:p-10 bg-gray-50 flex flex-col items-center shadow hover:shadow-2xl transition-all duration-200 hover:-translate-y-2">
                <div className="rounded-full bg-gray-200 px-4 py-1 text-gray-700 text-xs font-semibold mb-4">
                  Starter
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Free</h3>
                <p className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">€0</p>
                <ul className="space-y-3 text-gray-700 mb-8 text-left w-full">
                  <li>✔ Up to 20 clients</li>
                  <li>✔ Manual follow-up tracking</li>
                  <li>✔ Email reminders</li>
                  <li>✔ Community forum support</li>
                </ul>
                <a
                  href="/signup"
                  className="inline-block px-6 py-4 bg-gradient-to-r from-indigo-600 to-sky-500 text-white rounded-xl font-semibold w-full text-center transition hover:scale-105"
                >
                  Get Started Free
                </a>
              </div>

              {/* Pro Plan */}
              <div className="relative border-4 border-indigo-600 rounded-3xl p-6 sm:p-10 bg-white flex flex-col items-center shadow-2xl z-10 scale-105">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-indigo-700 text-white text-xs px-4 py-2 rounded-full font-bold shadow">Most Popular</span>
                <div className="rounded-full bg-indigo-100 px-4 py-1 text-indigo-800 text-xs font-semibold mb-4">
                  Pro
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Pro</h3>
                <p className="text-4xl sm:text-5xl font-bold mb-4 text-indigo-700">€9<span className="text-lg sm:text-xl font-normal text-gray-500">/mo</span></p>
                <ul className="space-y-3 text-gray-700 mb-8 text-left w-full">
                  <li>✔ Unlimited clients</li>
                  <li>✔ Smart automations</li>
                  <li>✔ WhatsApp & Email reminders</li>
                  <li>✔ Advanced dashboard</li>
                  <li>✔ Priority email support</li>
                </ul>
                <a
                  href="/signup"
                  className="inline-block px-6 py-4 bg-gradient-to-r from-indigo-700 to-indigo-500 text-white rounded-xl font-semibold w-full text-center shadow-lg hover:scale-105 transition"
                >
                  Start Free Trial
                </a>
              </div>

              {/* Business Plan */}
              <div className="relative border border-gray-100 rounded-3xl p-6 sm:p-10 bg-gray-50 flex flex-col items-center shadow hover:shadow-2xl transition-all duration-200 hover:-translate-y-2">
                <div className="rounded-full bg-yellow-100 px-4 py-1 text-yellow-700 text-xs font-semibold mb-4">
                  Business
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Business</h3>
                <p className="text-4xl sm:text-5xl font-bold mb-4 text-yellow-700">€19<span className="text-lg sm:text-xl font-normal text-gray-500">/mo</span></p>
                <ul className="space-y-3 text-gray-700 mb-8 text-left w-full">
                  <li>✔ Everything in Pro</li>
                  <li>✔ Team management (up to 5 users)</li>
                  <li>✔ Custom branding & messages</li>
                  <li>✔ Advanced reporting</li>
                  <li>✔ Dedicated support</li>
                </ul>
                <a
                  href="#contact"
                  className="inline-block px-6 py-4 border border-yellow-500 bg-white text-yellow-700 rounded-xl font-semibold w-full text-center hover:bg-yellow-50 hover:scale-105 transition"
                >
                  Contact Sales
                </a>
              </div>
            </div>
            <div className="mt-8 sm:mt-10 text-gray-400 text-xs sm:text-sm text-center">
              All prices include VAT where applicable. <br />
              <span className="font-medium text-indigo-700">7-day free trial on all plans!</span>
            </div>
            {/* Added FAQ */}
            <div className="mt-12">
              <FAQSection />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-svh flex items-center justify-center bg-gradient-to-r from-sky-50 via-indigo-50 to-white px-4 sm:px-6 py-0">
          <div className="max-w-3xl w-full mx-auto text-center py-12 sm:py-24 rounded-3xl shadow-lg bg-white/80 backdrop-blur">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-indigo-900">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-10 text-base sm:text-lg">
              Questions? Feedback? Our team will get back to you within 24 hours.
            </p>
            <form className="grid gap-5 sm:gap-6 text-left">
              <div className="flex flex-col w-full">
                <label htmlFor="name" className="mb-2 font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-200 rounded-lg p-4 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="email" className="mb-2 font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-200 rounded-lg p-4 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="message" className="mb-2 font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="w-full border border-gray-200 rounded-lg p-4 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-sky-500 text-white rounded-xl font-bold text-lg shadow hover:scale-105 focus:outline-none transition"
              >
                Send Message
              </button>
            </form>
            <div className="mt-8 sm:mt-10 text-gray-400 text-xs sm:text-sm text-center">
              Prefer email? Reach us at <a href="mailto:hello@followuply.com" className="text-indigo-600 font-medium hover:underline">hello@followuply.com</a>
              <br />
              <span className="block mt-2">We are also available at <span className="text-indigo-700">+1 234-567-890</span> (Mon–Fri, 9am–6pm GMT)</span>
            </div>
            {/* New: Location/contact info row */}
            <div className="mt-8 text-indigo-600/70 text-xs flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center items-center">
              <span>FollowUply HQ: 123 Business Lane, Amsterdam</span>
              <span>Help Center: <a className="underline" href="/help">FAQ & Docs</a></span>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

// Testimonials Carousel Component
function TestimonialCarousel() {
  // Simple/fake carousel, can be replaced with swiper.js or splide for a real carousel
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
  // rotate every 10s
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 8000);
    return () => clearInterval(id);
  }, []);
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

// No longer using Step so we comment it out
// function Step({ title, description }: { title: string; description: string }) {
//   return (
//     <div className="bg-white border rounded-2xl p-6 text-center">
//       <h3 className="font-medium text-lg">{title}</h3>
//       <p className="mt-3 text-gray-600">{description}</p>
//     </div>
//   );
// }
