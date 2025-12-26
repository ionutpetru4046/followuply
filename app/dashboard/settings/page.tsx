"use client";

import { useState } from "react";
import DashboardShell from "../../components/ui/DashboardShell";
import { Card } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  const [user, setUser] = useState({
    name: "Admin",
    email: "admin@followuply.com",
    password: "",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const saveSettings = async () => {
    setIsSaving(true);
    setSuccess(false);
    setTimeout(() => {
      setIsSaving(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }, 1100);
  };

  return (
    <DashboardShell>
      <div className="max-w-2xl mx-auto pt-4 pb-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight mb-1">Settings</h1>
            <div className="text-sm text-muted-foreground">Personalize your Followuply account.</div>
          </div>
        </div>

        <Card className="p-0 overflow-hidden border-0 shadow-lg bg-gradient-to-br from-white via-blue-50 to-gray-100">
          <form
            className="p-8 space-y-5"
            onSubmit={e => {
              e.preventDefault();
              saveSettings();
            }}
          >
            <h2 className="font-semibold text-lg mb-0 text-blue-900/80">Profile</h2>

            <div className="grid md:grid-cols-2 gap-x-6 gap-y-5">
              <Field>
                <label className="block mb-1 font-semibold text-blue-900">Name</label>
                <Input
                  placeholder="Name"
                  autoComplete="name"
                  className="bg-white/60 ring-1 ring-blue-200 focus:ring-2 focus:ring-blue-400 transition"
                  value={user.name}
                  onChange={e => setUser({ ...user, name: e.target.value })}
                  disabled={isSaving}
                />
              </Field>

              <Field>
                <label className="block mb-1 font-semibold text-blue-900">Email</label>
                <Input
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  className="bg-white/60 ring-1 ring-blue-200 focus:ring-2 focus:ring-blue-400 transition"
                  value={user.email}
                  onChange={e => setUser({ ...user, email: e.target.value })}
                  disabled={isSaving}
                />
              </Field>

              <Field className="md:col-span-2">
                <label className="block mb-1 font-semibold text-blue-900">Password</label>
                <Input
                  type="password"
                  autoComplete="new-password"
                  placeholder="New Password"
                  className="bg-white/60 ring-1 ring-blue-200 focus:ring-2 focus:ring-blue-400 transition"
                  value={user.password}
                  onChange={e => setUser({ ...user, password: e.target.value })}
                  disabled={isSaving}
                />
                <div className="text-xs text-muted-foreground mt-1">Leave blank to keep current password.</div>
              </Field>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <Button
                type="submit"
                className={cn(
                  "transition-all w-full md:w-auto text-base font-semibold bg-blue-600 hover:bg-blue-700 border-0 shadow-md",
                  isSaving && "opacity-75 pointer-events-none"
                )}
                disabled={isSaving}
              >
                {isSaving ? (
                  <span className="flex items-center gap-2">
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Saving...
                  </span>
                ) : (
                  "Save Changes"
                )}
              </Button>
              {success && (
                <span className="text-green-600 text-sm font-medium transition-opacity animate-in fade-in">
                  Saved!
                </span>
              )}
            </div>
          </form>
        </Card>
      </div>
    </DashboardShell>
  );
}
