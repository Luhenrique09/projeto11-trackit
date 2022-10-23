import styled from "styled-components"
import { BiTrash } from 'react-icons/bi'
import { useAuth } from "../Provedores/auth"
import axios from "axios"
import { useEffect, useState } from "react"


function ListHabitos() {
    const { token, habitosList, sethabitosList } = useAuth()
    const URLListar = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

    const [t, sett] = useState(false)



    const D = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    const config = {
        headers: {
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIwNywiaWF0IjoxNjY2NDgyNTUwfQ.cI3LO9stNWWourHbWfDL-RR42pmOyVPo1V2icDWbYJg`
        }
    }
    useEffect(() => {



        const promise = axios.get(URLListar, config)
        promise.then((resp) => {
            sethabitosList(resp.data)
            sett(true)

        })

        promise.catch((error) => console.log(error.response.data.message))



    }, [habitosList])
    

    function ListDays(days) {

        const htmlDays = D.map((d, index) => {
            if (days.includes(index)) {
                return <div key={index} className="gray">
                    {d}
                </div>
            }
            else {
                return (
                    <div key={index} className="white">
                        {d}
                    </div>)

            }
        })
        return htmlDays
    }

    function DelHabits(id) {
        //eslint-disable-next-line no-restricted-globals
        const confirmated = confirm("Deseja realmente excluir?")
        if (confirmated) {

            const promisse = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
        }
    }


    return (
        <div>
            {habitosList.length === 0 ?
                <Divb>
                    Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!
                </Divb> : <div>

                    {habitosList.map((obj, indx) =>
                        <Div key={indx}>
                            <div>
                                <h2>{obj.name}</h2>
                                <BiTrash onClick={() => DelHabits(obj.id)} />
                            </div>

                            <Dias>
                                {ListDays(obj.days)}

                            </Dias>
                        </Div>
                    )} </div>


            }


        </div>

    )

}

export default ListHabitos

const Div = styled.div`
    background-color: white;
    width: 340px;
    height: 91px;
    padding-left: 18px;
    padding-right: 18px;
    margin-left: 18px;
    padding-top: 13px;
    margin-bottom:10px ;
    border-radius: 5px;
    div{
        display: flex;
        justify-content: space-between;
        margin-bottom:10px; 
    }
    h2{
        color:#666666;
        font-size: 20px;
    }

`

const Dias = styled.div`
   
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border-radius: 5px;  
        font-size:20px ;
        margin-right: 5px;
      
    }
`

const Divb = styled.div`
    font-size: 18px;
    color: #666666;
    padding-left: 18px;
    padding-right: 18px;
    

`
