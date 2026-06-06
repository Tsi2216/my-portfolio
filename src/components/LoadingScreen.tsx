import { motion, AnimatePresence } from 'framer-motion';

interface Props { isLoading: boolean; }

export default function LoadingScreen({ isLoading }: Props) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <div className="relative mb-8">
            <div className="w-20 h-20 rounded-full border border-[#00E5FF]/20 flex items-center justify-center">
              <span
                className="font-display font-bold text-2xl"
                style={{
                  background: 'linear-gradient(135deg, #00E5FF, #60a5fa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                TS
              </span>
            </div>
            <motion.div
              className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[#00E5FF]"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <div className="flex gap-1.5">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
