import { useAuth } from "../Provedores/auth"
import Top from "../Componentes/top"
import MenuInf from "../Componentes/MenuInf"
import AddHabitos from "../Componentes/AddHabitos"
import ListHabitos from "../Componentes/ListHabitos"

function Habitos (){
    const { rend } = useAuth()
       return(
        <div>
            <Top/>
            {rend && (
                <AddHabitos />
            )}
            <ListHabitos />
            <MenuInf/>
        </div>
    )
}

export default Habitos

