import DashboardShell from "../components/ui/DashboardShell";
import { Card } from "../components/ui/card";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <h3 className="font-semibold">Total Clients</h3>
          <p className="mt-2 text-gray-600">24 clients</p>
        </Card>

        <Card>
          <h3 className="font-semibold">Pending Follow-ups</h3>
          <p className="mt-2 text-gray-600">5 clients</p>
        </Card>

        <Card>
          <h3 className="font-semibold">Revenue</h3>
          <p className="mt-2 text-gray-600">€720</p>
        </Card>
      </div>
    </DashboardShell>
  );
}
