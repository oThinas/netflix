/** Core */
import Image from 'next/image';
import { useCallback, useState } from 'react';

/** Components */
import { Input } from '@/component/Input';

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
      <div className='size-full bg-black lg:bg-black/50'>
        <nav className='px-12 py-5'>
          <Image src='/images/logo.png' alt='Netflix Logo' width={176} height={92} />
        </nav>

        <div className='flex justify-center'>
          <div className='mt-2 w-full self-center rounded-md bg-black/70 p-16 lg:w-2/5 lg:max-w-md'>
            <h2 className='mb-8 text-4xl font-semibold text-white'>
              {variant === 'login' ? 'Sign in' : 'Register'}
            </h2>

            <div className='flex flex-col gap-4'>
              {variant === 'register' && (
                <Input
                  label='Username' id='name' type='email' value={username}
                  onChange={({ target: { value } }) => setUsername(value)}
                />
              )}

              <Input
                label='Email' id='email' type='email' value={email}
                onChange={({ target: { value } }) => setEmail(value)}
              />

              <Input
                label='Password' id='password' type='password' value={password}
                onChange={({ target: { value } }) => setPassword(value)}
              />
            </div>

            <button className='mt-10 w-full rounded-md bg-red-600 py-3 text-white transition hover:bg-red-700'>
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>

            <p className='mt-12 text-neutral-500'>
              {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
              <span className='ml-1 cursor-pointer text-white hover:underline' onClick={() => toggleVariant()}>
                {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
