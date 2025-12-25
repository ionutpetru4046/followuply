import Link from "next/link";

export default function Sidebar() {
  const links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Clients", href: "/dashboard/clients" },
    { name: "Messages", href: "/dashboard/messages" },
    { name: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md flex-shrink-0 h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-bold">FollowUply</h2>
      </div>
      <nav className="flex flex-col p-6 space-y-2">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-gray-700 hover:text-black font-medium transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
