import Button from '../../components/button/button'
import Input from '../../components/input/input'
import './style.css'
const NewPassword = () =>{
    return(
        <div className='form-container'>
            <div className="ajustar-largura">
                <h1 className='title'>Digite a nova senha:</h1>
                <form className='new-password-form' action="">
                    <div>
                        <Input type='password' placeholder='Senha*'/>
                        <Input type='password' placeholder='Confirma a senha*'/>
                    </div>
                    <Button type='submit'>
                        Registrar nova senha
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


export default NewPassword