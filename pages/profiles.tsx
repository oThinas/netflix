/** Core */
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

/** Components */
import { Title } from '@/components/Title';

/** Hooks */
import { useCurrentUser } from '@/hooks/useCurrentUser';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
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

  function handleAcessProfile() {
    router.push('/');
  }

  return (
    <div className='flex h-full items-center justify-center'>
      <div className='flex flex-col'>
        <Title as='h1' className='text-center text-3xl md:text-6xl'>
          Who is watching?
        </Title>

        <div className='mt-10 flex items-center justify-center gap-8'>
          <div onClick={() => handleAcessProfile()}>
            <div className='group mx-auto w-44 flex-row'>
              <div
                className='flex size-44 items-center justify-center overflow-hidden rounded-md border-2 border-transparent transition
                group-hover:cursor-pointer group-hover:border-white'
              >
                <Image src='/images/default-blue.png' alt='Profile image. A cartoon blue face' width={176} height={176} />
              </div>

              <div className='mt-4 text-center text-2xl text-gray-400 transition group-hover:text-white'>
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
