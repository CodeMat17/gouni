// components/mobile-nav.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavItem {
  name: string;
  href: string;
}

interface MobileNavProps {
  items: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);



  return (
    <div className='md:hidden'>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='rounded-full'>
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='right' className='w-[300px] sm:w-[340px] px-4'>
          <SheetHeader>
            <SheetTitle className='text-left'>Navigation</SheetTitle>
          </SheetHeader>
          <div className='mt-8 flex flex-col space-y-4'>
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='py-2 px-4 rounded-lg hover:bg-accent transition-colors'
                onClick={() => setOpen(false)}>
                {item.name}
              </Link>
            ))}
            {/* <Button asChild className='mt-4'>
              <Link href='#'>Apply Now</Link>
            </Button> */}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
