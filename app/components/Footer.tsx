"use client";

import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Logo and description */}
        <div>
          <Link href="/" className="text-2xl font-bold text-white hover:text-gray-200">
            FollowUply
          </Link>
          <p className="mt-4 text-gray-400">
            The easiest way to keep your clients coming back. Automate follow-ups with WhatsApp and email.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p>Email: <a href="mailto:hello@followuply.com" className="hover:text-white">followuply@gmail.com</a></p>
          <p>Phone: <a href="tel:+353871234567" className="hover:text-white">+353 87 123 4567</a></p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8">
        <p className="text-center text-gray-500 py-4 text-sm">
          &copy; {new Date().getFullYear()} FollowUply. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
