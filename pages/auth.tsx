/** Core */
import { InferGetServerSidePropsType, NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import Image from 'next/image';
import { useCallback, useState } from 'react';

/** Components */
import { AuthForm } from '@/components/AuthForm';
import { Text } from '@/components/Text';
import { Title } from '@/components/Title';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return { props: { session } };
}

export default function Auth({ session }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [variant, setVariant] = useState<'login' | 'register'>('login');
  const toggleVariant = useCallback(() => {
    setVariant((prevState) => {
      return prevState === 'login' ? 'register' : 'login';
    });
  }, []);

  const { title, button, disclamer, toggle } = getVariantContent(variant);

  function getVariantContent(variant: 'login' | 'register') {
    return variant === 'login' ? {
      title: 'Sign in',
      button: 'Login',
      disclamer: 'First time using Netflix?',
      toggle: 'Create an account',
    } : {
      title: 'Register',
      button: 'Sign up',
      disclamer: 'Already have an account?',
      toggle: 'Login',
    };
  }

  return (
    <div className='relative size-full bg-[url("/images/hero.jpg")] bg-cover bg-fixed bg-center bg-no-repeat'>
      <div className='size-full bg-black lg:bg-black/50' aria-roledescription='Teste'>
        <nav className='px-12 py-5'>
          <Image src='/images/logo.png' alt='Netflix Logo' width={176} height={92} />
        </nav>

        <div className='flex justify-center'>
          <div className='mt-2 flex w-full flex-col gap-8 self-center rounded-md bg-black/70 p-16 lg:w-2/5 lg:max-w-md'>
            <Title as='h2'>
              {title}
            </Title>

            <AuthForm variant={variant} buttonLabel={button} session={session} />

            <Text as='p' className='text-neutral-500'>
              {disclamer}

              &nbsp;

              <Text as='span' className='cursor-pointer text-white hover:underline' tabIndex={0} onClick={() => toggleVariant()}>
                {toggle}
              </Text>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
