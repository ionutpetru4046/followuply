'use client'

import { useState } from "react";
import DashboardShell from "../components/ui/DashboardShell";
import ClientsTable from "./components/ClientsTable";
import { Card } from "../../components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Client } from "@/lib/types";

const fakeRecentActivity = [
  {
    user: "Alice",
    action: "added new follow-up",
    time: "2h ago",
    type: "plus",
  },
  {
    user: "Bob",
    action: "completed a follow-up",
    time: "5h ago",
    type: "check",
  },
  {
    user: "Eve",
    action: "sent a new message",
    time: "Today",
    type: "message",
  },
];

const fakeQuickStats = [
  { name: "New Clients", value: 3, color: "bg-blue-400" },
  { name: "Follow-ups Today", value: 2, color: "bg-yellow-400" },
  { name: "Revenue Growth", value: "+10%", color: "bg-green-400" },
];

export default function DashboardPage() {
  const [showRevenue, setShowRevenue] = useState(false);
  const [clients, setClients] = useState<Client[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      status: 'new',
      nextFollowUp: '2026-01-05',
    },
  ]);

  return (
    <DashboardShell>
      <section className="max-w-7xl mx-auto pt-6 pb-10 px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-blue-900 dark:text-blue-100 mb-1">
              Dashboard Overview
            </h1>
            <span className="text-sm text-muted-foreground">Your daily insights at a glance</span>
          </div>
          <div className="flex gap-3">
            <Button
              variant="secondary"
              className="text-base rounded-xl px-4 py-2 shadow"
            >
              <svg
                className="inline-block mr-2 -mt-1"
                width={20}
                height={20}
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth={2}/>
                <path d="M12 8v4l2 2" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
              </svg>
              Quick Stats
            </Button>
            <Button
              variant="outline"
              className="text-base rounded-xl px-4 py-2 shadow"
              onClick={() => window.location.href = "/dashboard/settings"}
            >
              <svg
                className="inline-block mr-2 -mt-1"
                width={18}
                height={18}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7ZM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 0 1 7.04 4.29l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15 8.6c.23.13.49.2.75.2s.52-.07.75-.2a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15Z"
                  fill="currentColor"
                />
              </svg>
              Settings
            </Button>
          </div>
        </div>

        {/* Main metrics cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

          {/* Clients Card */}
          <Card className="p-7 rounded-2xl bg-gradient-to-tr from-blue-50 to-blue-200 shadow-xl border-0 transition hover:-translate-y-1 hover:shadow-2xl group">
            <div className="flex items-center gap-4">
              <div className="bg-blue-400/10 p-3 rounded-full group-hover:bg-blue-500/10 transition">
                <svg width={32} height={32} fill="none" className="text-blue-500" viewBox="0 0 24 24">
                  <path d="M12 3C7 3 2.73 7.11 3.05 12.04C3.34 16.41 7.01 20 12 20C16.99 20 20.66 16.41 20.95 12.04C21.27 7.11 17 3 12 3ZM12 18C8.13 18 5 14.86 5 11C5 7.13 8.13 4 12 4C15.87 4 19 7.13 19 11C19 14.86 15.87 18 12 18ZM12 6C9.24 6 7 8.24 7 11C7 13.76 9.24 16 12 16C14.76 16 17 13.76 17 11C17 8.24 14.76 6 12 6Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl text-blue-900">Total Clients</h3>
                <div className="text-3xl font-extrabold mt-2 text-blue-700 animate-fade-in-up">24</div>
                <p className="mt-1 text-blue-600/70 text-sm">Active this period &#x2022; +3 new</p>
                <Progress value={85} className="h-2 bg-blue-100 mt-3" />
              </div>
            </div>
          </Card>
          
          {/* Followups Card */}
          <Card className="p-7 rounded-2xl bg-gradient-to-tr from-yellow-50 to-yellow-200 shadow-xl border-0 transition hover:-translate-y-1 hover:shadow-2xl group">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-400/10 p-3 rounded-full group-hover:bg-yellow-500/10 transition">
                <svg width={32} height={32} fill="none" className="text-yellow-500" viewBox="0 0 24 24">
                  <path d="M12 4V13L17 16.5L15.53 18.74L9.27 14.97L12 13V4ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl text-yellow-900">Pending Follow-ups</h3>
                <div className="text-3xl font-extrabold mt-2 text-yellow-700 animate-fade-in-up">5</div>
                <p className="mt-1 text-yellow-700/60 text-sm">Due soon &#x2022; 1 overdue</p>
                <Progress value={60} className="h-2 bg-yellow-100 mt-3" />
              </div>
            </div>
          </Card>
          
          {/* Revenue Card with Reveal */}
          <Card className="p-7 rounded-2xl bg-gradient-to-tr from-green-50 to-green-200 shadow-xl border-0 transition hover:-translate-y-1 hover:shadow-2xl group">
            <div className="flex items-center gap-4">
              <div className="bg-green-400/10 p-3 rounded-full group-hover:bg-green-500/10 transition">
                <svg width={32} height={32} fill="none" className="text-green-500" viewBox="0 0 24 24">
                  <path d="M12 21C7.03 21 2.73 16.72 3.05 11.76C3.34 7.38 7.01 3.8 12 3.8C16.98 3.8 20.65 7.38 20.95 11.76C21.27 16.72 16.97 21 12 21ZM15 11L10.5 14L8 12.17L9.41 10.59L10.5 11.46L13.59 9L15 11Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl text-green-900 flex items-center gap-1">
                  Revenue
                  <button
                    className="ml-1 p-1 rounded hover:bg-green-100 transition"
                    title={showRevenue ? "Hide" : "Show"}
                    onClick={() => setShowRevenue((v) => !v)}
                  >
                    <svg
                      width={16}
                      height={16}
                      className="inline text-green-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {showRevenue ? (
                        <path d="M10 4a8 8 0 1 0 0 12.001A8 8 0 0 0 10 4Z" />
                      ) : (
                        <path
                          fillRule="evenodd"
                          d="M1.458 9.042a8 8 0 0 1 14.53 1.779l2.032 2.033A8.001 8.001 0 0 1 10 18a7.963 7.963 0 0 1-6.847-3.844l.464-.463A8.012 8.012 0 0 1 1.458 9.042Zm8.003-4.25a8 8 0 1 0 .001 12.416A8 8 0 0 0 9.461 4.792Z"
                          clipRule="evenodd"
                        />
                      )}
                    </svg>
                  </button>
                </h3>
                <div className={cn(
                  "text-3xl font-extrabold mt-2 text-green-700 animate-fade-in-up transition-all",
                  showRevenue ? "blur-0" : "blur-sm select-none"
                )}>
                  €720
                </div>
                <p className="mt-1 text-green-700/60 text-sm">This month &#x2022; +10%</p>
                <Progress value={showRevenue ? 73 : 0} className="h-2 bg-green-100 mt-3 transition-all" />
              </div>
            </div>
          </Card>
        </div>

        {/* Integrate the Clients Table below the stats cards */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-blue-900 mb-5">Clients Table</h2>
          <ClientsTable clients={clients} />
        </div>

        {/* Quick Highlights */}
        <div className="flex flex-wrap gap-4 mb-10">
          {fakeQuickStats.map(stat => (
            <div
              key={stat.name}
              className={`flex items-center px-5 py-3 rounded-xl shadow bg-white border-0 min-w-[160px] transition hover:-translate-y-1 hover:ring-[1.5px] hover:ring-gray-300`}
            >
              <span className={`h-3 w-3 rounded-full ${stat.color} mr-3`}></span>
              <div>
                <div className="font-bold text-lg">{stat.value}</div>
                <div className="text-xs text-gray-500 font-medium">{stat.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity (Notification Style) */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">Recent Activity</h2>
          <div className="space-y-3">
            {fakeRecentActivity.map((act, idx) => (
              <div
                key={idx}
                className="flex items-center bg-gradient-to-l from-blue-50 via-white to-blue-50 px-4 py-3 rounded-xl shadow group hover:bg-blue-100 transition"
              >
                <span className="inline-flex items-center justify-center rounded-full h-8 w-8 mr-4 shadow-sm bg-blue-100 group-hover:bg-blue-200">
                  {act.type === "plus" && (
                    <svg width={20} height={20} fill="none" className="text-blue-400" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeWidth={2} d="M10 5v10m5-5H5"/>
                    </svg>
                  )}
                  {act.type === "check" && (
                    <svg width={20} height={20} fill="none" className="text-green-500" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeWidth={2} d="M4 11l4 4 8-8"/>
                    </svg>
                  )}
                  {act.type === "message" && (
                    <svg width={20} height={20} fill="none" className="text-yellow-500" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeWidth={2} d="M3.5 5.5a2 2 0 0 1 2-2H14.5a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H5.5a2 2 0 0 1-2-2V5.5Z"/>
                      <path stroke="currentColor" strokeWidth={2} d="m5 8 5 3 5-3"/>
                    </svg>
                  )}
                </span>
                <span className="flex-1">
                  <span className="font-semibold text-blue-900">{act.user}</span>{" "}
                  <span className="text-blue-700">{act.action}</span>
                </span>
                <span className="ml-auto text-xs text-blue-400 font-medium">{act.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Navigation Section */}
        <div>
          <h2 className="text-xl font-semibold text-blue-900 mb-3">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Card className="flex items-center gap-4 py-5 px-7 rounded-xl border-0 shadow hover:shadow-lg cursor-pointer group transition"
              onClick={() => window.location.href = "/dashboard/clients"}>
              <div className="rounded-full bg-blue-50 p-3 group-hover:bg-blue-100 transition"><svg width={28} height={28} viewBox="0 0 24 24" fill="none"><path d="M12 12C13.66 12 14.99 10.66 14.99 9S13.66 6 12 6 9 7.34 9 9s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-1.5c0-2.33-4.67-3.5-7-3.5z" fill="#2563eb"/></svg></div>
              <div>
                <div className="font-bold text-base text-blue-700">View Clients</div>
                <span className="text-xs text-gray-500">See client list</span>
              </div>
            </Card>
            <Card className="flex items-center gap-4 py-5 px-7 rounded-xl border-0 shadow hover:shadow-lg cursor-pointer group transition"
              onClick={() => window.location.href = "/dashboard/followups"}>
              <div className="rounded-full bg-yellow-50 p-3 group-hover:bg-yellow-100 transition"><svg width={28} height={28} fill="none" viewBox="0 0 24 24"><path d="M8 6V7a4 4 0 1 0 8 0V6m-9 6h10M10 16H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3" stroke="#eab308" strokeWidth={2} strokeLinecap="round"/></svg></div>
              <div>
                <div className="font-bold text-base text-yellow-700">Manage Follow-ups</div>
                <span className="text-xs text-gray-500">Track and complete tasks</span>
              </div>
            </Card>
            <Card className="flex items-center gap-4 py-5 px-7 rounded-xl border-0 shadow hover:shadow-lg cursor-pointer group transition"
              onClick={() => window.location.href = "/dashboard/messages"}>
              <div className="rounded-full bg-green-50 p-3 group-hover:bg-green-100 transition"><svg width={28} height={28} fill="none" viewBox="0 0 24 24"><path d="M2 6v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6" stroke="#22c55e" strokeWidth={2}/><rect x="4" y="4" width="16" height="16" rx="2" fill="#bbf7d0"/></svg></div>
              <div>
                <div className="font-bold text-base text-green-700">Send Messages</div>
                <span className="text-xs text-gray-500">Contact your clients</span>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}
