"use client";

import { useState } from "react";
import DashboardShell from "../../components/ui/DashboardShell";
import { Card } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
          <div className="space-y-4">
            <Field>
              <label className="block mb-1 font-medium">Name</label>
              <Input
                placeholder="Name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </Field>

            <Field>
              <label className="block mb-1 font-medium">Email</label>
              <Input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </Field>

            <Field>
              <label className="block mb-1 font-medium">Password</label>
              <Input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </Field>

            <Button onClick={saveSettings} className="w-full md:w-auto">
              Save
            </Button>
          </div>
        </Card>
      </div>
    </DashboardShell>
  );
}
