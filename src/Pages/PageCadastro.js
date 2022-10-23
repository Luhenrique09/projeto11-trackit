import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../img/Logo.jpg"
import loading_1 from '../img/Loading_2.gif'


function Cadastro() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nome, setNome] = useState('')
    const [foto, setFoto] = useState('')
    const navigate = useNavigate('')
    const URLCadastro = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
const body = {
            email: email,
            name: nome,
            image: foto,
            password: password
        }
        
    function cadastrar() {
        
        const promise = axios.post(URLCadastro, body)
        setLoading(true)
        promise.then((res) => {
            console.log(res.data)
            navigate('/')
            setLoading(false)
        })

        promise.catch((erro) => {
            alert(erro.response.data.message)
            setLoading(false)
        })

    }
   
    function handleSubmit(e){
        e.preventDefault();
      
    }
    
    console.log(body)

    return (
        <Div>
            <Link to='/'>
                <ImgLogo src={logo} />
            </Link>

            <Form onSubmit={(e) => handleSubmit(e)}>

                <input
                data-identifier="input-email"
                disabled={loading}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    id="email"
                    placeholder="email"
                    name='email' type='email'
                    required></input>


                <input
                data-identifier="input-password"
                disabled={loading}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    id="senha"
                    placeholder="senha"
                    name='senha' type='password'
                    required></input>

                <input
                data-identifier="input-name"
                disabled={loading}
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    id="nome"
                    placeholder="nome"
                    name='nome' type='text'
                    required></input>

                <input
                data-identifier="input-photo"
                disabled={loading}
                    value={foto}
                    onChange={e => setFoto(e.target.value)}
                    id="foto"
                    placeholder="foto"
                    name='foto' type='text'
                    required></input>

                <button 
                disabled={loading}
                onClick={() => cadastrar()} 
                type='submit'>{loading ? <Gif src={loading_1}/>:'Cadastrar'}
                </button>

            </Form>
            <Link to='/'>
                <A data-identifier="back-to-login-action">Já tem uma conta? Faça login!</A>
            </Link>
        </Div>
    )

}

export default Cadastro

const Gif = styled.img`
    width: 30px;
`

const Div = styled.div`
    margin-top: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const ImgLogo = styled.img`
    width: 180px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-items: center;
    
    input{
    margin-bottom: 6px ;
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    ::placeholder{
        font-family: 'Lexend Deca';
        line-height: 25px;
        color: #DBDBDB;
    }
    }

    button{
        font-family: 'Lexend Deca';
        width: 303px;
        height: 45px;
        background-color: #52b6ff;
        border-radius: 4px;
        border: none;

        text-align: center;
        color: #ffffff;
        font-size: 21px;
    }
`

const A = styled.div`
    margin-top: 25px;
    font-family: 'Lexend Deca';
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`
