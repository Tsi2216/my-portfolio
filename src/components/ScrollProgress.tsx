import { useScroll, motion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[99] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, #00E5FF, #60a5fa)',
      }}
    />
  );
}
