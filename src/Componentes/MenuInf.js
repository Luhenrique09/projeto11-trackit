import styled from "styled-components"

function MenuInf () {
    
    return(
        <div>
        <Div>
            <h2>Hábitos</h2>
            <Hoje>Hoje</Hoje>
            <h2>Histórico</h2>
           
        </Div>
       
        </div>
    )
}

export default MenuInf

const Div = styled.div`
    width: 100%;
    height: 70px;
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 18px;
    padding-right: 18px;
    h2{
        font-size: 18px;
        color: #52b6ff;
    }
`

const Hoje = styled.div`
background-color: #52b6ff;
    width: 91px;
    height: 91px;
    border-radius: 50%;
    margin-bottom: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size:18px ;

`