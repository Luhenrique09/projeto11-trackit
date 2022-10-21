import styled from "styled-components"
import { useAuth } from "../Provedores/auth"

function Top () {
    const { setRend } = useAuth()

    function Add(){
        setRend(true)
    }
    const {image} = useAuth()
    return(
        <div>
        <Topo>
        <LogoP>TrackIt</LogoP>
        <img alt="profile" src={image} />
        </Topo>
        <Menu>
            <h1>Meus Hábitos</h1> 
            <div onClick={Add} >+</div>
        </Menu>
      
        </div>
    )
}

export default Top

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
    margin-top: 70px;
    width: 100%;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 18px;
    padding-right: 18px;

    h1{
        font-size: 22.976px;
        color: #126BA5;
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        color: white;
        font-size:30px;
        
    }
`

