// components/home/news-preview.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function NewsPreview() {
  const newsItems = [
    {
      id: "1",
      title: "University Launches New AI Research Center",
      date: "2023-10-15",
      category: "Research",
      excerpt: "$20M investment in artificial intelligence research facility",
    },
    {
      id: "2",
      title: "CS Students Win National Hackathon",
      date: "2023-09-28",
      category: "Achievements",
      excerpt: "Developed innovative healthcare solution using blockchain",
    },
    {
      id: "3",
      title: "New Cybersecurity Program Approved",
      date: "2023-09-12",
      category: "Academics",
      excerpt: "Graduate program starting Fall 2024",
    },
  ];

  return (
    <div className='py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950'>
      <div className='container'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16'>
          <div>
            <motion.h2
              className='text-3xl md:text-4xl font-bold mb-4'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}>
              University News
            </motion.h2>
            <motion.p
              className='text-xl text-muted-foreground max-w-2xl'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              Stay updated with the latest happenings in our community
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <Button asChild variant='outline'>
              <Link href='/news'>View All News</Link>
            </Button>
          </motion.div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Card className='h-full flex flex-col hover:shadow-lg transition-shadow'>
                <CardHeader>
                  <div className='flex justify-between items-center'>
                    <span className='inline-flex items-center rounded-md bg-blue-100 dark:bg-blue-900/50 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-400'>
                      {item.category}
                    </span>
                    <div className='flex items-center text-sm text-muted-foreground'>
                      <CalendarDays className='mr-1 h-4 w-4' />
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className='flex-1'>
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <p className='text-muted-foreground'>{item.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant='link' className='px-0'>
                    <Link href={`/news/${item.id}`}>
                      Read full story <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
