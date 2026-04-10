import { motion } from "framer-motion";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
}

const CTAButton = ({ children, className = "" }: CTAButtonProps) => (
  <motion.a
    href="https://pay.hotmart.com/R105280679T"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className={`inline-block bg-primary text-primary-foreground font-display font-bold text-lg md:text-xl px-8 py-4 rounded-lg glow-gold animate-pulse-glow cursor-pointer text-center ${className}`}
  >
    {children}
  </motion.a>
);

export default CTAButton;
