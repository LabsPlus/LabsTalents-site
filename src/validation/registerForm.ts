import * as yup from 'yup';

export const addressSchema = yup.object().shape({
  userName: yup.string().required('Nome de usuário é obrigatório'),
  email: yup.string().email('Por favor, insira um e-mail válido').required('E-mail é obrigatório'),
  password: yup
    .string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .required('Senha é obrigatória')
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .matches(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
    .matches(/[0-9]/, 'A senha deve conter pelo menos um número')
    .matches(/[\W_]/, 'A senha deve conter pelo menos um caractere especial'),
});
