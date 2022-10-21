
import styled from "styled-components"
import { useAuth } from "../Provedores/auth"
import AddHabitos from "./AddHabitos"

function Conteudo(){
    const { rend } = useAuth()
  
return(
    <div>
     {rend && (
        <AddHabitos/>
       )}
    <Div>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
    </Div>

   
    </div>
)

}

export default Conteudo

const Div = styled.div`
    font-size: 18px;
    color: #666666;
    padding-left: 18px;
    padding-right: 18px;

`
