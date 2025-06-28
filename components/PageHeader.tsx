// components/page-header.tsx
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("container py-12 text-center", className)}>
      <h1 className='text-4xl font-bold tracking-tight lg:text-5xl'>{title}</h1>
      {description && (
        <p className='mt-4 text-xl text-muted-foreground max-w-3xl mx-auto'>
          {description}
        </p>
      )}
      {/* <div className='mt-2 flex justify-center'>
        <div className='w-24 h-1 bg-primary rounded-full' />
      </div> */}
    </div>
  );
}
