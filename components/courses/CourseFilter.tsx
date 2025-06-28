// components/courses/CourseFilter.tsx
"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CourseFilterProps {
  onFilterChange: (filters: {
    levels: string[];
    credits: [number, number];
    prerequisites: boolean | null;
  }) => void;
  isMobile: boolean;
  filters: {
    levels: string[];
    credits: [number, number];
    prerequisites: boolean | null;
  };
}

const initialFilters = {
  levels: ["Year 1", "Year 2", "Year 3", "Year 4"],
  credits: [0, 8] as [number, number], // Updated to start from 0
  prerequisites: null as boolean | null,
};

export function CourseFilter({
  onFilterChange,
  isMobile,
  filters,
}: CourseFilterProps) {
  const [isExpanded, setIsExpanded] = React.useState(!isMobile);

  const handleLevelChange = (level: string) => {
    const newLevels = filters.levels.includes(level)
      ? filters.levels.filter((l) => l !== level)
      : [...filters.levels, level];

    onFilterChange({ ...filters, levels: newLevels });
  };

  const handleCreditChange = (value: number[]) => {
    onFilterChange({ ...filters, credits: value as [number, number] });
  };

  // const handlePrerequisiteChange = (value: boolean | null) => {
  //   onFilterChange({ ...filters, prerequisites: value });
  // };

  const resetFilters = () => {
    onFilterChange(initialFilters);
  };

  const yearLevels = [
    { name: "Year 1", abbr: "Y1" },
    { name: "Year 2", abbr: "Y2" },
    { name: "Year 3", abbr: "Y3" },
    { name: "Year 4", abbr: "Y4" },
  ];

  return (
    <div className='border rounded-lg p-4 xl:p-6 bg-background'>
      <div className='flex justify-between items-center mb-4 md:mb-6'>
        <h3 className='text-lg font-semibold'>Filter Courses</h3>
        <Button
          variant='ghost'
          size='sm'
          onClick={() => setIsExpanded(!isExpanded)}
          className='text-muted-foreground md:hidden'
          aria-label={isExpanded ? "Collapse filters" : "Expand filters"}>
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </Button>
      </div>

      {isExpanded && (
        <div className='space-y-6 md:space-y-8'>
          <div>
            <h4 className='font-medium mb-3'>Course Level</h4>
            <div className='grid grid-cols-2 gap-3'>
              {yearLevels.map((year) => (
                <div key={year.name} className='flex items-center space-x-2'>
                  <Checkbox
                    id={year.name}
                    checked={filters.levels.includes(year.name)}
                    onCheckedChange={() => handleLevelChange(year.name)}
                  />
                  <Label
                    htmlFor={year.name}
                    className='flex items-center cursor-pointer'>
                    {year.name}
                    <Badge variant='outline' className='ml-2 text-xs'>
                      {year.abbr}
                    </Badge>
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className='font-medium mb-3'>
              Credit Range: {filters.credits[0]} - {filters.credits[1]}
            </h4>
            <Slider
              min={0} // Updated to start from 0
              max={8}
              step={1}
              value={filters.credits}
              onValueChange={handleCreditChange}
              minStepsBetweenThumbs={1}
            />
            <div className='flex justify-between text-sm text-muted-foreground mt-1'>
              <span>0 credits</span> {/* Updated label */}
              <span>8 credits</span>
            </div>
          </div>

          {/* <div>
            <h4 className='font-medium mb-3'>Prerequisites</h4>
            <div className='flex flex-wrap gap-4'>
              <div className='flex items-center space-x-2'>
                <Checkbox
                  id='with-prerequisites'
                  checked={filters.prerequisites === true}
                  onCheckedChange={(checked) =>
                    handlePrerequisiteChange(checked ? true : null)
                  }
                />
                <Label htmlFor='with-prerequisites' className='cursor-pointer'>
                  With Prerequisites
                </Label>
              </div>
              <div className='flex items-center space-x-2'>
                <Checkbox
                  id='without-prerequisites'
                  checked={filters.prerequisites === false}
                  onCheckedChange={(checked) =>
                    handlePrerequisiteChange(checked ? false : null)
                  }
                />
                <Label
                  htmlFor='without-prerequisites'
                  className='cursor-pointer'>
                  Without Prerequisites
                </Label>
              </div>
            </div>
          </div> */}

          <Button
            variant='outline'
            className='w-full mt-4'
            onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}
