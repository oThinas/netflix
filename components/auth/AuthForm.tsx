/** Core */
import { useCallback } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

/** Components */
import { Input } from '@/components/Input';
import toast from 'react-hot-toast';

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
        callbackUrl: '/',
      });

      if (!response?.ok) {
        const message = (email && password) ? 'Incorrect email and/or password' : 'Email and password required';
        toast.error(message, { id: toastID });
      } else {
        toast.dismiss(toastID);
        router.push('/');
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

  return (
    <form className='flex flex-col gap-8' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-4'>
        {props.variant === 'register' && (
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <Input label='Username' id='name' tabIndex={0} {...field} />
            )}
          />
        )}

        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <Input label='Email' id='email' type='email' tabIndex={0} {...field} />
          )}
        />

        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <Input
              label='Password' id='password' type='password' tabIndex={0} {...field}
            />
          )}
        />
      </div>

      <Input type='submit' label={props.buttonLabel} />
    </form>
  );
}
