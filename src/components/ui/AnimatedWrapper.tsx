"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";
import {
  slideInVariants,
  fadeInVariants,
  staggerContainerVariants,
  defaultTransition,
} from "@/lib/animations";

interface AnimatedWrapperProps extends Omit<MotionProps, "children"> {
  children: ReactNode;
  variant?: "slide" | "fade" | "stagger";
  delay?: number;
}

export function AnimatedWrapper({
  children,
  variant = "fade",
  delay = 0,
  ...props
}: AnimatedWrapperProps) {
  const variants = {
    slide: slideInVariants,
    fade: fadeInVariants,
    stagger: staggerContainerVariants,
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      transition={{ ...defaultTransition, delay }}
      variants={variants[variant]}
      {...props}
    >
      {children}
    </motion.div>
  );
}
