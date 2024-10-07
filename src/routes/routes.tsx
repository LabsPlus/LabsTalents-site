import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import ForgetPassword from "../pages/forget-password/forgetPassword";
import NewPassword from "../pages/new-password/NewPassword";

const Routers = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/forget-password" element={<ForgetPassword/>}></Route>
                <Route path="/new-password" element={<NewPassword/>}></Route>
            </Routes>
        
        
        </BrowserRouter>
    )
}

export default Routers