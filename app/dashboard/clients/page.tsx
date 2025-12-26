"use client";

import { useState } from "react";
import DashboardShell from "../../components/ui/DashboardShell";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Client {
  id: number;
  name: string;
  email: string;
  lastContact: string;
  status: string;
}

const statusMap: Record<string, { label: string; color: string }> = {
  Active: {
    label: "Active",
    color: "bg-green-100 text-green-800 ring-green-300",
  },
  Pending: {
    label: "Pending",
    color: "bg-yellow-100 text-yellow-800 ring-yellow-300",
  },
};

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([
    {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      lastContact: "2025-12-20",
      status: "Active",
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@example.com",
      lastContact: "2025-12-18",
      status: "Pending",
    },
  ]);

  const [newClient, setNewClient] = useState({
    name: "",
    email: "",
    status: "Active",
  });

  const [editingClientId, setEditingClientId] = useState<number | null>(null);
  const [pendingEdits, setPendingEdits] = useState<Partial<Client>>({});

  const onEditStart = (client: Client) => {
    setEditingClientId(client.id);
    setPendingEdits({
      name: client.name,
      email: client.email,
      status: client.status,
    });
  };

  const onEditChange = (field: keyof Client, value: string) => {
    setPendingEdits((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateClient = (id: number) => {
    setClients((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, ...pendingEdits } : c
      )
    );
    setEditingClientId(null);
    setPendingEdits({});
  };

  const addClient = () => {
    if (!newClient.name.trim() || !newClient.email.trim()) return;
    // Modern pattern: uuid, but we'll increment
    const id = clients.length
      ? Math.max(...clients.map((c) => c.id)) + 1
      : 1;
    setClients([
      ...clients,
      {
        ...newClient,
        id,
        lastContact: new Date().toISOString().split("T")[0],
      },
    ]);
    setNewClient({ name: "", email: "", status: "Active" });
  };

  const deleteClient = (id: number) => {
    if (
      window.confirm(
        "Are you sure you want to delete this client?"
      )
    ) {
      setClients(clients.filter((c) => c.id !== id));
    }
  };

  return (
    <DashboardShell>
      <div className="space-y-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">Clients</h1>

        {/* Add Client Form */}
        <Card className="mb-10 p-6 shadow-lg border border-gray-200 rounded-2xl bg-white">
          <h2 className="font-semibold text-lg mb-4 text-gray-900">
            Add New Client
          </h2>
          <form
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              addClient();
            }}
            autoComplete="off"
          >
            <Input
              type="text"
              placeholder="Name"
              value={newClient.name}
              onChange={(e) =>
                setNewClient({ ...newClient, name: e.target.value })
              }
            />
            <Input
              type="email"
              placeholder="Email"
              value={newClient.email}
              onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
            />
            <select
              value={newClient.status}
              onChange={(e) =>
                setNewClient({ ...newClient, status: e.target.value })
              }
              className="transition focus:ring-2 focus:ring-blue-400 outline-none border border-gray-300 rounded-lg px-3 py-2"
            >
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
            </select>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 font-semibold">
              Add
            </Button>
          </form>
        </Card>

        {/* Clients Table Card */}
        <Card className="shadow-lg border border-gray-200 rounded-2xl bg-white overflow-x-auto">
          <div className="p-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="">
                  <th className="py-3 px-2 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                  <th className="text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
                  <th className="text-left text-xs font-semibold text-gray-600 uppercase">Last Contact</th>
                  <th className="text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                  <th className="text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {clients.map((client) => (
                  <tr key={client.id} className="group transition hover:bg-blue-50">
                    <td className="py-3 px-2 text-sm font-medium text-gray-900">
                      {editingClientId === client.id ? (
                        <Input
                          type="text"
                          value={pendingEdits.name || ""}
                          onChange={(e) => onEditChange("name", e.target.value)}
                          className="max-w-xs"
                          autoFocus
                        />
                      ) : (
                        client.name
                      )}
                    </td>
                    <td className="text-sm text-gray-700">
                      {editingClientId === client.id ? (
                        <Input
                          type="email"
                          value={pendingEdits.email || ""}
                          onChange={(e) => onEditChange("email", e.target.value)}
                          className="max-w-xs"
                        />
                      ) : (
                        client.email
                      )}
                    </td>
                    <td className="text-sm text-gray-700">{client.lastContact}</td>
                    <td>
                      {editingClientId === client.id ? (
                        <select
                          value={pendingEdits.status}
                          onChange={(e) => onEditChange("status", e.target.value)}
                          className="border border-gray-300 rounded-lg px-2 py-1 focus:ring-2 focus:ring-blue-400"
                        >
                          <option value="Active">Active</option>
                          <option value="Pending">Pending</option>
                        </select>
                      ) : (
                        <Badge
                          className={cn(
                            "rounded-lg px-2 py-1 text-xs font-semibold shadow-sm ring-1 ring-inset",
                            statusMap[client.status]?.color
                          )}
                        >
                          {statusMap[client.status]?.label || client.status}
                        </Badge>
                      )}
                    </td>
                    <td>
                      {editingClientId === client.id ? (
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => updateClient(client.id)}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Save
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-gray-500"
                            onClick={() => {
                              setEditingClientId(null);
                              setPendingEdits({});
                            }}
                          >
                            Cancel
                          </Button>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onEditStart(client)}
                            className="border-blue-400 text-blue-600 hover:bg-blue-100"
                          >
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => deleteClient(client.id)}
                            className="bg-red-50 border-none text-red-600 hover:bg-red-100"
                          >
                            Delete
                          </Button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
                {!clients.length && (
                  <tr>
                    <td colSpan={5} className="text-center py-6 text-gray-400">
                      No clients found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardShell>
  );
}
