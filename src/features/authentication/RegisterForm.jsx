import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import LinkButton from '../../ui/LinkButton';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import PasswordInput from '../../ui/PasswordInput';

function RegisterForm() {
  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl font-medium">Sign Up</h2>

      <div className="my-5 flex flex-col gap-3">
        <FormRow error={errors?.name?.message}>
          <Input
            type="text"
            placeholder="Name"
            error={errors?.name}
            {...register('name', {
              required: 'This field is required',
              minLength: {
                value: 3,
                message: 'Name should have at least 3 symbols',
              },
              maxLength: {
                value: 30,
                message: 'Maximum name length is 30 symbols',
              },
              pattern: {
                value: /[a-zA-Z]+/,
                message: 'Name should contain only latin characters',
              },
            })}
          />
        </FormRow>
        <FormRow error={errors?.email?.message}>
          <Input
            type="email"
            placeholder="Email"
            error={errors?.email}
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Email is not valid',
              },
            })}
          />
        </FormRow>
        <FormRow error={errors?.password?.message}>
          <PasswordInput
            placeholder="Create password"
            error={errors?.password}
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 6,
                message: 'Password should have at least 6 symbols',
              },
            })}
          />
        </FormRow>
        <FormRow error={errors?.passwordConfirm?.message}>
          <PasswordInput
            placeholder="Confirm password"
            error={errors?.passwordConfirm}
            {...register('passwordConfirm', {
              validate: (value) =>
                value === getValues().password || 'Passwords do not match',
            })}
          />
        </FormRow>
        <Button variant="primary">Create account</Button>
      </div>

      <p className="text-slate-500">
        Already have an account? <LinkButton to="/login">Login</LinkButton>
      </p>
    </Form>
  );
}

export default RegisterForm;
