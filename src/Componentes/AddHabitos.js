import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import {  useAuth } from "../Provedores/auth"

function AddHabitos() {

    const { setRend, token } = useAuth()
    const [habito, setHabito] = useState()
    const URLCriar = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
    const body = {
        name: habito,
        days: [1, 3, 5]
    }
    function cancela() {
        setRend(false)
    }
   

    function handleSubmit(e) {
        e.preventDefault();
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const promise = axios.post(URLCriar, body, config)
       
        promise.then((res) => {
            console.log(res.data)
            setRend(false)

        })

        promise.catch((erro) => {
            alert(erro.response.data.message)
        })

         
    }
    
    return (
        <Div>
            <Form onSubmit={(e) => handleSubmit(e)}>

                <input
                    
                    onChange={e => setHabito(e.target.value)}
                    id="habito"
                    placeholder="Nome do hábito"
                    name='habito' type='text'
                    required></input>

                <Dias>
                    <div>D</div>
                    <div>S</div>
                    <div>T</div>
                    <div>Q</div>
                    <div>Q</div>
                    <div>S</div>
                    <div>S</div>
                </Dias>

                <Div2 ><h1
                    onClick={cancela}>Cancelar</h1>
                    <button type='submit'>Salvar</button>

                </Div2>
            </Form>
        </Div>
    )

}

export default AddHabitos

const Div = styled.div`
    width: 340px;
    height: 180px;
    background-color: white;
    border-radius: 5px;
    margin: 0 18px 18px 18px;
`

const Form = styled.form`
    
    input{
    margin: 18px 18px 8px 18px;
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 11px;
    ::placeholder{
        font-size: 20px;
        color: #d4d4d4;
    }
    }

    button{
        width: 84px;
        height: 35px;
        background-color: #52b6ff;
        border-radius: 4px;
        border: none;
        margin-left: 23px;

        text-align: center;
        color: #ffffff;
        font-size: 21px;
    }
 
`
const Div2 = styled.div`
        
        margin-left: 132px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #52B6FF;
        font-size: 16px;
    
`

const Dias = styled.div`
    display: flex;
    margin-left: 18px;
    margin-bottom: 32px;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border: 1px solid #d5d5d5;
        border-radius: 5px;  
        color: #dbdbdb;
        font-size:20px ;
        margin-right: 5px;
    }
`
