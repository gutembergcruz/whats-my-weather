import styled from "styled-components";

export const Container = styled.section`
width: 480px;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
>p{
    font-size: 20px;
    color: #808080;
}
`;

export const Logo = styled.img`
width: 200px;
`;

export const Card = styled.section`
background: #fff;
width: 100%;
border-radius: 10px;
padding: 30px;
display: flex;
flex-direction: column;
gap: 10px;
>div.tempo{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
img{
    width: 80px;
}
p{
    font-size: 40px;
    font-weight: 500;
    position: relative;
    span{
        font-weight: 300;
        font-size: 20px;
        position: absolute;
    }
}
>span{
    color: #23BD98;
    font-size: 25px;
    text-transform: capitalize;
}
}
>div.details{
display: flex;
align-items: center;
justify-content: space-around;
p{
    font-size: 20px;
    font-weight: 500;
    span{
        font-weight: 400;
    }
}
}
>p{
    color: #23BD98;
    text-align: center;
    font-size: 20px;
}
>button{
    width: 100%;
    background: #23BD98;
    height: 50px;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-size: 25px;
    cursor: pointer;

}

`;