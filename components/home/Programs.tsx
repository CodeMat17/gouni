// components/home/programs.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Code, Cpu, Lock, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Programs() {
  const programs = [
    {
      id: 1,
      title: "B.Sc. Computer Science",
      description:
        "Comprehensive foundation in computing principles and programming",
      icon: Code,
      duration: "4 years",
      path: "/programs/bsc-cs",
    },
    {
      id: 2,
      title: "M.Sc. Artificial Intelligence",
      description:
        "Advanced study of machine learning, neural networks, and AI systems",
      icon: BrainCircuit,
      duration: "2 years",
      path: "/programs/msc-ai",
    },
    {
      id: 3,
      title: "B.Sc. Software Engineering",
      description:
        "Focus on software development lifecycle and engineering practices",
      icon: Cpu,
      duration: "4 years",
      path: "/programs/bsc-se",
    },
    {
      id: 4,
      title: "M.Sc. Cybersecurity",
      description:
        "Specialized training in network security and ethical hacking",
      icon: Lock,
      duration: "2 years",
      path: "/programs/msc-cyber",
    },
  ];

  return (
    <div className='py-16 md:py-24'>
      <div className='container'>
        <div className='text-center mb-16'>
          <motion.h2
            className='text-3xl md:text-4xl font-bold mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            Academic Programs
          </motion.h2>
          <motion.p
            className='text-xl text-muted-foreground max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            Explore our cutting-edge computer science programs designed for
            tomorrow&apos;s tech leaders
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Card className='h-full flex flex-col hover:shadow-lg transition-shadow'>
                  <CardHeader>
                    <div className='p-3 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg w-12 h-12 flex items-center justify-center mb-4'>
                      <Icon size={24} />
                    </div>
                    <CardTitle>{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent className='flex-1'>
                    <p className='text-muted-foreground'>
                      {program.description}
                    </p>
                    <div className='mt-4 flex items-center text-sm text-muted-foreground'>
                      <GraduationCap className='mr-2 h-4 w-4' />
                      {program.duration}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant='link'
                      className='px-0 text-primary'>
                      <Link href={program.path}>Learn more</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className='mt-12 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <Button asChild size='lg' variant='outline'>
            <Link href='/programs'>View All Programs</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
