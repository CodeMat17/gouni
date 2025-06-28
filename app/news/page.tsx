// app/news/page.tsx
"use client";

import { PageHeader } from "@/components/PageHeader";
import { NewsCard } from "@/components/news/NewsCard";
import { NewsSearchBar } from "@/components/news/NewsSearchBar";
import { useState } from "react";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl?: string;
  isBreaking?: boolean;
  isProminent?: boolean;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "University Launches New AI Research Center with $20M Investment",
    excerpt:
      "Tech University announces a groundbreaking artificial intelligence research facility that will partner with industry leaders",
    date: "2023-10-15",
    category: "Research",
    isBreaking: true,
  },
  {
    id: "2",
    title: "Computer Science Students Win National Hackathon Championship",
    excerpt:
      "Undergraduate team develops innovative blockchain healthcare solution, beating teams from 50 universities",
    date: "2023-09-28",
    category: "Achievements",
    imageUrl: "/images/news1.jpg",
  },
  {
    id: "3",
    title:
      "State Approves New Graduate Cybersecurity Program Starting Fall 2024",
    excerpt:
      "Program will address critical workforce shortages with industry-aligned curriculum and certifications",
    date: "2023-09-12",
    category: "Academics",

  },
  {
    id: "4",
    title:
      "Professor Awarded $1.2M NSF Grant for Quantum Computing Breakthrough",
    excerpt:
      "Dr. Jane Smith's research could revolutionize how we approach complex computational problems",
    date: "2023-08-30",
    category: "Research",
    isBreaking: true,
    imageUrl: "/images/news1.jpg",
    isProminent: true,
  },
  {
    id: "5",
    title:
      "Campus Unveils Sustainable Engineering Building with Cutting-Edge Labs",
    excerpt:
      "New $45M facility features net-zero energy design and collaborative innovation spaces",
    date: "2023-08-15",
    category: "Campus",
    imageUrl: "/images/news1.jpg",
  },
  {
    id: "6",
    title:
      "University Partners with Tech Giants for Exclusive Internship Program",
    excerpt:
      "Students gain priority access to internships at Microsoft, Google, and Amazon",
    date: "2023-07-22",
    category: "Careers",
  },
  {
    id: "7",
    title:
      "New Study Abroad Program Launched in Partnership with European Universities",
    excerpt:
      "Students can now spend semesters at leading tech institutions in Germany and Switzerland",
    date: "2023-07-10",
    category: "Academics",
    isProminent: true,
  },
  {
    id: "8",
    title: "University Athletics Program Ranked #1 in Academic Performance",
    excerpt:
      "Student-athletes achieve record GPA while winning conference championships",
    date: "2023-06-18",
    category: "Achievements",
    imageUrl: "/images/news1.jpg",
    isBreaking: true,
  },
];

const categories = [
  { id: "all", name: "All News" },
  { id: "research", name: "Research" },
  { id: "achievements", name: "Achievements" },
  { id: "academics", name: "Academics" },
  { id: "campus", name: "Campus" },
  { id: "careers", name: "Careers" },
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleItems, setVisibleItems] = useState(6);

  const filteredItems = newsItems.filter((item) => {
    // Category filter
    if (
      selectedCategory !== "all" &&
      item.category.toLowerCase() !== selectedCategory
    ) {
      return false;
    }

    // Search filter
    if (
      searchQuery &&
      !item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  const featuredItem = filteredItems[0];
  const otherItems = filteredItems.slice(1, visibleItems);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 4);
  };

  return (
    <div className='bg-gray-50 dark:bg-slate-950 w-full min-h-screen px-4'>
      <div className='max-w-7xl mx-auto'>
        <PageHeader
          title='Our News Blog'
          description='Breaking news and stories from Godfrey Okoye university community'
        />

        <div className='max-w-md mx-auto'>
          <NewsSearchBar
            placeholder='Search campus news...'
            value={searchQuery}
            onChange={setSearchQuery}
          />
        </div>

        <div className='py-8'>
          {/* Breaking news banner */}
          <div className='bg-red-600 text-white py-3 px-4 mb-8 rounded-md flex items-center'>
            <span className='font-bold mr-3 animate-pulse'>BREAKING:</span>
            <div className='truncate'>
              University announces record $100M donation for scholarship fund
            </div>
          </div>

          {/* Category navigation */}
          <div className='mb-8 overflow-x-auto pb-2'>
            <div className='flex space-x-2 min-w-max'>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? "bg-blue-700 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                  }`}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setVisibleItems(8);
                  }}>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Featured story */}
          {filteredItems.length > 0 && (
            <div className='mb-12 bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden'>
              <div className='md:flex'>
                <div className='md:w-2/3'>
                  <div className='h-[280px] md:h-full bg-gray-200 border-b relative'>
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
                    <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                      <div className='flex items-center mb-2'>
                        <span className='bg-red-600 text-xs px-2 py-1 rounded mr-2'>
                          Featured Story
                        </span>
                        <span className='text-sm'>
                          {new Date(featuredItem.date).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </div>
                      <h2 className='text-2xl md:text-3xl font-bold mb-2'>
                        {featuredItem.title}
                      </h2>
                      <p className='text-white/90 mb-4 line-clamp-2'>
                        {featuredItem.excerpt}
                      </p>
                      <div className='flex items-center justify-between'>
                        <span className='bg-blue-700 px-3 py-1 rounded-full text-sm'>
                          {featuredItem.category}
                        </span>
                        <button className='bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100'>
                          Read Full Story
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='md:w-1/3'>
                  <div className='p-6'>
                    <h3 className='text-lg font-bold mb-4'>
                      Top Headlines
                    </h3>
                    <div className='space-y-4'>
                      {newsItems.slice(0, 3).map((item, index) => (
                        <div
                          key={item.id}
                          className='pb-4 border-b border-gray-100 last:border-0 last:pb-0'>
                          <div className='flex items-start'>
                            <span className='text-2xl font-bold mr-3'>
                              {index + 1}
                            </span>
                            <div>
                              <h4 className='font-semibold hover:text-blue-700 cursor-pointer'>
                                {item.title}
                              </h4>
                              <div className='flex items-center text-xs mt-1'>
                                <span>{item.category}</span>
                              
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* News grid */}
          <div>
            <h3 className='text-2xl font-bold mb-6 flex items-center'>
              Latest News
              <span className='ml-2 bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded'>
                {filteredItems.length}{" "}
                {filteredItems.length === 1 ? "story" : "stories"}
              </span>
            </h3>

            {filteredItems.length === 0 ? (
              <div className='text-center py-12'>
                <div className='text-5xl mb-4'>🔍</div>
                <h4 className='text-xl font-medium mb-2'>
                  No news found
                </h4>
                <p className='max-w-md mx-auto'>
                  Try adjusting your search or filter criteria to find what
                  you&apos;re looking for.
                </p>
              </div>
            ) : (
              <>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 grid-flow-dense'>
                  {otherItems.map((item) => (
                    <NewsCard key={item.id} item={item} />
                  ))}
                </div>

                {visibleItems < filteredItems.length && (
                  <div className='mt-12 flex justify-center'>
                    <button
                      onClick={loadMore}
                      className='px-8 py-3 border border-gray-300 rounded-full font-medium hover:bg-gray-50 shadow-sm transition-all hover:shadow-md flex items-center'>
                      Load More Stories
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 ml-2'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path
                          fillRule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
