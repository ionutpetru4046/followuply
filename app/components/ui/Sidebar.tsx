import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Clients", href: "/dashboard/clients" },
    { name: "Messages", href: "/dashboard/messages" },
    { name: "Settings", href: "/dashboard/settings" },
    { name: "FollowUps", href: "/dashboard/followups" },
  ];

  const [collapsed, setCollapsed] = useState(true);

  return (
    <aside
      className={`bg-white shadow-md shrink-0 h-screen flex flex-col transition-all duration-200 ${
        collapsed ? "w-16" : "w-64"
      }`}
      style={{ minWidth: collapsed ? "4rem" : "16rem" }}
    >
      {/* Collapse/Expand Button */}
      <div className="flex items-center justify-between p-4 border-b">
        <button
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => setCollapsed((c) => !c)}
          className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition"
        >
          {/* Hamburger/Menu icon */}
          {collapsed ? (
            <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
              <rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor" />
              <rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor" />
              <rect x="4" y="16" width="16" height="2" rx="1" fill="currentColor" />
            </svg>
          ) : (
            // Left arrow icon for collapse
            <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
        {!collapsed && (
          <span className="ml-1 text-2xl font-bold text-gray-800">FollowUply</span>
        )}
      </div>
      <nav className={`flex flex-col p-2 space-y-3 mt-4`}>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg 
              transition-colors text-gray-700 hover:text-black 
              hover:bg-gray-100 font-medium
              ${collapsed ? "justify-center" : ""}`}
          >
            {/* Optionally, you could add icons here, using react-icons or similar */}
            {!collapsed && <span>{link.name}</span>}
            {collapsed && (
              <span className="sr-only">{link.name}</span>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
