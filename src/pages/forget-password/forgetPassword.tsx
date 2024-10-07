import Input from "../../components/input/input"
import LabsTalentImage from "../../assets/labsTalentsImage.png"
import './style.css'
const ForgetPassword = () =>{
    return(
    <main className='container'>
        <div className='left-container'>
            <img src={LabsTalentImage} alt="labsTalentsImage" />
        </div>
        <div className='right-container'>
            <div className='form-container'>
                <div className="ajustar-largura">
                    <h1 className='title'>Esqueceu sua senha?</h1>
                    <p className='text'>Por favor, insira o endereço de e-mail <br /> associado à sua conta e enviaremos um e-mail <br /> com um link para redefinir sua senha.</p>
                    <form action="">
                        <div className='inputs-container'>
                            <Input type='email' placeholder='Email*'/>
                        </div>
                        <button type='submit'>
                            Esqueci a senha
                        </button>
                        <button className="back-login-link">
                            <a href="/login">
                                Retornar ao Login
                            </a>
                        </button>

                    </form>
                </div>
                
            </div>
        </div>
    </main>
    )
}

export default ForgetPassword