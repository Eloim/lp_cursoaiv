import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  alternate?: boolean;
}

const SectionWrapper = ({ children, className = "", id, alternate }: SectionWrapperProps) => (
  <section
    id={id}
    className={`py-16 md:py-24 px-4 ${alternate ? "bg-gradient-section" : ""} ${className}`}
  >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      {children}
    </motion.div>
  </section>
);

export default SectionWrapper;
