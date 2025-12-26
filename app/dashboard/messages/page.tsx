"use client";

import { useState } from "react";
import DashboardShell from "../../components/ui/DashboardShell";
import { Card } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  client: string;
  content: string;
  date: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, client: "Alice", content: "Reminder to follow up.", date: "2025-12-24" },
    { id: 2, client: "Bob", content: "Scheduled meeting next week.", date: "2025-12-23" },
  ]);

  const [newMessage, setNewMessage] = useState({ client: "", content: "" });

  const sendMessage = () => {
    if (!newMessage.client || !newMessage.content) return;
    const id = messages.length + 1;
    setMessages([
      ...messages,
      { ...newMessage, id, date: new Date().toISOString().split("T")[0] },
    ]);
    setNewMessage({ client: "", content: "" });
  };

  return (
    <DashboardShell>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Messages</h1>

        {/* Send Message Form */}
        <Card>
          <h2 className="font-semibold mb-4">Send New Message</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Field>
              <Input
                placeholder="Client Name"
                value={newMessage.client}
                onChange={(e) => setNewMessage({ ...newMessage, client: e.target.value })}
              />
            </Field>

            <Field>
              <Input
                placeholder="Message content"
                value={newMessage.content}
                onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })}
              />
            </Field>

            <div className="md:col-span-3">
              <Button onClick={sendMessage} className="w-full md:w-auto">
                Send
              </Button>
            </div>
          </div>
        </Card>

        {/* Messages Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Client</th>
                  <th>Message</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg) => (
                  <tr key={msg.id} className="border-b hover:bg-gray-50">
                    <td className="py-2">{msg.client}</td>
                    <td>{msg.content}</td>
                    <td>{msg.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardShell>
  );
}
