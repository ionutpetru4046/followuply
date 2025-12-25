"use client";

import { useState } from "react";
import DashboardShell from "../../components/ui/DashboardShell";
import { Card } from "../../components/ui/card";

interface Client {
  id: number;
  name: string;
  email: string;
  lastContact: string;
  status: string;
}

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

  const updateClient = (id: number, updatedClient: Partial<Client>) => {
    setClients(
      clients.map((c) => (c.id === id ? { ...c, ...updatedClient } : c))
    );
    setEditingClientId(null);
  };

  const addClient = () => {
    const id = clients.length + 1;
    setClients([
      ...clients,
      { ...newClient, id, lastContact: new Date().toISOString().split("T")[0] },
    ]);
    setNewClient({ name: "", email: "", status: "Active" });
  };

  const deleteClient = (id: number) => {
    setClients(clients.filter((c) => c.id !== id));
  };

  return (
    <DashboardShell>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Clients</h1>

        {/* Add Client Form */}
        <Card className="mb-6">
          <h2 className="font-semibold mb-4">Add New Client</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              value={newClient.name}
              onChange={(e) =>
                setNewClient({ ...newClient, name: e.target.value })
              }
              className="border rounded-lg p-2 flex-1"
            />
            <input
              type="email"
              placeholder="Email"
              value={newClient.email}
              onChange={(e) =>
                setNewClient({ ...newClient, email: e.target.value })
              }
              className="border rounded-lg p-2 flex-1"
            />
            <select
              value={newClient.status}
              onChange={(e) =>
                setNewClient({ ...newClient, status: e.target.value })
              }
              className="border rounded-lg p-2"
            >
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
            </select>
            <button
              onClick={addClient}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Add
            </button>
          </div>
        </Card>

        {/* Clients Table */}
        <Card>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2">Name</th>
                <th>Email</th>
                <th>Last Contact</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-b hover:bg-gray-50">
                  <td className="py-2">
                    {editingClientId === client.id ? (
                      <input
                        type="text"
                        defaultValue={client.name}
                        onChange={(e) =>
                          updateClient(client.id, { name: e.target.value })
                        }
                        className="border rounded-lg p-1"
                      />
                    ) : (
                      client.name
                    )}
                  </td>
                  <td>
                    {editingClientId === client.id ? (
                      <input
                        type="email"
                        defaultValue={client.email}
                        onChange={(e) =>
                          updateClient(client.id, { email: e.target.value })
                        }
                        className="border rounded-lg p-1"
                      />
                    ) : (
                      client.email
                    )}
                  </td>
                  <td>{client.lastContact}</td>
                  <td>
                    {editingClientId === client.id ? (
                      <select
                        defaultValue={client.status}
                        onChange={(e) =>
                          updateClient(client.id, { status: e.target.value })
                        }
                        className="border rounded-lg p-1"
                      >
                        <option value="Active">Active</option>
                        <option value="Pending">Pending</option>
                      </select>
                    ) : (
                      client.status
                    )}
                  </td>
                  <td className="flex gap-2">
                    {editingClientId === client.id ? (
                      <button
                        onClick={() => setEditingClientId(null)}
                        className="px-2 py-1 bg-gray-300 rounded-lg"
                      >
                        Save
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => setEditingClientId(client.id)}
                          className="px-2 py-1 bg-blue-500 text-white rounded-lg"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteClient(client.id)}
                          className="px-2 py-1 bg-red-500 text-white rounded-lg"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </DashboardShell>
  );
}
