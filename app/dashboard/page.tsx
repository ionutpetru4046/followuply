// app/dashboard/page.tsx
"use client";

import { useMemo } from "react";

type FollowUpClient = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  lastVisit: string;
};

const MOCK_CLIENTS: FollowUpClient[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    phone: "+353871234567",
    email: "sarah@email.com",
    lastVisit: "2025-10-10",
  },
  {
    id: "2",
    name: "Mark O'Connor",
    phone: "+353861112233",
    lastVisit: "2025-09-20",
  },
  {
    id: "3",
    name: "Emma Walsh",
    phone: "+353851998877",
    lastVisit: "2025-08-15",
  },
];

function daysSince(date: string) {
  const today = new Date();
  const past = new Date(date);
  const diff = today.getTime() - past.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export default function DashboardPage() {
  const INACTIVITY_THRESHOLD = 30;

  const followUps = useMemo(() => {
    return MOCK_CLIENTS.map((client) => ({
      ...client,
      daysInactive: daysSince(client.lastVisit),
    })).filter((client) => client.daysInactive >= INACTIVITY_THRESHOLD);
  }, []);

  return (
    <main className="p-6 max-w-6xl mx-auto space-y-8">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard title="Total Clients" value={MOCK_CLIENTS.length} />
        <StatCard title="Inactive Clients" value={followUps.length} />
        <StatCard title="Follow-ups Today" value={followUps.length} />
      </section>

      {/* Follow-up list */}
      <section>
        <h2 className="text-lg font-medium mb-4">Clients to Follow Up</h2>

        <div className="bg-white rounded-xl border divide-y">
          {followUps.map((client) => (
            <FollowUpRow key={client.id} client={client} />
          ))}

          {followUps.length === 0 && (
            <p className="p-6 text-sm text-gray-500">
              No follow-ups needed today.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

function StatCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-white border rounded-xl p-4">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  );
}

function FollowUpRow({ client }: { client: any }) {
  return (
    <div className="p-4 flex items-center justify-between gap-4">
      <div>
        <p className="font-medium">{client.name}</p>
        <p className="text-sm text-gray-500">
          Last visit {client.daysInactive} days ago
        </p>
      </div>

      <div className="flex gap-2">
        <a
          href={`https://wa.me/${client.phone.replace("+", "")}`}
          target="_blank"
          className="px-3 py-1.5 rounded-lg border text-sm hover:bg-gray-50"
        >
          WhatsApp
        </a>

        {client.email && (
          <a
            href={`mailto:${client.email}`}
            className="px-3 py-1.5 rounded-lg border text-sm hover:bg-gray-50"
          >
            Email
          </a>
        )}

        <button className="px-3 py-1.5 rounded-lg bg-black text-white text-sm">
          Mark Done
        </button>
      </div>
    </div>
  );
}
