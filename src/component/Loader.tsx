import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden z-50">
      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

      {/* Rotating Rings */}
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-40 h-40 border-2 border-white/20 rounded-full"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-28 h-28 border-2 border-t-white border-r-white/30 border-b-transparent border-l-transparent rounded-full"
        />

        {/* Center Logo/Text */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.9, 1, 0.9],
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-white text-4xl font-bold tracking-[0.3em]">
            Barb-Show
          </h1>

          <p className="text-gray-400 text-sm mt-2 tracking-[0.4em] uppercase">
            Loading Shoe Stores
          </p>
        </motion.div>
      </div>

      {/* Animated Dots */}
      <div className="flex gap-2 mt-10">
        {[0, 1, 2].map((dot) => (
          <motion.div
            key={dot}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: dot * 0.2,
            }}
            className="w-3 h-3 bg-white rounded-full"
          />
        ))}
      </div>
    </div>
  );
}
