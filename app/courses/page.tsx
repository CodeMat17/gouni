// courses/page.tsx
"use client";

import { PageHeader } from "@/components/PageHeader";
import { CourseFilter } from "@/components/courses/CourseFilter";
import { CourseList } from "@/components/courses/CourseList";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface Course {
  id: string;
  code: string;
  title: string;
  description: string;
  credits: number;
  level: "Year 1" | "Year 2" | "Year 3" | "Year 4";
  prerequisites?: string[];
  department: string;
}

const computerScienceCourses: Course[] = [
  {
    id: "cs101",
    code: "CS 101",
    title: "Introduction to Programming",
    description: "Fundamental concepts of programming using Python",
    credits: 4,
    level: "Year 1",
    department: "Computer Science",
  },
  {
    id: "cs110",
    code: "CS 110",
    title: "Computational Thinking",
    description: "Problem-solving approaches for computational challenges",
    credits: 2,
    level: "Year 1",
    department: "Computer Science",
  },
  {
    id: "cs201",
    code: "CS 201",
    title: "Data Structures",
    description: "Study of fundamental data structures and algorithms",
    credits: 4,
    level: "Year 2",
    prerequisites: ["CS 101"],
    department: "Computer Science",
  },
  {
    id: "cs202",
    code: "CS 202",
    title: "Database Systems",
    description: "Design and implementation of database systems",
    credits: 3,
    level: "Year 2",
    prerequisites: ["CS 101"],
    department: "Computer Science",
  },
  {
    id: "cs301",
    code: "CS 301",
    title: "Advanced Algorithms",
    description: "Design and analysis of efficient algorithms",
    credits: 3,
    level: "Year 3",
    prerequisites: ["CS 201"],
    department: "Computer Science",
  },
  {
    id: "cs302",
    code: "CS 302",
    title: "Operating Systems",
    description: "Principles and design of operating systems",
    credits: 5,
    level: "Year 3",
    prerequisites: ["CS 201"],
    department: "Computer Science",
  },
  {
    id: "cs401",
    code: "CS 401",
    title: "Machine Learning",
    description: "Introduction to machine learning concepts and applications",
    credits: 4,
    level: "Year 4",
    department: "Computer Science",
  },
  {
    id: "cs402",
    code: "CS 402",
    title: "Cloud Computing",
    description: "Distributed systems and cloud infrastructure",
    credits: 3,
    level: "Year 4",
    department: "Computer Science",
  },
  {
    id: "cs403",
    code: "CS 403",
    title: "Capstone Project",
    description: "Final year research and development project",
    credits: 6,
    level: "Year 4",
    prerequisites: ["CS 301", "CS 302"],
    department: "Computer Science",
  },
  {
    id: "cs404",
    code: "CS 404",
    title: "Seminar in Computer Science",
    description: "Research presentation and discussion",
    credits: 0,
    level: "Year 4",
    department: "Computer Science",
  },
];

const lawCourses: Course[] = [];

const allCourses = [...computerScienceCourses, ...lawCourses];
const departments = ["Computer Science", "Law"];

export default function CoursesPage() {
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(
    computerScienceCourses
  );
  const [isMobile, setIsMobile] = useState(false);
  const [selectedDepartment, setSelectedDepartment] =
    useState("Computer Science");
  const [filters, setFilters] = useState({
    levels: ["Year 1", "Year 2", "Year 3", "Year 4"],
    credits: [0, 8] as [number, number], // Updated to start from 0
    prerequisites: null as boolean | null,
  });

  // Handle mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Apply filters when department or filters change
  useEffect(() => {
    applyFilters();
  }, [selectedDepartment, filters]);

  const applyFilters = () => {
    const filtered = allCourses
      .filter((course) => course.department === selectedDepartment)
      .filter((course) => {
        // Level filter
        if (!filters.levels.includes(course.level)) return false;

        // Credit filter
        const [minCredit, maxCredit] = filters.credits;
        if (course.credits < minCredit || course.credits > maxCredit) {
          return false;
        }

        // Prerequisites filter
        if (filters.prerequisites !== null) {
          if (filters.prerequisites === true && !course.prerequisites)
            return false;
          if (filters.prerequisites === false && course.prerequisites)
            return false;
        }

        return true;
      });

    setFilteredCourses(filtered);
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  return (
    <div className='w-full max-w-7xl mx-auto p-4 '>
      <PageHeader
        title='Courses'
        description='Explore our cutting-edge curriculum designed for future leaders'
      />

      <div className='flex justify-center mb-8'>
        <div className='w-full max-w-md mx-auto '>
          <div className='flex flex-col'>
            <Label className='text-sm font-medium mb-2 text-center md:text-left'>
              Select Department
            </Label>
            <Select
              value={selectedDepartment}
              onValueChange={setSelectedDepartment}>
              <SelectTrigger className='bg-white h-12 w-full'>
                <SelectValue placeholder='Select department' />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept} className='py-3'>
                    {dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='flex flex-col md:grid md:grid-cols-1 lg:grid-cols-4 gap-4'>
          <div className='lg:col-span-1'>
            <CourseFilter
              onFilterChange={handleFilterChange}
              isMobile={isMobile}
              filters={filters}
            />
          </div>
          <div className='lg:col-span-3'>
            {selectedDepartment === "Law" ? (
              <div className='border rounded-lg p-12 text-center bg-muted'>
                <h3 className='text-xl font-medium'>No courses added yet</h3>
                <p className='text-muted-foreground mt-2'>
                  The {selectedDepartment} department courses will be available
                  soon
                </p>
              </div>
            ) : filteredCourses.length > 0 ? (
              <CourseList courses={filteredCourses} />
            ) : (
              <div className='border rounded-lg p-12 text-center bg-muted'>
                <h3 className='text-xl font-medium'>No courses found</h3>
                <p className='text-muted-foreground mt-2'>
                  Try adjusting your filters to see more results
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
