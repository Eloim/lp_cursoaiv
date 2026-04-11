import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  alternate?: boolean;
  texture?: "dots" | "grid" | "diagonal" | "radial" | "mesh" | "none";
}

const SectionWrapper = ({ children, className = "", id, alternate, texture = "dots" }: SectionWrapperProps) => {
  const textureClass = texture !== "none" ? `bg-texture-${texture}` : "";

  return (
    <section
      id={id}
      className={`relative py-16 md:py-24 px-4 ${alternate ? "bg-gradient-section" : ""} ${textureClass} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
