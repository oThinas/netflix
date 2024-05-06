/** Core */
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

/** Components */
import { Input } from '@/components/Input';

interface AuthFormProps {
  variant: 'login' | 'register';
  buttonLabel: string;
}

interface AuthFormFields {
  username: string;
  email: string;
  password: string;
}

export function AuthForm(props: AuthFormProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<AuthFormFields> = (data) => {
    console.log(data);
  };

  return (
    <form className='flex flex-col gap-8' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-4'>
        {props.variant === 'register' && (
          <Controller
            name='username'
            control={control}
            render={({ field }) => (
              <Input label='Username' id='username' type='email' tabIndex={0} {...field} />
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
