import {BrowserRouter, Route, Routes,Navigate} from "react-router-dom"

//import LoginForm from "./components/LoginForm/index.js"
import Home from "./components/Home/index.js"
import Products from "./components/Products/index.js"
import Cart from "./components/Cart/index.js"
import NotFound from "./components/NotFound/index.js"
import LoginFormWrapper from './LoginFormWrapper.js';

import "./App.css"
import ProtectedRoute from "./components/ProtectedRoute/index.js"

const App=()=>(
    <BrowserRouter>
         <Routes>
            <Route exact path="/login" element={<LoginFormWrapper/>}/>
            <Route element={<ProtectedRoute />}>
      
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
            
            </Route>
            <Route  path="/notfound" element={<NotFound/>}/>
            
        </Routes>
    </BrowserRouter>
    //<LoginForm/>
)
export default App
