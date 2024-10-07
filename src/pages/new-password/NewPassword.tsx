import LabsTalentImage from '../../assets/labsTalentsImage.png'
import Input from '../../components/input/input'
import './style.css'
const NewPassword = () =>{
    return(
        <main className='container'>
        <div className='left-container'>
            <img src={LabsTalentImage} alt="labsTalentsImage" />
        </div>
        <div className='right-container'>
            <div className='form-container'>
                <div className="ajustar-largura">
                    <h1 className='title'>Digite a nova senha:</h1>
                    <form className='new-password-form' action="">
                        <div>
                            <Input type='password' placeholder='Senha*'/>
                            <Input type='password' placeholder='Confirma a senha*'/>
                        </div>
                        <button type='submit'>
                            Registrar nova senha
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


export default NewPassword