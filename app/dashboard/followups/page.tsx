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
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Follow-up Tracking</h1>

        {/* Add Follow-up Form */}
        <Card>
          <h2 className="font-semibold mb-4">Add New Follow-up</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select
              value={newFollowUp.clientId}
              onChange={(e) =>
                setNewFollowUp({
                  ...newFollowUp,
                  clientId: Number(e.target.value),
                })
              }
              className="border rounded-lg p-2 w-full"
            >
              <option value={0}>Select Client</option>
              {clients.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>

            <Input
              type="date"
              placeholder="Due date"
              value={newFollowUp.dueDate}
              onChange={(e) =>
                setNewFollowUp({ ...newFollowUp, dueDate: e.target.value })
              }
              className="md:col-span-1"
            />

            <Input
              type="text"
              placeholder="Follow-up note"
              value={newFollowUp.note}
              onChange={(e) =>
                setNewFollowUp({ ...newFollowUp, note: e.target.value })
              }
              className="md:col-span-1"
            />

            <Button onClick={addFollowUp}>Add</Button>
          </div>
        </Card>

        {/* Clients & Follow-ups */}
        {clients.map((client) => {
          const completed = client.followUps.filter(
            (f) => f.status === "Completed"
          ).length;
          const total = client.followUps.length;
          const progress = total > 0 ? (completed / total) * 100 : 0;

          return (
            <Card key={client.id}>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">{client.name}</h3>
                <div className="flex items-center gap-2">
                  <Progress value={progress} className="w-48" />
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteClient(client.id)}
                  >
                    Delete Client
                  </Button>
                </div>
              </div>

              <Accordion type="single" collapsible className="space-y-2">
                {client.followUps.map((f) => (
                  <AccordionItem key={f.id} value={`followup-${f.id}`}>
                    <AccordionTrigger>
                      <div className="flex justify-between items-center w-full">
                        <span>
                          <span className="font-medium">{f.date}</span>
                          <span className="ml-2 text-xs text-gray-500">
                            (Due: {f.dueDate})
                          </span>
                        </span>
                        <Badge
                          variant={
                            f.status === "Completed" ? "secondary" : "default"
                          }
                        >
                          {f.status}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="flex justify-between items-center">
                      <span>{f.note}</span>
                      <div className="flex gap-2">
                        {f.status === "Pending" && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => markCompleted(client.id, f.id)}
                          >
                            Mark Completed
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => deleteFollowUp(client.id, f.id)}
                        >
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
    </DashboardShell>
  );
}
