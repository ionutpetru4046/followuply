import DashboardShell from "../components/ui/DashboardShell";
import { Card } from "../../components/ui/card";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <h3 className="font-semibold text-lg">Total Clients</h3>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">24 clients</p>
        </Card>

        <Card>
          <h3 className="font-semibold text-lg">Pending Follow-ups</h3>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">5 clients</p>
        </Card>

        <Card>
          <h3 className="font-semibold text-lg">Revenue</h3>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">€720</p>
        </Card>
      </div>
    </DashboardShell>
  );
}
