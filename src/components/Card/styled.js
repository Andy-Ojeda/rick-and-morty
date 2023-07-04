import styled from 'styled-components'

export const Button = styled.button`
display: inline-block;
background-color: ${props => props.close ? 'transparent' : 'black'};
border-radius: 5px;
width: fit-content;
high: fit-content;
filter: brightness(0.8);
margin: 1rem;
cursor: pointer;

&:hover{
    filter: brightness(1.5);
    transform: scale(1.2);
}
`

export const ButtonCont = styled.div`
display: flex;
justify-content: space-around`

export const CardConteiner = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
// background: #a1a3e7;
// background: linear-gradient(181deg,#a1a3e7 0%, #e1ccf3 80%);
// background: -webkit-linear-gradient(181deg,#a1a3e7 0%, #e1ccf3 80%);
// background: -moz-linear-gradient(181deg,#a1a3e7 0%, #e1ccf3 80%);
background: transparent;
width: fit-content;
padding: 1rem;
border-radius: 10px;
border: 1px solid green;
backdrop-filter: blur(5px);
margin: 1rem;
box-shadow: 10px 10px 32px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 32px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 32px 0px rgba(0,0,0,0.75);`

export const Title = styled.h2`
// --text-color: blue;
font-family: Nunito;
font-weigh: 700;
color: white`

export const Label = styled.h2`
font-family: Nunito;
font-size: 0.8rem;
font-weigh: 400;
color: white`

export const Image = styled.img`
   max-width: 100%;
   height: auto;
   margin-top: 1.2rem;
   border-radius: 10px;
`;