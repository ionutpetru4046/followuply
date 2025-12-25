"use client";

import { useState } from "react";
import DashboardShell from "../../components/ui/DashboardShell";
import { Card } from "../../components/ui/card";

export default function SettingsPage() {
  const [user, setUser] = useState({
    name: "Admin",
    email: "admin@followuply.com",
    password: "",
  });

  const saveSettings = () => {
    alert("Settings saved (frontend only)");
  };

  return (
    <DashboardShell>
      <div className="space-y-6 max-w-2xl">
        <h1 className="text-2xl font-bold">Settings</h1>

        <Card>
          <h2 className="font-semibold mb-4">Profile</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="border rounded-lg p-2"
            />
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="border rounded-lg p-2"
            />
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="border rounded-lg p-2"
            />
            <button
              onClick={saveSettings}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Save
            </button>
          </div>
        </Card>
      </div>
    </DashboardShell>
  );
}
