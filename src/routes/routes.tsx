import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "../pages/login/Login";

const Routers = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        
        
        </BrowserRouter>
    )
}

export default Routers