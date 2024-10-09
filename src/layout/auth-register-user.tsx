import { Outlet } from "react-router-dom"
import LabsTalentImage from '../assets/labsTalentsImage.png'
import LabsTalentLogo from '../assets/Logo.png'
const AuthRegisterUser = () =>{
    return(
        <main className='container'>
                <div className='left-container'>
                <img className="logo" src={LabsTalentLogo} alt="labs talent logo" />
                <img src={LabsTalentImage} alt="labsTalentsImage" />
                </div>
                <div className='right-container'>
                    <Outlet/>
                </div>
            </main>
    )
}

export default AuthRegisterUser