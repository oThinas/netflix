/** Core */
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

/** Components */
import { ProfileImage } from '@/components/ProfileImage';
import { Text } from '@/components/Text';
import { Title } from '@/components/Title';

/** Hooks */
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useCallback } from 'react';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  console.log('session: ', session);
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return { props: {} };
}

export default function Profiles() {
  const router = useRouter();
  const { data: user } = useCurrentUser();


  const handleAcessProfile = useCallback(
    () => {
      router.push('/');
    },
    [router],
  );

  const handleKeyUp = useCallback(
    (key: string) => {
      if (key === 'Enter' || key === ' ') {
        handleAcessProfile();
      }
    },
    [handleAcessProfile],
  );


  return (
    <div className='flex h-full items-center justify-center'>
      <div className='flex flex-col'>
        <Title as='h1' className='text-center text-3xl md:text-6xl'>
          Who is watching?
        </Title>

        <div className='mt-10 flex items-center justify-center gap-8'>
          <div className='text-center' onClick={() => handleAcessProfile()} onKeyUp={({ key }) => handleKeyUp(key)}>
            <div className='group mx-auto w-44 break-words'>
              <div
                className='flex size-44 items-center justify-center overflow-hidden rounded-md border-2
                border-transparent transition group-hover:cursor-pointer group-hover:border-white'
                tabIndex={0}
              >
                <ProfileImage width={176} height={176} />
              </div>

              <Text as='span' className='mt-4 text-2xl text-gray-400 transition group-hover:text-white'>
                {user?.name}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
