import Button from "../../components/button/button"
import Input from "../../components/input/input"
import { InputContainer } from "../../styles/inputContainer"
import { Link } from "../../styles/links"
import { Paragraph } from "../../styles/paragraph"
import { Title } from "../../styles/title"
import { RegisterLinkContainer } from "../login/loginStyles"
import { FormContainerRegister } from "./registerStyles"


export default function Registrar() {
    return (
        <FormContainerRegister>
            <Title>Bem vindo ao LabsTalents</Title>
            <RegisterLinkContainer>
            <Paragraph>Já tem uma conta?</Paragraph><Link href="/login">Logar</Link> 
            </RegisterLinkContainer>
            <InputContainer>
                        <Input type='text' placeholder='Nome*'/>
                        <Input type='email' placeholder='Email*'/>
                        <Input type='password' placeholder='Senha*'/>
                    </InputContainer>
            <Button type='submit'>
                        Registrar
                    </Button>
        </FormContainerRegister>
    )
}