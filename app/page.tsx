// app/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import {
  Award,
  BookMarked,
  BookOpen,
  Briefcase,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  Code,
  Globe,
  GraduationCap,
  Leaf,
  Palette,
  Scale,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Sample news data for carousel with actual image paths
  const newsItems = [
    {
      id: 1,
      title: "University Launches New AI Research Center with $20M Funding",
      category: "Research",
      image: "/images/news1.jpg",
    },
    {
      id: 2,
      title: "Computer Science Team Wins International Hackathon",
      category: "Achievements",
      image: "/images/news2.jpg",
    },
    {
      id: 3,
      title: "New Cybersecurity Program Receives National Accreditation",
      category: "Academics",
      image: "/images/news3.jpg",
    },
    {
      id: 4,
      title: "Professor Johnson Awarded Nobel Prize in Physics",
      category: "Faculty",
      image: "/images/news4.jpg",
    },
    {
      id: 5,
      title: "University Partners with Tech Giants for Innovation Lab",
      category: "Partnerships",
      image: "/images/news5.jpeg",
    },
    {
      id: 6,
      title:
        "GOUNI hosts Bluecode Africa Hackathon. Winners to take home 6 million naira!",
      category: "Competitions",
      image: "/images/news6.jpg",
    },
  ];

  // Faculty data
  const faculties = [
    {
      id: 1,
      name: "Faculty of Arts",
      programs: 12,
      icon: <Palette className='w-6 h-6' />,
    },
    {
      id: 2,
      name: "Faculty of Computer Science",
      programs: 8,
      icon: <Code className='w-6 h-6' />,
    },
    {
      id: 3,
      name: "Faculty of Medicine",
      programs: 10,
      icon: <Stethoscope className='w-6 h-6' />,
    },
    {
      id: 4,
      name: "Faculty of Education",
      programs: 7,
      icon: <GraduationCap className='w-6 h-6' />,
    },
    {
      id: 5,
      name: "Faculty of Management & Social Sciences",
      programs: 9,
      icon: <Briefcase className='w-6 h-6' />,
    },
    {
      id: 6,
      name: "Faculty of Law",
      programs: 5,
      icon: <Scale className='w-6 h-6' />,
    },
    {
      id: 7,
      name: "Natural Sciences & Environmental Studies",
      programs: 5,
      icon: <Leaf className='w-6 h-6' />,
    },
  ];

  // Why choose us features
  const features = [
    {
      id: 1,
      title: "World-Class Faculty",
      description: "Learn from Nobel laureates and industry pioneers",
      icon: <Users className='w-6 h-6' />,
    },
    {
      id: 2,
      title: "Global Opportunities",
      description: "Study abroad programs in 50+ countries",
      icon: <Globe className='w-6 h-6' />,
    },
    {
      id: 3,
      title: "Cutting-Edge Research",
      description: "$100M annual research funding",
      icon: <Award className='w-6 h-6' />,
    },
    {
      id: 4,
      title: "Career Success",
      description: "95% graduate employment rate",
      icon: <GraduationCap className='w-6 h-6' />,
    },
  ];

  // Rankings data
  const rankings = [
    {
      id: 1,
      source: "QS World Rankings",
      position: "Top 50",
      field: "Computer Science",
    },
    {
      id: 2,
      source: "Times Higher Education",
      position: "#1",
      field: "Research Impact",
    },
    {
      id: 3,
      source: "Academic Ranking of World Universities",
      position: "Top 100",
      field: "Overall",
    },
  ];

  // Automate carousel
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % newsItems.length);
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, newsItems.length]);

  // Handle navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 10000);
  };

  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950'>
      {/* Top Section - Carousel and Featured Content */}
      <div className='flex flex-col sm:flex-col lg:flex-row w-full'>
        {/* Hero Carousel - Responsive width based on screen size */}
        <section
          className={`relative w-full sm:w-full lg:w-[70%] xl:w-1/2 aspect-[16/9] lg:aspect-auto lg:h-[60vh] overflow-hidden bg-gray-50 dark:bg-gray-900`}>
          <div className='absolute inset-0 z-0'>
            {newsItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-1000 px-0.5 pt-0.5 sm:px-3 sm:pt-2 ${
                  index === currentSlide ? "z-10" : "z-0"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentSlide ? 1 : 0 }}
                transition={{ duration: 1 }}>
                <div className='relative h-full w-full rounded-xl overflow-hidden'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className='object-cover'
                    priority={index === currentSlide}
                  />
                  {/* Dark overlay for text readability */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
                </div>
              </motion.div>
            ))}
          </div>

          <div className='relative z-10 h-full flex flex-col justify-end pb-16'>
            <div className='container mx-auto px-4'>
              <motion.div
                className='max-w-3xl pl-4'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                <div className='inline-block px-3 py-1 mb-2 text-sm text-white bg-black/30 backdrop-blur-sm rounded-full'>
                  {newsItems[currentSlide].category}
                </div>
                <h1 className='text-xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg line-clamp-2'>
                  {newsItems[currentSlide].title}
                </h1>
              </motion.div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2'>
            {newsItems.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-white w-4" : "bg-white/50"
                }`}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsPlaying(false);
                  setTimeout(() => setIsPlaying(true), 10000);
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            className='absolute left-4 -bottom-1  transform -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors border'
            onClick={prevSlide}>
            <ChevronLeft className='w-6 h-6' />
          </button>

          <button
            className='absolute right-4 -bottom-1 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors border'
            onClick={nextSlide}>
            <ChevronRight className='w-6 h-6' />
          </button>
        </section>

        {/* Featured Content - Responsive layout */}
        <div
          className={`w-full sm:w-full lg:w-[30%] xl:w-1/2 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 p-4 lg:p-6`}>
          {/* Quick Stats - Always visible */}
          <Card className='w-full sm:w-1/2 lg:w-full xl:w-1/2 flex flex-col justify-center dark:border-gray-700'>
            <CardHeader>
              <CardTitle className='text-xl font-bold'>
                GOUNI at a Glance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid grid-cols-2 gap-4'>
                {[
                  { value: "95%", label: "Graduate Employment" },
                  { value: "10:1", label: "Student-Faculty Ratio" },
                  { value: "50+", label: "Research Centers" },
                  { value: "120+", label: "Nationalities" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className='bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center'>
                    <div className='text-2xl font-bold text-primary'>
                      {stat.value}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Rankings */}
          <Card className={`w-full sm:w-1/2 lg:hidden xl:block xl:w-1/2 dark:bg-gray-800`}>
            <CardHeader>
              <CardTitle className='text-xl font-bold'>
                University Rankings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='mt-4 space-y-4'>
                {rankings.map((ranking) => (
                  <div
                    key={ranking.id}
                    className='flex items-center justify-between'>
                    <div>
                      <h4 className='font-medium'>{ranking.source}</h4>
                      <p className='text-muted-foreground text-sm'>
                        {ranking.field}
                      </p>
                    </div>
                    <div className='text- font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-2 py-1 rounded-lg text-center'>
                      {ranking.position}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Top Stories and Why Choose Us */}
      <section className='max-w-7xl mx-auto px-4 py-8'>
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Top Stories - MSN Style */}
          <div className='lg:w-8/12'>
            <div className='flex items-center justify-between mb-4 pb-2 border-b'>
              <h2 className='text-xl font-bold'>Top Stories</h2>
              <Button asChild variant='link' size='sm' className='text-primary px-0'>
                <Link href='/news'>See all</Link>
           
              </Button>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              {newsItems.slice(0, 6).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className='group'>
                  <Link href='#' className='block'>
                    <div className='relative aspect-video overflow-hidden rounded-lg mb-2'>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className='object-cover transition-transform duration-300 group-hover:scale-105'
                      />
                      <div className='absolute bottom-2 left-2 inline-block px-2 py-1 text-xs text-white bg-black/50 backdrop-blur-sm rounded'>
                        {item.category}
                      </div>
                    </div>
                    <h3 className='font-medium text-sm md:text-base group-hover:text-primary transition-colors line-clamp-2'>
                      {item.title}
                    </h3>
                    <p className='text-xs text-muted-foreground mt-1'>2h ago</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className='lg:w-4/12'>
            <div className='bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 h-full'>
              <div className='flex items-center justify-between mb-6'>
                <h2 className='text-xl font-bold'>Why Choose Us?</h2>
                <div className='bg-blue-100 dark:bg-blue-900/50 w-10 h-10 rounded-full flex items-center justify-center'>
                  <Star className='w-5 h-5 text-blue-600 dark:text-blue-400' />
                </div>
              </div>

              <div className='space-y-4'>
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='flex items-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg'>
                    <div className='p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400'>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className='font-semibold'>{feature.title}</h3>
                      <p className='text-sm text-muted-foreground mt-1'>
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button className='w-full mt-6'>Discover More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className='container mx-auto px-4 pb-12'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Left Column */}
          <div className='lg:col-span-2 space-y-8'>
            {/* Faculties Section */}
            <section>
              <div className='flex items-center justify-between mb-6'>
                <h2 className='text-2xl font-bold'>Our Faculties</h2>
                <Button variant='link' className='text-primary'>
                  View All Faculties
                </Button>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                {faculties.map((faculty, index) => (
                  <motion.div
                    key={faculty.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}>
                    <Card className='h-full hover:shadow-lg transition-shadow'>
                      <CardHeader className='flex flex-row items-center space-x-3'>
                        <div className='p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400'>
                          {faculty.icon}
                        </div>
                        <CardTitle className='text-lg'>
                          {faculty.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className='text-muted-foreground'>
                          {faculty.programs} programs
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant='link'
                          size='sm'
                          className='px-0 text-primary'>
                          Explore Programs
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Courses Highlight */}
            <section>
              <div className='flex items-center justify-between mb-6'>
                <h2 className='text-2xl font-bold'>Featured Courses</h2>
                <Button asChild variant='link' className='text-primary'>
              <Link href='/courses'>Browse All Courses</Link>
                </Button>
              </div>

              <Card className='overflow-hidden'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-6'>
                  <div className='p-'>
                    <h3 className='text-xl font-bold mb-2'>
                      Computer Science Programs
                    </h3>
                    <p className='text-muted-foreground mb-6'>
                      Cutting-edge programs designed for the digital age
                    </p>

                    <div className='space-y-4'>
                      {[
                        "Artificial Intelligence",
                        "Cybersecurity",
                        "Data Science",
                        "Cloud Computing",
                        "Quantum Computing",
                      ].map((course, index) => (
                        <div key={index} className='flex items-center'>
                          <div className='mr-3 text-primary'>
                            <Star className='w-4 h-4 fill-current' />
                          </div>
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>

                    <Button className='mt-6'>Apply Now</Button>
                  </div>

                  <div className='bg-gradient-to-br from-blue-500 to-indigo-600 p-6 flex items-center justify-center rounded-xl'>
                    <div className='text-center text-white'>
                      <GraduationCap className='w-12 h-12 mx-auto mb-4' />
                      <h3 className='text-xl font-bold mb-2'>
                        2025 Admissions Open
                      </h3>
                      <p className='mb-4'>Limited seats available</p>
                      <Button
                        variant='outline'
                        className='bg-white text-blue-600 hover:bg-blue-50 dark:bg-blue-900 dark:text-white'>
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </section>
          </div>

          {/* Right Column */}
          <div className='space-y-8'>
            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-3'>
                  {[
                    {
                      title: "Student Portal",
                      icon: <BookOpen className='w-5 h-5' />,
                    },
                    {
                      title: "Faculty Directory",
                      icon: <Users className='w-5 h-5' />,
                    },
                    {
                      title: "Library Resources",
                      icon: <BookMarked className='w-5 h-5' />,
                    },
                    {
                      title: "Academic Calendar",
                      icon: <CalendarCheck className='w-5 h-5' />,
                    },
                    {
                      title: "Campus Map",
                      icon: <Globe className='w-5 h-5' />,
                    },
                    {
                      title: "Career Services",
                      icon: <GraduationCap className='w-5 h-5' />,
                    },
                  ].map((link, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className='flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer'>
                      <div className='text-primary'>{link.icon}</div>
                      <span>{link.title}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Liaison Offices */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl font-bold'>
                  Liaison Offices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {[
                    {
                      location: "Abuja",
                      contact: "abuja@university.edu",
                    },
                    { location: "Lagos", contact: "lagos@university.edu" },
                    { location: "Kano", contact: "kano@university.edu" },
                    { location: "Awka", contact: "awka@university.edu" },
                    {
                      location: "Australia",
                      contact: "au@university.edu",
                    },
                    {
                      location: "Germany",
                      contact: "ger@university.edu",
                    },
                  ].map((office, index) => (
                    <div
                      key={index}
                      className='flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-800'>
                      <div>
                        <h4 className='font-medium'>{office.location}</h4>
                        <p className='text-muted-foreground text-sm'>
                          {office.contact}
                        </p>
                      </div>
                      <Button variant='outline' size='sm'>
                        Contact
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
                <p className='text-muted-foreground text-sm'>
                  Subscribe to our newsletter
                </p>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='email'>Email Address</Label>
                    <Input id='email' placeholder='your@email.com' />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='interest'>Area of Interest</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder='Select interest' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='undergrad'>
                          Undergraduate Programs
                        </SelectItem>
                        <SelectItem value='grad'>Graduate Programs</SelectItem>
                        <SelectItem value='research'>
                          Research Updates
                        </SelectItem>
                        <SelectItem value='events'>Campus Events</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className='w-full'>Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
   
    </div>
  );
}
