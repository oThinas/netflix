/** Core */
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs';

/** Components */
import { AccountMenu } from './AccountMenu';
import { MobileMenu } from './MobileMenu';
import { NavbarItem } from './NavbarItem';
import { ProfileImage } from './ProfileImage';
import { Text } from './Text';

const TOP_OFFSET = 66;

export function Navbar() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  const [isAccountMenuShown, setIsAccountMenuShown] = useState(false);
  const [isBackgroundShown, setIsBackgroundShown] = useState(false);

  const handleToggleMobileMenu = useCallback(
    () => {
      setIsMobileMenuShown((prevState) => !prevState);
    },
    [],
  );

  const handleToggleAccountMenu = useCallback(
    () => {
      setIsAccountMenuShown((prevState) => !prevState);
    },
    [],
  );

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > TOP_OFFSET) setIsBackgroundShown(true);
      else setIsBackgroundShown(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className='fixed z-40 w-full '>
      <div className={`flex items-center px-4 py-6 transition duration-500 md:px-16 ${isBackgroundShown ? 'bg-zinc-900/90' : ''}`}>
        <Image src='/images/logo.png' alt='Netflix logo. Written in red' className='h-4 lg:h-7' style={{ width: 'auto' }} width={1440} height={393} />

        <div className='ml-8 hidden gap-7 lg:flex'>
          <NavbarItem>
            Home
          </NavbarItem>

          <NavbarItem>
            Series
          </NavbarItem>

          <NavbarItem>
            Films
          </NavbarItem>

          <NavbarItem>
            New & Popular
          </NavbarItem>

          <NavbarItem>
            My List
          </NavbarItem>

          <NavbarItem>
            Browse by languages
          </NavbarItem>
        </div>

        <div className='relative ml-8 flex cursor-pointer items-center gap-2 lg:hidden' onClick={() => handleToggleMobileMenu()}>
          <Text as='p' className='text-sm'>
            Browse
          </Text>

          <BsChevronDown className={`text-white transition ${isMobileMenuShown ? 'rotate-180' : 'rotate-0'}`} />

          <MobileMenu visible={isMobileMenuShown} />
        </div>

        <div className='ml-auto flex items-center gap-7'>
          <div className='cursor-pointer text-gray-200 transition hover:text-gray-300'>
            <BsSearch />
          </div>

          <div className='cursor-pointer text-gray-200 transition hover:text-gray-300'>
            <BsBell />
          </div>

          <div className='relative flex cursor-pointer items-center gap-2' onClick={() => handleToggleAccountMenu()}>
            <div className='size-6 overflow-hidden rounded-md lg:size-10'>
              <ProfileImage />
            </div>

            <BsChevronDown className={`text-white transition ${isAccountMenuShown ? 'rotate-180' : 'rotate-0'}`} />

            <AccountMenu visible={isAccountMenuShown} />
          </div>
        </div>
      </div>
    </nav>
  );
}
