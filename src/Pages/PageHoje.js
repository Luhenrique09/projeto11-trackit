import styled from "styled-components"
import { useAuth } from "../Provedores/auth"
import vector from '../img/Vector.png'
import axios from "axios"
import { useEffect, useState } from "react"
import MenuInf from "../Componentes/MenuInf"
import dayjs from 'dayjs'
function Hoje() {
    const tokenFixo = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIwNywiaWF0IjoxNjY2NDgyNTUwfQ.cI3LO9stNWWourHbWfDL-RR42pmOyVPo1V2icDWbYJg'
    const { image, token } = useAuth()
    const [habitoHoje, sethabitoHoje] = useState([])
    const [check, setCheck] = useState(false)
    const DaysS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
    const config = {
        headers: {
            "Authorization": `Bearer ${tokenFixo}`
        } // SO FUNCIONA COM TOKEN FIXO =========================
    }
    const URLListar = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
    useEffect(() => {
        const promise = axios.get(URLListar, config)
        promise.then((resp) => {
            sethabitoHoje(resp.data)
        })

        promise.catch((error) => console.log(error.response.data.message))

    }, [])

    function clickCheck(id) {
        
setCheck(!check)
            const config = {
                headers: {
                    "Authorization": `Bearer ${tokenFixo}`
                }
            }
                const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, id,  config)
                promisse.then((resp)=>SelectedHabitRight(id))
                promisse.catch((error)=>console.log(error.message))
    
    }
    function SelectedHabitRight(id){
    }

    
    return (
        <div>

            <Topo>
                <LogoP>TrackIt</LogoP>
                <img alt="profile" src={image} />
            </Topo>

            <Menu>
                <h1>{

                    `${DaysS[dayjs().$W]}, ${dayjs().date()}/${dayjs().month() + 1} `}
                </h1>
                <h2>Nenhum hábito concluído ainda</h2>

            </Menu>

            <div>
                {habitoHoje.map((obj, i) =>
                    <div key={i}>

                        <Box>
                            <div>
                                <h2>{obj.name}</h2>
                                <p>Sequência atual: {obj.currentSequence}</p>
                                <p>Seu recorde: {obj.highestSequence}</p>
                            </div>

                            <Check className={check ? 'green' : 'grayCheck'}
                                check={check} onClick={() => clickCheck(obj.id)}  >
                                <img alt='check' src={vector} />
                            </Check>
                        </Box>

                    </div>

                )}
            </div>

            <MenuInf />
        </div>
    )
}

export default Hoje

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
    flex-direction: column;
    justify-content: center;
    padding-left: 18px;
    padding-right: 18px;

    h1{
        font-size: 22.976px;
        color: #126BA5;
        font-family: 'Lexend Deca';
    }
    h2{
       font-size:18px ;
       color: #bababa;
       font-family: 'Lexend Deca';
    }
  
`

const Box = styled.div`
width: 340px;
height: 94px;
background-color: #FFFFFF;
border-radius: 10px;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 10px;
margin-left: 18px;

h2{
    font-size: 19.98px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    color: #666666;
    margin-bottom: 7px;
    margin-left: 10px;
}
p{
    font-size: 12.98px;
    font-family: 'Lexend Deca';
    color: #666666;
    font-weight: 400;
    margin-left: 10px;
}

`

const Check = styled.div`

    width: 69px;
    height: 69px;    
    border-color: #E7E7E7;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-right: 10px;


`