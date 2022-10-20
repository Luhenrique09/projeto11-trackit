import styled from "styled-components"

function Habitos (){
    return(
        <div>
            <Topo>
            <LogoP>TrackIt</LogoP>
            <img src="https://cdn.dicionariopopular.com/imagens/imagem-de-perfil-gato.jpg?auto_optimize=low" />
            </Topo>


        </div>
    )
}

export default Habitos

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