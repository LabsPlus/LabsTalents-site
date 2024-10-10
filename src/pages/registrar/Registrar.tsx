import './Registrar.css'
export default function Registrar() {
    return (
        <main >
            <div >
                <div >
                    <h1 className='page-title'>Bem Vindo ao LabsTalents</h1>
                    <div >
                        <p className='sub-title'>Já tem uma conta?<span><a className='' href="/"> Logar</a></span></p>
                    </div>
                    <div className=''>
                        <form action="" className='container-form'>
                            <input type="text" id='nome' placeholder='Nome *' />
                            <input type="email" id="email" placeholder='Email *' />
                            <input type="password" id="password" placeholder='Senha *' />
                        </form>
                    </div>
                    <div>
                        <button className='registerButton'>Registrar</button>
                    </div>
                </div>
            </div>
        </main>
    )
}