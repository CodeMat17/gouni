// components/header.tsx
'use client'

import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { MobileNav } from "@/components/MobileNav";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {

  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "News", href: "/news" },
  ];

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-[#253B80] backdrop-blur'>
      <div className='w-full px-4 py-2 max-w-8xl mx-auto flex  items-center justify-between'>
        <div className='flex items-center space-x-10'>
          <Link href='/' className='flex items-center space-x-2'>
            <div className='relative w-16 h-16 rounded-full'>
            <Image alt="logo" priority fill src='/logo.png' /></div>
            <span className='font-bold text-xl text-white'>GOUNI</span>
          </Link>

          <nav className='hidden md:flex space-x-6'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-font-medium transition-colors ${item.href === pathname ? 'text-[#179BD7]' : 'text-white'} hover:text-[#179BD7]`}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className='flex items-center space-x-4'>
          {/* <Button variant='outline' size='sm' asChild>
            <Link href='#'>Apply Now</Link>
          </Button> */}
          <ModeToggle />
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  );
}
