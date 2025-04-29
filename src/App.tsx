import { useState } from "react";
import Home from "./pages/home";
import Button from "./components/Button";
import { motion } from "framer-motion";

const App: React.FC = () => {
  const [showHome, setShowHome] = useState(false);

  const handleStart = () => {
    setShowHome(true);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Detalhes SVG no fundo */}
      <svg
        className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path fill="#f7a7d3" d="M0,64L1440,128L1440,320L0,320Z" opacity="0.3" />
      </svg>

      {showHome ? (
        <Home />
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex h-full flex-col items-center justify-center px-5 text-center"
        >
          {/* Título Romântico */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 text-3xl font-extrabold text-pink-400 sm:text-4xl md:text-5xl"
          >
            Um Amor para Toda a Vida 💖
          </motion.h1>

          {/* Botão de início */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button onClick={handleStart} />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default App;
