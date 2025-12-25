"use client";

// import { Avatar } from "./avatar"; // optional if you have it
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  // Mock logout function (replace with your auth logic)
  const handleLogout = () => {
    // Example for Supabase:
    // await supabase.auth.signOut()
    // Then redirect to login page:
    router.push("/login");
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-sm">
      <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition cursor-pointer"
        >
          Logout
        </button>
        {/* <Avatar /> */}
      </div>
    </header>
  );
}
