/** Core */
import { NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react';
import toast from 'react-hot-toast';

/** Components */
import { Button } from '@/components/Button';
import { Text } from '@/components/Text';

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

export default function Home() {
  const { data: user } = useCurrentUser();

  async function handleLogout() {
    const toastId = toast.loading('Loading...');

    try {
      await signOut();
    } catch (error) {
      console.error(error);
      toast.error('Error logging out');
    } finally {
      toast.dismiss(toastId);
    }
  }

  return (
    <>
      <h1 className='text-2xl text-green-500 '>Netflix</h1>
      <Text as='p' className='text-white'>
        Logged as {user?.email}
      </Text>
      <Button className='h-10 w-20 bg-white' onClick={() => handleLogout()}>
        Logout
      </Button>
    </>
  );
}
