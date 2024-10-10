import Button from '../../components/button/button'
import Input from '../../components/input/input'
import { FormContainer } from '../../styles/formContainer'
import { Title } from '../../styles/title'
import { BackLoginLink } from '../../styles/links'
import { Form } from '../login/loginStyles'
import { InputContainer } from '../../styles/inputContainer'
const NewPassword = () =>{
    return(
        <FormContainer >
            <div className="ajustar-largura">
                <Title>Digite a nova senha:</Title>
                <Form action="">
                    <InputContainer>
                        <Input type='password' placeholder='Senha*'/>
                        <Input type='password' placeholder='Confirma a senha*'/>
                    </InputContainer>
                    <Button type='submit'>
                        Registrar nova senha
                    </Button>        
                    <BackLoginLink href='/login' className="back-login-link">
                        Retornar ao Login
                    </BackLoginLink>

                </Form>
            </div>
        </FormContainer>
    )
}


export default NewPassword