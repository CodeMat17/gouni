// components/news/news-card.tsx
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface NewsCardProps {
  item: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    imageUrl?: string;
    isBreaking?: boolean;
    readTime?: string;
    isProminent?: boolean;
  };
}

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "research":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300";
    case "achievements":
      return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300";
    case "academics":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300";
    case "campus":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300";
    case "careers":
      return "bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  }
};

export function NewsCard({ item }: NewsCardProps) {
  return (
    <div
      className={`h-full flex flex-col transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 overflow-hidden bg-white dark:bg-gray-800 rounded-xl ${
        item.isProminent ? "sm:col-span-2" : ""
      }`}>
      {/* Image container with prominent layout handling */}
      <div
        className={`relative ${
          item.isProminent ? "aspect-[3/1]" : "aspect-video"
        }`}>
        {item.imageUrl ? (
          <Image
            alt={item.title}
            fill
            src={item.imageUrl}
            className='object-cover'
          />
        ) : (
          <div className='w-full h-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center'>
            <div className='text-center p-4'>
              <div className='text-4xl mb-2'>📰</div>
              <span className='text-muted-foreground text-sm'>News Image</span>
            </div>
          </div>
        )}

        {/* Breaking badge */}
        {item.isBreaking && (
          <div className='absolute top-4 left-4'>
            <Badge variant='destructive' className='rounded-full animate-pulse'>
              Breaking
            </Badge>
          </div>
        )}
      </div>

      {/* Content container */}
      <div className='p-4 flex flex-col flex-1'>
        <div className='mb-3'>
          <Badge className={`${getCategoryColor(item.category)} rounded-full`}>
            {item.category}
          </Badge>
        </div>

        <h3
          className={`font-bold mb-2 hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer ${
            item.isProminent ? "text-xl md:text-2xl" : "text-lg"
          }`}>
          {item.title}
        </h3>

        <p
          className={`text-gray-600 dark:text-gray-300 mb-4 ${
            item.isProminent ? "line-clamp-3" : "line-clamp-2"
          }`}>
          {item.excerpt}
        </p>

        <div className='mt-auto pt-3 border-t border-gray-100 dark:border-gray-700 text-sm flex justify-between items-center'>
          <div className='text-muted-foreground'>
            {new Date(item.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
        
          </div>

          <Link
            href='#'
            className='text-blue-700 dark:text-blue-400 font-medium hover:underline flex items-center group'>
            Read full
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
