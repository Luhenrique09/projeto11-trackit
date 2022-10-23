import styled from "styled-components"
import MenuInf from "../Componentes/MenuInf"
import { useAuth } from "../Provedores/auth"


function Historico (){
    const { image } = useAuth()
    return (
        <div>
             <Topo>
                <LogoP>TrackIt</LogoP>
                <img alt="profile" src={image} />
            </Topo>
            <Menu>
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>

            </Menu>
            <MenuInf/>
        </div>
    )

}

export default Historico

const LogoP = styled.div`
 font-family: 'Playball', cursive;
 font-size: 39px;
    color: #FFFFFF;
`

const Topo = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126ba5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top:0;
    left:0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 18px;
    padding-right: 18px;


    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`
const Menu = styled.div`
    margin-top: 90px;
    width: 100%;
    height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 18px;
    padding-right: 18px;

    h1{
        font-family: 'Lexend Deca';
        font-size: 22.976px;
        color: #126BA5;
    }
    h2{
        font-family: 'Lexend Deca';
        margin-top: 17px;
       font-size:18px ;
       color: #666666;
    }
  
`