"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <Button
      onClick={toggleTheme}
      variant='ghost'
      size='icon'
      aria-label='Toggle theme'
      className='relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 ease-in-out shadow-[0_0_8px_#179BD7] hover:shadow-[0_0_16px_#179BD7]/80'>
      <AnimatePresence initial={false} mode='wait'>
        {isDark ? (
          <motion.span
            key='sun'
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <Sun className='h-5 w-5 text-[#179BD7]' />
          </motion.span>
        ) : (
          <motion.span
            key='moon'
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <Moon className='h-5 w-5 text-[#179BD7]' />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}
