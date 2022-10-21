import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../img/Logo.jpg"
import { useAuth } from "../Provedores/auth"

function PageLogin() {

    const navigate = useNavigate('')
    const URLLogin = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
    const { setToken, user, setUser, password, setPassword, setImage } = useAuth()
    const body = {
        email: user,
        password: password
    }

    
    function handleSubmit(e) {
        e.preventDefault();
        const promise = axios.post(URLLogin, body)
         
        promise.then((res) => {
            console.log(res.data)
            navigate('/habitos')

            const image = res.data.image
            const token = res.data.token
            
            localStorage.setItem('image', JSON.stringify(image))
            localStorage.setItem('token', JSON.stringify(token))
            
            setImage(image)
            setToken(token)
        
        })

        promise.catch((erro) => {
            alert(erro.response.data.message)
        })
        
        localStorage.setItem('user', JSON.stringify(user))
       
    
        setUser(user)
        
        
    }
   
    return (
        <Div>
            <Link to='/'>
                <ImgLogo src={logo} />
            </Link>

            <Form onSubmit={(e) => handleSubmit(e)}>

                <input
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    id="email"
                    placeholder="email"
                    name='email' type='email'
                    required></input>


                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    id="senha"
                    placeholder="senha"
                    name='senha' type='password'
                    required></input>

                <button type='submit'>Entrar</button>

            </Form>
            <Link to='/cadastro'>
                <A>Não tem uma conta? Cadastre-se!</A>
            </Link>
        </Div>
    )
}

export default PageLogin

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

