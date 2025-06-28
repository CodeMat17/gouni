// components/footer.tsx

import Image from "next/image";

export function Footer() {

  return (
    <footer className='bg-gray-900 text-white py-12 mt-16'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='relative w-16 h-16 rounded-full shrink-0'>
                <Image alt="logo" fill src='/logo.png' className="object-cover shrink-0" />
              </div>
              <span className='font-bold text-xl'>Godfrey Okoye University</span>
            </div>
            <p className='text-gray-400'>
              Pioneering education and research since 1850. Ranked among the top
              universities globally.
            </p>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4'>Quick Links</h3>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Faculties
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Directorates
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Research
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Campus Life
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4'>Contact</h3>
            <address className='not-italic text-gray-400'>
              <p className='mb-2'>123 Education Avenue</p>
              <p className='mb-2'>Thinkers Corner, Enugu.</p>
              <p className='mb-2'>Phone: (555) 123-4567</p>
              <p className='mb-4'>Email: info@techuniversity.edu</p>
            </address>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4'>Follow Us</h3>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors'>
                <FacebookIcon />
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors'>
                <TwitterIcon />
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors'>
                <InstagramIcon />
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors'>
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-500'>
          <p>
            © {new Date().getFullYear()} Godfrey Okoye University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Social Media Icons
function TwitterIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
      <rect width='4' height='12' x='2' y='9' />
      <circle cx='4' cy='4' r='2' />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
      <line x1='17.5' y1='6.5' x2='17.5' y2='6.5' />
    </svg>
  );
}
