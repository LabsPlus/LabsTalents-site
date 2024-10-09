import Button from "../../components/button/button"
import Input from "../../components/input/input"
import { FormContainer } from "../../styles/formContainer"
import { Link } from "../../styles/links"
import { Paragraph } from "../../styles/paragraph"
import { Title } from "../../styles/title"
import { InputContainer } from "../../styles/inputContainer"
import { RegisterLinkContainer, RememberDeviceForgetPasswordLinkContainer,Form, RememberDeviceContainer, RememberDeviceSpan } from "./loginStyles"
const Login = () =>{
    return(
            <FormContainer>
                <Title>Bem vindo ao LabsTalents</Title>
                <RegisterLinkContainer>
                    <Paragraph>Novo aqui?</Paragraph> <Link href="/">Crie uma conta</Link>
                </RegisterLinkContainer>
                <Form>
                    <InputContainer>
                        <Input type='text' placeholder='Usuario*'/>
                        <Input type='password' placeholder='Senha*'/>
                    </InputContainer>
                    <RememberDeviceForgetPasswordLinkContainer>
                        <RememberDeviceContainer className='remember-device'>
                            <input type="checkbox" name="" id="" />
                            <RememberDeviceSpan>Lembre deste dispositivo</RememberDeviceSpan> 
                        </RememberDeviceContainer> 
                        <Link href="/forget-password">Esqueceu a senha?</Link>
                    </RememberDeviceForgetPasswordLinkContainer>

                    <Button type='submit'>
                        Logar
                    </Button>
                </Form>
            </FormContainer>
    )
}

export default Login