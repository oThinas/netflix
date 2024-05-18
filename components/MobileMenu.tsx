interface MobileMenuProps {
  visible: boolean;
}

export function MobileMenu(props: MobileMenuProps) {
  if (!props.visible) {
    return null;
  }

  return (
    <div className='absolute left-0 top-8 flex w-56 flex-col border-2 border-gray-800 bg-black py-5'>
      <div className='flex flex-col gap-4'>
        <div className='px-3 text-center text-white hover:underline'>
          Home
        </div>

        <div className='px-3 text-center text-white hover:underline'>
          Series
        </div>

        <div className='px-3 text-center text-white hover:underline'>
          Films
        </div>

        <div className='px-3 text-center text-white hover:underline'>
          My list
        </div>

        <div className='px-3 text-center text-white hover:underline'>
          New & Popular
        </div>

        <div className='px-3 text-center text-white hover:underline'>
          Browse by languages
        </div>
      </div>
    </div>
  );
}
