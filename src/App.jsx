import { Outlet } from "react-router-dom";
import Navbar from "../src/components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}