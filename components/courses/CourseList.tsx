// components/courses/CourseList.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CourseListProps {
  courses: {
    id: string;
    code: string;
    title: string;
    description: string;
    credits: number;
    level: "Year 1" | "Year 2" | "Year 3" | "Year 4";
    prerequisites?: string[];
  }[];
}

const getYearColor = (level: string) => {
  switch (level) {
    case "Year 1":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100";
    case "Year 2":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100";
    case "Year 3":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100";
    case "Year 4":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100";
  }
};

export function CourseList({ courses }: CourseListProps) {
  return (
    <div className='space-y-4 md:space-y-6'>
      {courses.map((course) => (
        <Card
          key={course.id}
          className='hover:shadow-md transition-shadow duration-300 overflow-hidden'>
          <CardHeader className='pb-3'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-2'>
              <CardTitle className='text-lg md:text-xl'>
                <span className='font-mono text-primary'>{course.code}</span>:{" "}
                {course.title}
              </CardTitle>
              <div className='flex flex-wrap gap-2'>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getYearColor(
                    course.level
                  )}`}>
                  {course.level.replace("Year ", "Y")}
                </div>
                <Badge variant='outline' className='text-xs font-medium'>
                  {course.credits === 0
                    ? "Non-credit"
                    : `${course.credits} Credit${
                        course.credits !== 1 ? "s" : ""
                      }`}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className='pt-0'>
            <p className='mb-3 text-muted-foreground'>{course.description}</p>
            {course.prerequisites && course.prerequisites.length > 0 && (
              <div className='mt-3 pt-3 border-t border-muted'>
                <p className='text-sm'>
                  <span className='font-medium'>Prerequisites:</span>{" "}
                  {course.prerequisites.join(", ")}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
