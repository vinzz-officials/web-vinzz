import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-white font-semibold">
        <Link href="/" className="text-2xl tracking-wide">Vinzz Official</Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-purple-400 transition">About</Link>
          <Link href="/contacts" className="hover:text-purple-400 transition">Contacts</Link>
        </div>
      </div>
    </motion.nav>
  );
        }
