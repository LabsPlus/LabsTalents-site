import Button from "../../components/button/button"
import Input from "../../components/input/input"
import './style.css'
const ForgetPassword = () =>{
    return(
        <div className='form-container'>
            <div className="ajustar-largura">
                <h1 className='title'>Esqueceu sua senha?</h1>
                <p className='text'>Por favor, insira o endereço de e-mail <br /> associado à sua conta e enviaremos um e-mail <br /> com um link para redefinir sua senha.</p>
                <form action="">
                    <div className='inputs-container'>
                        <Input type='email' placeholder='Email*'/>
                    </div>
                    <Button type='submit'>
                        Esqueci a senha
                    </Button>
                    <Button className="back-login-link">
                        <a href="/login">
                            Retornar ao Login
                        </a>
                    </Button>

                </form>
            </div>
            
        </div>
    )
}

export default ForgetPassword