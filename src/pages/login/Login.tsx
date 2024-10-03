import Input from "../../components/input/input"

const Login = () =>{
    return(
        <main className='container'>
                <div className='left-container'>
                <img src='./assets/labsTalentsImage.png' alt="labsTalentsImage" />
                </div>
                <div className='right-container'>
                <div className='form-container'>
                    <h1 className='title'>Bem vindo ao LabsTalents</h1>
                    <div className='register_link_container'>
                    <p className='text'>Novo aqui?</p> <span><a href='/' className='text destaque'>Crie uma conta</a></span>
                    </div>
                    <form action="">
                    <div className='inputs-container'>
                        <Input type='text' placeholder='Usuario*'/>
                        <Input type='password' placeholder='Senha*'/>
                    </div>
                    <div className='remember-device-register-link'>
                    <div className='remember-device'>
                        <input type="checkbox" name="" id="" />
                        <span className='text'>Lembre deste dispositivo</span> 
                    </div>
                        <span><a href='/' className='text destaque'>Crie uma conta</a></span>
                    </div>

                    <button type='submit'>
                        Logar
                    </button>
                    </form>
                </div>
                </div>
            </main>
    )
}

export default Login