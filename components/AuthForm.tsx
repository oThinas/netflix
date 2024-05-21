/** Core */
import axios from 'axios';
import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

/** Components */
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

interface AuthFormProps {
  variant: 'login' | 'register';
  buttonLabel: string;
  session: Session | null;
}

interface AuthFormFields {
  name: string;
  email: string;
  password: string;
}

export function AuthForm(props: AuthFormProps) {
  const router = useRouter();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<AuthFormFields> = (data) => {
    const toastID = toast.loading('Loading...');

    if (props.variant === 'register') handleRegister(data, toastID);
    else handleLogin(data, toastID);
  };

  const handleLogin = useCallback(async ({ email, password }: Omit<AuthFormFields, 'name'>, toastID: string) => {
    try {
      const response = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (!response?.ok) {
        const message = (email && password) ? 'Incorrect email and/or password' : 'Email and password required';
        toast.error(message, { id: toastID });
      } else {
        toast.dismiss(toastID);
        router.push('/profiles');
      }
    } catch (error) {
      console.log(error);
    }
  }, [router]);

  const handleRegister = useCallback(async ({ email, name, password }: AuthFormFields, toastID: string) => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password,
      });

      handleLogin({ email, password }, toastID);
    } catch (error: any) {
      console.log(error);
      const message = error.response.status === 422 ? 'Email taken' : 'An error occurred. Try again later';
      toast.error(message, { id: toastID });
    }
  }, [handleLogin]);

  async function handleSignIn(provider: 'github' | 'google') {
    toast.loading('Loading...');
    console.log('props.session: ', props.session);

    if (props.session) await signOut({ redirect: false });
    await signIn(provider, { callbackUrl: '/profiles', redirect: false });
  }

  return (
    <>
      <form className='flex flex-col gap-8' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-4'>
          {props.variant === 'register' && (
            <Controller
              name='name'
              control={control}
              render={({ field }) => (
                <Input label='Username' id='name' {...field} />
              )}
            />
          )}

          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <Input label='Email' id='email' type='email' {...field} />
            )}
          />

          <Controller
            name='password'
            control={control}
            render={({ field }) => (
              <Input label='Password' id='password' type='password' {...field} />
            )}
          />
        </div>

        <Input type='submit' label={props.buttonLabel} />
      </form>

      <div className='mt-8 flex flex-row items-center justify-center gap-4'>
        <Button className='size-10 rounded-full bg-white hover:opacity-80' aria-label='Google login button' onClick={() => handleSignIn('google')}>
          <FcGoogle size={30} />
        </Button>

        <Button className='size-10 rounded-full bg-white hover:opacity-80' aria-label='Github login button' onClick={() => handleSignIn('github')}>
          <FaGithub size={30} />
        </Button>
      </div>
    </>
  );
}
