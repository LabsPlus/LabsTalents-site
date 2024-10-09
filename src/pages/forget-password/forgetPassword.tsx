import Button from "../../components/button/button"
import Input from "../../components/input/input"
import { InputContainer } from "../../styles/inputContainer"
import { BackLoginLink } from "../../styles/links"
import { Paragraph } from "../../styles/paragraph"
import { Title } from "../../styles/title"
import { Form } from "../login/loginStyles"
import { Container, ForgetPasswordForm, TextContainer } from "./forgetPasswordStyles"
const ForgetPassword = () =>{
    return(
        <ForgetPasswordForm>
                <Container>
                    <TextContainer>
                        <Title>Esqueceu sua senha?</Title>
                        <Paragraph className='text'>Por favor, insira o endereço de e-mail <br /> associado à sua conta e enviaremos um e-mail <br /> com um link para redefinir sua senha.</Paragraph>
                    </TextContainer>
                   
                    <Form action="">
                        <InputContainer>
                            <Input type='email' placeholder='Email*'/>
                        </InputContainer>
                        <Button type='submit'>
                            Esqueci a senha
                        </Button>
                        <BackLoginLink href="/login">Retornar ao Login</BackLoginLink>
                    </Form> 
                </Container>
           
        </ForgetPasswordForm>
    )
}

export default ForgetPassword