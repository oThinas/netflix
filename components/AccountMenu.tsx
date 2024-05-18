/** Core */
import { signOut } from 'next-auth/react';
import { useCallback } from 'react';

/** Components */
import { ProfileImage } from './ProfileImage';
import { Text } from './Text';

interface AccountMenuProps {
  visible: boolean;
}

export function AccountMenu(props: AccountMenuProps) {
  const handleSignOut = useCallback(
    async () => {
      await signOut();
    },
    [],
  );

  if (!props.visible) {
    return null;
  }

  return (
    <div className='absolute right-0 top-14 flex w-56 flex-col border-2 border-gray-800 bg-black py-5'>
      <div className='flex flex-col gap-3'>
        <div className='group/item flex w-full items-center gap-3 px-3'>
          <ProfileImage className='rounded-md' width='32px' />

          <Text as='p' className='text-sm group-hover/item:underline'>
            Username
          </Text>
        </div>

        <hr className='my-4 h-px border-0 bg-gray-600' />

        <Text as='span' className='px-3 text-center text-sm hover:underline' onClick={() => handleSignOut()}>
          Sign out of Netflix
        </Text>
      </div>
    </div>
  );
}
