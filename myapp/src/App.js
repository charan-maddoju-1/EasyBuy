import {BrowserRouter, Route, Routes} from "react-router-dom"

//import LoginForm from "./components/LoginForm/index.js"
import Home from "./components/Home/index.js"
import Products from "./components/Products/index.js"
import Cart from "./components/Cart/index.js"
import NotFound from "./components/NotFound/index.js"

import LoginFormWrapper from './LoginFormWrapper.js';

import "./App.css"

const App=()=>(
    <BrowserRouter>
         <Routes>
            <Route exact path="/login" element={<LoginFormWrapper/>}/>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/products" element={<Products/>}/>
            <Route exact path="/Cart" element={<Cart/>}/>
            <Route  path="/notfound" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
    //<LoginForm/>
)
export default App
