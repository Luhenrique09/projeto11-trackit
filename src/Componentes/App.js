import PageLogin from "./PageLogin"
import GlobalStyle from "../GlobalStyle"
import Cadastro from "./PageCadastro"
import Habitos from "./PageHabitos"
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom"
import { AuthContext, AuthProvider } from "../Provedores/auth"
import { useContext } from "react"
import { children } from "react/cjs/react.production.min"



function App() {

 /*    const Private = ({children}) => {
        const {authenticated} = useContext(AuthContext)

        if(!authenticated){
            return <Navigate to='/'/>
        }

        return children */
    

    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <GlobalStyle />
                    <Routes>
                        <Route path='/' element={<PageLogin />} />
                        <Route path='/cadastro' element={<Cadastro />} />
                        <Route path='/habitos' element={<Habitos />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}

export default App