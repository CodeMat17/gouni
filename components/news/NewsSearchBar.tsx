// components/SearchBar.tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function NewsSearchBar({
  placeholder = "Search...",
  className = "",
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className={`relative ${className}`}>
      <Input
        type='text'
        placeholder={placeholder}
        className='w-full py-5 px-6 rounded-full bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 pr-14'
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      <Button
        className='absolute right-3 top-1/2 transform -translate-y-1/2 bg-white text-blue-900 p-2 rounded-full hover:bg-gray-100'
        size='icon'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='currentColor'>
          <path
            fillRule='evenodd'
            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
            clipRule='evenodd'
          />
        </svg>
      </Button>
    </div>
  );
}
