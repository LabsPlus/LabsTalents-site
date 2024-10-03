import { BrowserRouter,Route,Routes } from "react-router-dom";
import App from "../App";

const routes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<App/>}></Route>

            </Routes>
        
        
        </BrowserRouter>
    )
}

export default routes