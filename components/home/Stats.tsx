// components/home/stats.tsx
"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, Briefcase, Globe } from "lucide-react";

export function Stats() {
  const stats = [
    {
      id: 1,
      value: 98,
      suffix: "%",
      label: "Graduate Employment",
      icon: Briefcase,
    },
    {
      id: 2,
      value: 2500,
      suffix: "+",
      label: "Students Enrolled",
      icon: Users,
    },
    {
      id: 3,
      value: 95,
      suffix: "%",
      label: "Student Satisfaction",
      icon: GraduationCap,
    },
    {
      id: 4,
      value: 50,
      suffix: "+",
      label: "Countries Represented",
      icon: Globe,
    },
  ];

  return (
    <div className='bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950 py-16 md:py-24'>
      <div className='container'>
        <div className='text-center mb-16'>
          <motion.h2
            className='text-3xl md:text-4xl font-bold mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            By The Numbers
          </motion.h2>
          <motion.p
            className='text-xl text-muted-foreground max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            Our commitment to excellence in computer science education is
            reflected in our achievements
          </motion.p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                className='bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-800'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className='flex items-center mb-4'>
                  <div className='p-3 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'>
                    <Icon size={24} />
                  </div>
                </div>

                <div className='flex items-baseline mb-2'>
                  <motion.span
                    className='text-3xl md:text-4xl font-bold'
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}>
                    {stat.value}
                  </motion.span>
                  <span className='text-xl text-primary font-bold'>
                    {stat.suffix}
                  </span>
                </div>

                <p className='text-muted-foreground'>{stat.label}</p>

                <div className='mt-4 h-1 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden'>
                  <motion.div
                    className='h-full bg-gradient-to-r from-blue-500 to-purple-600'
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${stat.value > 100 ? 100 : stat.value}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
