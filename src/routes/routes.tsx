import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import ForgetPassword from "../pages/forget-password/forgetPassword";
import NewPassword from "../pages/new-password/NewPassword";
import AuthRegisterUser from "../layout/auth-register-user";
import Registrar from "../pages/registrar/Registrar";

const Routers = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<AuthRegisterUser/>}>
                    <Route element={<Login/>} path="/login"/>
                    <Route element={<NewPassword/>} path="/new-password"/>
                    <Route element={<ForgetPassword/>} path="/forget-password"/>
                    <Route element={<Registrar/>} path="/registrar"/>  
                </Route>
            </Routes>
        
        
        </BrowserRouter>
    )
}

export default Routers