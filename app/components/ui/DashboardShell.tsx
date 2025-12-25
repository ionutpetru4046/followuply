import { ReactNode } from "react";
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";

export default function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
