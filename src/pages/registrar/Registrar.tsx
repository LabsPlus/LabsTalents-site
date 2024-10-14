import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addressSchema } from '../../validation/registerForm'; // Certifique-se que isso esteja correto
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { FormContainer } from '../../styles/formContainer';
import { InputContainer } from '../../styles/inputContainer';
import { Link } from '../../styles/links';
import { Paragraph } from '../../styles/paragraph';
import { Title } from '../../styles/title';
import { RegisterLinkContainer } from '../login/loginStyles';
import { api } from '../../api/talentsApi';

interface RegisterFormData {
  userName: string;
  email: string;
  password: string;
}

export default function Registrar() {
  // Configurando o useForm corretamente com o yupResolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(addressSchema), // Integrando o Yup
  });

  const userRegister = async (formData: RegisterFormData) => {
    try {
      const response = await api.post('/user/create-user', {
        username: formData.userName,
        email: formData.email,
        password: formData.password,
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao registrar o usuário', error);
    }
  };

  const onSubmit = async (data: RegisterFormData) => {
    await userRegister(data);
  };

  return (
    <FormContainer>
      <Title>Bem vindo ao LabsTalents</Title>
      <RegisterLinkContainer>
        <Paragraph>Já tem uma conta?</Paragraph>
        <Link href='/login'>Logar</Link>
      </RegisterLinkContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          {/* Campo de nome de usuário */}
          <Input type='text' {...register('userName')} placeholder='Nome*' />
          {errors.userName && <p>{errors.userName.message}</p>}

          {/* Campo de email */}
          <Input type='email' {...register('email')} placeholder='Email*' />
          {errors.email && <p>{errors.email.message}</p>}

          {/* Campo de senha */}
          <Input type='password' {...register('password')} placeholder='Senha*' />
          {errors.password && <p>{errors.password.message}</p>}
        </InputContainer>
        <Button type='submit'>Registrar</Button>
      </form>
    </FormContainer>
  );
}
