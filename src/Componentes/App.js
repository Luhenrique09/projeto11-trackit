import PageLogin from "./PageLogin"
import GlobalStyle from "../GlobalStyle"
import Cadastro from "./PageCadastro"
import Habitos from "./PageHabitos"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import { AuthProvider } from "../Provedores/auth"




function App() {

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