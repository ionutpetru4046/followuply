import { Client } from "@/lib/types";

type Props = {
  clients: Client[];
};

// ✅ Hydration-safe date formatter (no locale, no timezone mismatch)
function formatDate(dateString: string) {
  const date = new Date(dateString);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}

export default function ClientsTable({ clients }: Props) {
  if (clients.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-8 text-center text-gray-500">
        No clients yet. Add your first client to start tracking follow-ups.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border">
      <table className="w-full border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium">Name</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Email</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
            <th className="px-4 py-3 text-left text-sm font-medium">
              Next Follow-up
            </th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id} className="border-t">
              <td className="px-4 py-3">{client.name}</td>
              <td className="px-4 py-3 text-gray-600">{client.email}</td>
              <td className="px-4 py-3 capitalize">{client.status}</td>
              <td className="px-4 py-3">
                {client.nextFollowUp
                  ? formatDate(client.nextFollowUp)
                  : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
