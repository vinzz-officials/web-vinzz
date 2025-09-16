import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Contacts() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-8"
        >
          📬 Contact Me
        </motion.h1>

        <div className="space-y-6 text-lg">
          <p>📱 WhatsApp: <a href="https://wa.me/62815247824153" className="text-purple-400 hover:underline">62815247824153</a></p>
          <p>💬 Telegram: <a href="https://t.me/vinzz_official_store" className="text-purple-400 hover:underline">@vinzz_official_store</a></p>
          
          <div>
            <p className="font-semibold mb-2">📢 WhatsApp Channels:</p>
            <ul className="space-y-2">
              <li><a href="https://whatsapp.com/channel/0029VbBSPkG0rGiH3ofMCl1u" className="hover:underline text-purple-300">Channel 1</a></li>
              <li><a href="https://whatsapp.com/channel/0029VbAkhToAe5Vtyq9J022Q" className="hover:underline text-purple-300">Channel 2</a></li>
              <li><a href="https://whatsapp.com/channel/0029VbBEQsj9WtC9AM1UOv3f" className="hover:underline text-purple-300">Channel 3</a></li>
              <li><a href="https://whatsapp.com/channel/0029Vb65I9G7dmee5uMm9p0G" className="hover:underline text-purple-300">Channel 4</a></li>
              <li><a href="https://whatsapp.com/channel/0029VbAxU5dA2pL54B90qM18" className="hover:underline text-purple-300">Channel 5</a></li>
            </ul>
          </div>

          <p>🤖 Telegram Bot: <a href="https://t.me/vinzz_officials_bot" className="text-purple-400 hover:underline">Nakano Miku Bot</a></p>
        </div>
      </div>
    </Layout>
  );
            }
