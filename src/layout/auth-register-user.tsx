import { Outlet } from "react-router-dom"
import LabsTalentImage from '../assets/labsTalentsImage.png'
const AuthRegisterUser = () =>{
    return(
        <main className='container'>
                <div className='left-container'>
                <img src={LabsTalentImage} alt="labsTalentsImage" />
                </div>
                <div className='right-container'>
                    <Outlet/>
                </div>
            </main>
    )
}

export default AuthRegisterUser