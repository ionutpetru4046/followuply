"use client";

import { useState } from "react";
import DashboardShell from "../../components/ui/DashboardShell";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

interface FollowUp {
  id: number;
  date: string;
  note: string;
  dueDate: string;
  status: "Pending" | "Completed";
}

interface Client {
  id: number;
  name: string;
  followUps: FollowUp[];
}

interface NewFollowUpState {
  clientId: number;
  note: string;
  dueDate: string;
}

export default function FollowUpsPage() {
  const [clients, setClients] = useState<Client[]>([
    {
      id: 1,
      name: "Alice",
      followUps: [
        {
          id: 1,
          date: "2025-12-20",
          note: "Call regarding proposal",
          dueDate: "2025-12-21",
          status: "Completed",
        },
        {
          id: 2,
          date: "2025-12-23",
          note: "Follow up on email",
          dueDate: "2025-12-27",
          status: "Pending",
        },
      ],
    },
    {
      id: 2,
      name: "Bob",
      followUps: [
        {
          id: 1,
          date: "2025-12-18",
          note: "Send contract",
          dueDate: "2025-12-23",
          status: "Completed",
        },
        {
          id: 2,
          date: "2025-12-25",
          note: "Schedule meeting",
          dueDate: "2025-12-29",
          status: "Pending",
        },
      ],
    },
  ]);

  const [newFollowUp, setNewFollowUp] = useState<NewFollowUpState>({
    clientId: 0,
    note: "",
    dueDate: "",
  });

  const deleteClient = (clientId: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this client and all their follow-ups?"
    );
    if (!confirmed) return;

    setClients((prev) => prev.filter((c) => c.id !== clientId));
  };

  const deleteFollowUp = (clientId: number, followUpId: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this follow-up?"
    );
    if (!confirmed) return;

    setClients((prevClients) =>
      prevClients.map((client) =>
        client.id === clientId
          ? {
              ...client,
              followUps: client.followUps.filter((f) => f.id !== followUpId),
            }
          : client
      )
    );
  };

  const addFollowUp = () => {
    if (
      !newFollowUp.clientId ||
      !newFollowUp.note.trim() ||
      !newFollowUp.dueDate
    )
      return;

    setClients((prevClients) =>
      prevClients.map((c) =>
        c.id === newFollowUp.clientId
          ? {
              ...c,
              followUps: [
                ...c.followUps,
                {
                  id:
                    c.followUps.length > 0
                      ? Math.max(...c.followUps.map((f) => f.id)) + 1
                      : 1,
                  date: new Date().toISOString().split("T")[0],
                  dueDate: newFollowUp.dueDate,
                  note: newFollowUp.note,
                  status: "Pending",
                },
              ],
            }
          : c
      )
    );

    setNewFollowUp({ clientId: 0, note: "", dueDate: "" });
  };

  const markCompleted = (clientId: number, followUpId: number) => {
    setClients((prevClients) =>
      prevClients.map((c) =>
        c.id === clientId
          ? {
              ...c,
              followUps: c.followUps.map((f) =>
                f.id === followUpId ? { ...f, status: "Completed" } : f
              ),
            }
          : c
      )
    );
  };

  return (
    <DashboardShell>
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-blue-900 dark:text-blue-100 mb-2">Follow-up Tracking</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Manage your clients&apos; follow-ups with a modern, streamlined interface.
        </p>

        {/* Add Follow-up Form */}
        <Card className="p-6 rounded-2xl shadow-lg bg-gradient-to-tr from-white via-blue-50 to-blue-100 border-0">
          <h2 className="font-bold text-lg mb-3 text-blue-800">Add New Follow-up</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div className="md:col-span-1">
              <label className="font-medium text-gray-700 block mb-1">Client</label>
              <select
                value={newFollowUp.clientId}
                onChange={(e) =>
                  setNewFollowUp({
                    ...newFollowUp,
                    clientId: Number(e.target.value),
                  })
                }
                className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 rounded-xl p-2.5 w-full bg-white shadow transition"
              >
                <option value={0} disabled>Select Client</option>
                {clients.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-1">
              <label className="font-medium text-gray-700 block mb-1">Due Date</label>
              <Input
                type="date"
                placeholder="Due date"
                value={newFollowUp.dueDate}
                onChange={(e) =>
                  setNewFollowUp({ ...newFollowUp, dueDate: e.target.value })
                }
                className="rounded-xl bg-white shadow border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400"
              />
            </div>
            <div className="md:col-span-2">
              <label className="font-medium text-gray-700 block mb-1">Follow-up Note</label>
              <Input
                type="text"
                placeholder="Add a note (e.g. 'Call re: proposal')"
                value={newFollowUp.note}
                onChange={(e) =>
                  setNewFollowUp({ ...newFollowUp, note: e.target.value })
                }
                className="rounded-xl bg-white shadow border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400"
              />
            </div>
            <div className="md:col-span-1 flex">
              <Button
                onClick={addFollowUp}
                className="w-full h-11 rounded-xl bg-blue-600 text-white font-bold shadow-md hover:bg-blue-700 transition focus:ring-2 focus:ring-blue-400"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeWidth="2" d="M10 5v10m5-5H5"/></svg>
                  Add
                </span>
              </Button>
            </div>
          </div>
        </Card>

        {/* Clients & Follow-ups List */}
        <div className="space-y-8">
          {clients.map((client) => {
            const completed = client.followUps.filter(
              (f) => f.status === "Completed"
            ).length;
            const total = client.followUps.length;
            const progress = total > 0 ? (completed / total) * 100 : 0;

            return (
              <Card
                key={client.id}
                className="rounded-2xl overflow-hidden shadow-xl border-0 bg-white hover:shadow-2xl transition group"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100 py-4 px-6 border-b">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h3 className="font-bold text-xl text-blue-900">{client.name}</h3>
                    <span className="ml-1 text-xs text-gray-500 font-medium">
                      {completed}/{total} completed
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 items-center w-full sm:w-auto mt-2 sm:mt-0">
                    <Progress value={progress} className="w-full sm:w-64 h-2 rounded-full bg-blue-100" />
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => deleteClient(client.id)}
                      className="ml-0 sm:ml-3 px-4 py-2 text-sm rounded-xl bg-red-100 text-red-600 hover:bg-red-200 font-bold transition"
                    >
                      <svg className="inline-block mr-1 -mt-0.5" width={16} height={16} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M6 6l12 12M6 18L18 6"/></svg>
                      Delete
                    </Button>
                  </div>
                </div>
                <Accordion type="single" collapsible className="space-y-2 px-4 py-3">
                  {client.followUps.length === 0 && (
                    <div className="px-3 py-4 text-gray-400 text-center italic">No follow-ups for this client.</div>
                  )}
                  {client.followUps.map((f) => (
                    <AccordionItem key={f.id} value={`followup-${f.id}`} className="rounded-xl border-0 bg-blue-50/50 ring-1 ring-blue-100 shadow group mb-2">
                      <AccordionTrigger className="hover:bg-blue-100/80 rounded-xl px-4 py-2 transition flex items-center gap-3">
                        <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-2">
                          <div className="flex-1">
                            <span className="font-medium text-blue-900">{f.date}</span>
                            <span className="ml-2 text-xs text-gray-500">
                              (Due: {f.dueDate})
                            </span>
                          </div>
                          <div>
                            <Badge
                              variant={f.status === "Completed" ? "secondary" : "default"}
                              className={
                                f.status === "Completed"
                                  ? "bg-green-100 text-green-700 border-0"
                                  : "bg-yellow-50 text-yellow-700 border-0"
                              }
                            >
                              {f.status}
                            </Badge>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4 py-3">
                        <span className="mb-2 sm:mb-0 text-gray-800">{f.note}</span>
                        <div className="flex gap-2">
                          {f.status === "Pending" && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="rounded-lg border-blue-200 shadow hover:bg-blue-50 font-semibold text-blue-700"
                              onClick={() => markCompleted(client.id, f.id)}
                            >
                              <svg className="w-4 h-4 mr-1 text-green-600" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeWidth="2" d="M6 11l3 3 6-6"/></svg>
                              Mark Completed
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="destructive"
                            className="rounded-lg border-red-200 shadow hover:bg-red-100 font-semibold text-red-600"
                            onClick={() => deleteFollowUp(client.id, f.id)}
                          >
                            <svg className="w-4 h-4 mr-1 -mt-0.5" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeWidth="2" d="M6 6l8 8M6 14l8-8"/></svg>
                            Delete
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            );
          })}
        </div>
      </div>
    </DashboardShell>
  );
}
