"use client";

import { useState } from "react";
import DashboardShell from "../../components/ui/DashboardShell";
import { Card } from "../../components/ui/card";

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

        {/* Send New Message */}
        <Card>
          <h2 className="font-semibold mb-4">Send Message</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Client Name"
              value={newMessage.client}
              onChange={(e) => setNewMessage({ ...newMessage, client: e.target.value })}
              className="border rounded-lg p-2 flex-1"
            />
            <input
              type="text"
              placeholder="Message"
              value={newMessage.content}
              onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })}
              className="border rounded-lg p-2 flex-2"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Send
            </button>
          </div>
        </Card>

        {/* Messages List */}
        <Card>
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
        </Card>
      </div>
    </DashboardShell>
  );
}
