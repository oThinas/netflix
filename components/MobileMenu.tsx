/** Components */
import { Text } from './Text';

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
        <Text as='span' className='px-3 text-center hover:underline'>
          Home
        </Text>

        <Text as='span' className='px-3 text-center hover:underline'>
          Series
        </Text>

        <Text as='span' className='px-3 text-center hover:underline'>
          Films
        </Text>

        <Text as='span' className='px-3 text-center hover:underline'>
          My list
        </Text>

        <Text as='span' className='px-3 text-center hover:underline'>
          New & Popular
        </Text>

        <Text as='span' className='px-3 text-center hover:underline'>
          Browse by languages
        </Text>
      </div>
    </div>
  );
}
