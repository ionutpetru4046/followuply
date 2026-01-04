import { Reminder } from "@/lib/types";

type Props = {
  reminders: Reminder[];
};

export default function SmartRemindersPanel({ reminders }: Props) {
  if (reminders.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-8 text-center text-gray-500">
        No reminders yet. Add clients or schedule follow-ups to get started.
      </div>
    );
  }

  function formatDateTime(iso: string) {
    const date = new Date(iso);

    return date.toISOString().replace("T", " ").slice(0, 16);
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'overdue':
        return 'text-red-600';
      case 'upcoming':
        return 'text-yellow-500';
      case 'done':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium">Client</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Type</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Date & Time</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Message</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reminders.map((reminder) => (
            <tr key={reminder.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-3 font-medium">{reminder.clientName}</td>
              <td className="px-4 py-3">{reminder.type}</td>
              <td className={`px-4 py-3 ${getStatusColor(reminder.status)}`}>
                {formatDateTime(reminder.dateTime)}
              </td>
              <td className="px-4 py-3">{reminder.message}</td>
              <td className="px-4 py-3 space-x-2">
                <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Send Now
                </button>
                <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
                  Snooze
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
