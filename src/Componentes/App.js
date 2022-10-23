import PageLogin from "../Pages/PageLogin"
import GlobalStyle from "../GlobalStyle"
import Cadastro from "../Pages/PageCadastro"
import Habitos from "../Pages/PageHabitos"
import Hoje from '../Pages/PageHoje'
import { Route, BrowserRouter, Routes } from "react-router-dom"
import { AuthProvider } from "../Provedores/auth"
import Historico from "../Pages/PageHistorico"




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
                        <Route path='/hoje' element={<Hoje />} />
                        <Route path='/historico' element={<Historico />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}

export default App