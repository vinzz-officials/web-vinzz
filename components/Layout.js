import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-purple-900 min-h-screen text-white">
      <Navbar />
      <main className="pt-24">{children}</main>
    </div>
  );
}
