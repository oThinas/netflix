/** Core */
import Image from 'next/image';
import { useCallback, useState } from 'react';

/** Components */
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Title } from '@/components/Title';
import { Text } from '@/components/Text';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [variant, setVariant] = useState('login');
  const toggleVariant = useCallback(
    () => {
      setVariant((prevState) => {
        return prevState === 'login' ? 'register' : 'login';
      });
    },
    [],
  );

  return(
    <div className='relative size-full bg-[url("/images/hero.jpg")] bg-cover bg-fixed bg-center bg-no-repeat'>
      <div className='size-full bg-black lg:bg-black/50' aria-roledescription='Teste'>
        <nav className='px-12 py-5'>
          <Image src='/images/logo.png' alt='Netflix Logo' width={176} height={92} />
        </nav>

        <div className='flex justify-center'>
          <div className='mt-2 flex w-full  flex-col gap-8 self-center rounded-md bg-black/70 p-16 lg:w-2/5 lg:max-w-md'>
            <Title as='h2'>
              {variant === 'login' ? 'Sign in' : 'Register'}
            </Title>

            <div className='flex flex-col gap-4'>
              {variant === 'register' && (
                <Input
                  label='Username' id='name' type='email' value={username}
                  onChange={({ target: { value } }) => setUsername(value)} tabIndex={0}
                />
              )}

              <Input
                label='Email' id='email' type='email' value={email} tabIndex={0}
                onChange={({ target: { value } }) => setEmail(value)}
              />

              <Input
                label='Password' id='password' type='password' value={password} tabIndex={0}
                onChange={({ target: { value } }) => setPassword(value)}
              />
            </div>

            <Button className='w-full rounded-md bg-red-600 py-3 text-white transition hover:bg-red-700'>
              {variant === 'login' ? 'Login' : 'Sign up'}
            </Button>

            <Text as='p' className='text-neutral-500'>
              {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}

              &nbsp;

              <Text as='span' className='cursor-pointer text-white hover:underline' tabIndex={0} onClick={() => toggleVariant()}>
                {variant === 'login' ? 'Create an account' : 'Login'}
              </Text>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
