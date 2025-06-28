// components/home/hero.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className='relative w-full overflow-hidden'>
      {/* Background with animated elements */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/70 to-purple-50/70 dark:from-blue-900/30 dark:to-purple-900/30' />

        {/* Animated floating elements */}
        <motion.div
          className='absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-blue-500/20 dark:bg-blue-400/20'
          animate={{
            scale: [1, 1.2, 1],
            translateX: [0, 20, 0],
            translateY: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className='absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-purple-500/20 dark:bg-purple-400/20'
          animate={{
            scale: [1, 1.3, 1],
            translateX: [0, -15, 0],
            translateY: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className='absolute bottom-1/4 left-2/3 w-10 h-10 rounded-full bg-indigo-500/20 dark:bg-indigo-400/20'
          animate={{
            scale: [1, 1.4, 1],
            translateX: [0, -20, 0],
            translateY: [0, 15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className='relative z-10 container py-24 md:py-32 lg:py-40'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='text-center lg:text-left'>
            <motion.h1
              className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              Shaping the <span className='text-primary'>Future</span> of
              Technology
            </motion.h1>

            <motion.p
              className='mt-6 text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              Join a top-ranked Computer Science program where innovation meets
              education. Prepare for a career at the forefront of technology
              with our world-class faculty and cutting-edge research
              opportunities.
            </motion.p>

            <motion.div
              className='mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <Button asChild size='lg' className='text-md'>
                <Link href='/courses'>Explore Programs</Link>
              </Button>
              <Button asChild size='lg' variant='outline' className='text-md'>
                <Link href='#'>Visit Campus</Link>
              </Button>
            </motion.div>

            <motion.div
              className='mt-12 flex flex-wrap justify-center lg:justify-start gap-6 text-sm'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-green-500' />
                <span>#1 in Tech Innovation</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-green-500' />
                <span>98% Graduate Employment</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-green-500' />
                <span>Cutting-edge Research</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className='relative'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <div className='relative aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl overflow-hidden border-8 border-white dark:border-gray-900'>
              {/* Placeholder for university image/video */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-white text-center p-6'>
                  <div className='text-4xl font-bold mb-4'>Tech University</div>
                  <div className='text-xl'>Computer Science Department</div>
                </div>
              </div>

              {/* Animated elements */}
              <div className='absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm' />
              <div className='absolute bottom-4 left-4 w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm' />
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm' />
            </div>

            {/* Floating card elements */}
            <motion.div
              className='absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 shadow-lg rounded-xl p-4 w-32'
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}>
              <div className='text-xs text-muted-foreground'>New Program</div>
              <div className='font-bold text-sm mt-1'>
                AI & Machine Learning
              </div>
            </motion.div>

            <motion.div
              className='absolute -top-6 -right-6 bg-white dark:bg-gray-900 shadow-lg rounded-xl p-4 w-32'
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}>
              <div className='text-xs text-muted-foreground'>Research</div>
              <div className='font-bold text-sm mt-1'>Quantum Computing</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
