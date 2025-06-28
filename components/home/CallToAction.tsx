// components/home/cta.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className='relative py-16 md:py-24 overflow-hidden'>
      {/* Background with gradient and floating elements */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700' />

        {/* Floating elements */}
        <div className='absolute top-10 left-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl' />
        <div className='absolute bottom-10 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl' />

        {/* Grid pattern - fixed conflict */}
        <div
          className='absolute inset-0 opacity-10'
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className='container relative z-10'>
        <div className='max-w-3xl mx-auto text-center'>
          <motion.h2
            className='text-3xl md:text-4xl font-bold text-white mb-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            Ready to Start Your Journey?
          </motion.h2>

          <motion.p
            className='text-xl text-blue-100 mb-10'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            Join our community of innovators and problem solvers. Apply today
            and take the first step toward an exciting career in technology.
          </motion.p>

          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <Button
              asChild
              size='lg'
              className='bg-white text-blue-600 hover:bg-blue-50'>
              <Link href='#'>Apply Now</Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='bg-transparent text-white hover:bg-white/10'>
              <Link href='/programs'>Explore Programs</Link>
            </Button>
          </motion.div>

          <motion.div
            className='mt-10 text-blue-200 flex flex-wrap justify-center gap-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}>
            <div>Next Application Deadline: January 15, 2024</div>
            <div>Scholarships Available</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
