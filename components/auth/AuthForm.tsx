/** Core */
import { useCallback } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa6';

/** Components */
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

interface AuthFormProps {
  variant: 'login' | 'register';
  buttonLabel: string;
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

  const onSubmit: SubmitHandler<AuthFormFields> = (data, event) => {
    const eventTrigger: 'button' | 'input' = (event?.nativeEvent as any).submitter.localName;
    const toastID = toast.loading('Loading...');
    if (props.variant === 'register') handleRegister(data, toastID, eventTrigger);
    else handleLogin(data, toastID, eventTrigger);
  };

  const handleLogin = useCallback(async ({ email, password }: Omit<AuthFormFields, 'name'>, toastID: string, eventTrigger: 'button' | 'input') => {
    try {
      const response = await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/',
      });

      if (!response?.ok) {
        if (eventTrigger === 'input') {
          const message = (email && password) ? 'Incorrect email and/or password' : 'Email and password required';
          toast.error(message, { id: toastID });
        }
      } else {
        toast.dismiss(toastID);
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  }, [router]);

  const handleRegister = useCallback(async ({ email, name, password }: AuthFormFields, toastID: string, eventTrigger: 'button' | 'input') => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password,
      });

      handleLogin({ email, password }, toastID, eventTrigger);
    } catch (error: any) {
      console.log(error);
      const message = error.response.status === 422 ? 'Email taken' : 'An error occurred. Try again later';
      toast.error(message, { id: toastID });
    }
  }, [handleLogin]);

  function handleSignIn(provider: 'github' | 'google') {
    signIn(provider, { callbackUrl: '/' });
  }

  return (
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

      <div className='mt-8 flex flex-row items-center justify-center gap-4'>
        <Button className='size-10 rounded-full bg-white hover:opacity-80' aria-label='Google login button' onClick={() => handleSignIn('google')}>
          <FcGoogle size={30} />
        </Button>

        <Button className='size-10 rounded-full bg-white hover:opacity-80' aria-label='Github login button' onClick={() => handleSignIn('github')}>
          <FaGithub size={30} />
        </Button>
      </div>
    </form>
  );
}
