import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/vinzz.jpg"
            alt="Vinzz Official"
            width={200}
            height={200}
            className="rounded-full border-4 border-purple-500 shadow-xl"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-5xl font-bold mt-6"
        >
          Vinzz Official
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-4 max-w-2xl text-lg text-gray-300"
        >
          👋 Hi! Saya <span className="text-purple-400">Vinzz</span>, seorang developer
          yang hobi <span className="italic">coding</span>.  
          Bahasa pemrograman yang saya kuasai adalah:  
          <span className="text-purple-300"> JavaScript, Node.js, Next.js, Python</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 flex gap-6"
        >
          {["JavaScript", "Node.js", "Next.js", "Python"].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-purple-600 rounded-xl shadow-lg text-lg font-semibold"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
              }
