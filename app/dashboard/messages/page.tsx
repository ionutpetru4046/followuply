"use client";

import { useState, useRef } from "react";
import DashboardShell from "../../components/ui/DashboardShell";
import { Card } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  client: string;
  content: string;
  date: string;
}

const clientsList = ["Alice", "Bob", "Charlie", "Diana", "Eve"]; // For enhancing UX with suggestions

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, client: "Alice", content: "Reminder to follow up.", date: "2025-12-24" },
    { id: 2, client: "Bob", content: "Scheduled meeting next week.", date: "2025-12-23" },
  ]);
  const [newMessage, setNewMessage] = useState({ client: "", content: "" });
  const [clientDropdown, setClientDropdown] = useState(false);
  const [clientSuggestions, setClientSuggestions] = useState<string[]>([]);
  const contentMaxLength = 160;
  const clientInputRef = useRef<HTMLInputElement>(null);

  // HANDLING CHAR COUNT WITHOUT EFFECT (to avoid React lint error about setState in effect)
  const contentCharCount = newMessage.content.length;

  const sendMessage = () => {
    if (!newMessage.client.trim() || !newMessage.content.trim()) return;
    const id = messages.length > 0 ? Math.max(...messages.map((m) => m.id)) + 1 : 1;
    setMessages([
      ...messages,
      { ...newMessage, id, date: new Date().toISOString().split("T")[0] },
    ]);
    setNewMessage({ client: "", content: "" });
    setClientSuggestions([]);
    if (clientInputRef.current) clientInputRef.current.blur();
  };

  const handleClientInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewMessage((nm) => ({ ...nm, client: value }));
    if (value.length > 0) {
      setClientSuggestions(
        clientsList.filter(c =>
          c.toLowerCase().startsWith(value.toLowerCase())
        )
      );
      setClientDropdown(true);
    } else {
      setClientSuggestions([]);
      setClientDropdown(false);
    }
  };

  const handleSelectClient = (client: string) => {
    setNewMessage((nm) => ({ ...nm, client }));
    setClientSuggestions([]);
    setClientDropdown(false);
  };

  return (
    <DashboardShell>
      <div className="space-y-8 max-w-3xl mx-auto pt-2">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight mb-1">Messages</h1>
            <div className="text-sm text-muted-foreground">
              View and send messages to your clients.
            </div>
          </div>
          <Button
            variant="default"
            className="mt-2 md:mt-0 shadow"
            size="lg"
            onClick={() => {
              if (clientInputRef.current) clientInputRef.current.focus();
            }}
          >
            + New Message
          </Button>
        </div>

        {/* Modern Message Form */}
        <Card className="p-0 overflow-hidden shadow-lg border-0 bg-gradient-to-br from-white via-gray-50 to-gray-100">
          <form
            onSubmit={e => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <div className="flex flex-col md:flex-row gap-6 p-6">
              {/* Client selection (with dropdown) */}
              <div className="relative w-full md:w-1/4">
                <Field>
                  <label className="block mb-1 font-semibold text-gray-700">Client</label>
                  <Input
                    ref={clientInputRef}
                    type="text"
                    autoComplete="off"
                    placeholder="Type or select client"
                    value={newMessage.client}
                    onChange={handleClientInputChange}
                    className="rounded-xl focus:ring-2 focus:ring-indigo-400"
                    onFocus={() => {
                      if (newMessage.client.length > 0) setClientDropdown(true);
                    }}
                    onBlur={() => setTimeout(() => setClientDropdown(false), 125)}
                  />
                  {clientDropdown && clientSuggestions.length > 0 && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow">
                      {clientSuggestions.map((c, i) => (
                        <div
                          key={c}
                          tabIndex={0}
                          className={cn(
                            "px-3 py-2 cursor-pointer hover:bg-indigo-50 transition",
                            i === 0 && "rounded-t-xl",
                            i === clientSuggestions.length - 1 && "rounded-b-xl"
                          )}
                          onMouseDown={() => handleSelectClient(c)}
                        >
                          {c}
                        </div>
                      ))}
                    </div>
                  )}
                </Field>
              </div>
              {/* Message textarea */}
              <div className="w-full md:w-2/4 flex flex-col">
                <Field>
                  <label className="block mb-1 font-semibold text-gray-700">
                    Message <span className="font-normal text-xs text-muted-foreground">(max {contentMaxLength} chars)</span>
                  </label>
                  {/* Instead of using `as="textarea"`, use a native textarea for message input */}
                  <textarea
                    rows={2}
                    maxLength={contentMaxLength}
                    placeholder="Write your message…"
                    className="rounded-xl resize-none h-16 transition-all focus:ring-2 focus:ring-indigo-400 border border-gray-300 px-3 py-2"
                    value={newMessage.content}
                    onChange={e =>
                      setNewMessage((nm) => ({ ...nm, content: e.target.value }))
                    }
                  />
                </Field>
                <div className="flex justify-end text-xs text-muted-foreground mt-1">
                  {contentCharCount}/{contentMaxLength}
                </div>
              </div>
              {/* Submit button */}
              <div className="flex items-end w-full md:w-1/4">
                <Button
                  type="submit"
                  disabled={
                    !newMessage.client.trim() ||
                    !newMessage.content.trim() ||
                    newMessage.content.length > contentMaxLength
                  }
                  className="w-full md:w-auto px-6 py-3 rounded-xl shadow bg-indigo-600 hover:bg-indigo-700 transition"
                >
                  Send
                </Button>
              </div>
            </div>
          </form>
        </Card>

        {/* Message Timeline / List */}
        <Card className="py-2 px-0 shadow border-0 rounded-2xl bg-white">
          <div className="px-6 pt-4 pb-2">
            <h2 className="font-semibold text-xl mb-1">Recent Messages</h2>
            <div className="text-sm text-muted-foreground mb-4">
              Your latest messages appear here in a modern timeline.
            </div>
          </div>
          {messages.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground text-lg">No messages yet.</div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {[...messages].reverse().map((msg, i, arr) => (
                <li
                  key={msg.id}
                  className={cn(
                    "flex items-start gap-4 px-6 py-4 hover:bg-indigo-50/30 transition group",
                    "relative",
                  )}
                >
                  {/* Left vertical accent bar for modern timeline */}
                  <div className="flex flex-col items-center pt-2">
                    <span
                      className={cn(
                        "w-2 h-2 rounded-full border-4 border-indigo-400 bg-white group-hover:border-indigo-600 transition",
                        i === 0 ? "border-indigo-500" : "border-indigo-200"
                      )}
                    />
                    {i < arr.length - 1 && (
                      <span className="w-0.5 h-9 bg-gradient-to-b from-indigo-200 to-transparent mt-1" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-indigo-600">
                        {msg.client}
                      </span>
                      <span className="text-xs rounded-full px-2 py-0.5 bg-gray-100 text-gray-500">
                        {msg.date}
                      </span>
                    </div>
                    <div className="mt-1 text-gray-800 leading-relaxed">{msg.content}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </DashboardShell>
  );
}
