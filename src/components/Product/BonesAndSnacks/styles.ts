import styled from "styled-components";

export const Container = styled.div`
    /* background: #F3F3F4;
    display: flex;
    width: 100%;
    margin: auto;
    input {
        border: 0;
        border: 2px solid #DDDDDD;
        box-sizing: border-box;
        height: 40px;
        width: 440px;
        padding: 0 24px;
        border-radius: 3px;
        background: #FFFFFF;
        color: #898989;

    } */
    background: #F3F3F4;
    width: 100%;
`;



export const Content = styled.div`
    display: flex;
    margin-top: 80px;
    flex-wrap: wrap;
    margin: 0 auto;


    button {
        margin: 4rem auto;
        flex: 1 1 200px;
    }

    strong {
        margin-bottom: 1rem;
        
    }

   

    span {
        display: block;
        margin-bottom: 1rem;

    }

    img{
        max-width: 100%;
        max-height: 100%;
        margin-bottom: 1rem;

        display: block;

    }
  
`;

//ESTILIZAÇÃO MODAL

export const ContainerModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .button-close{
        margin-left: 33rem;
        border: none;
        background: none;
        color: var(--gridTextTitle);
    }

    img{
        border: 1px solid #EAEAEA;
        box-sizing: border-box;
        border-radius: 5px;
        
    }
    h1 {
        color: var(--background);
        font-size: 1.5rem;
        padding-left: 0.7rem;
        margin-bottom: 0.7rem;
        margin-top: 0.7rem;
        justify-content: center;
        align-items: center;
        margin-right: 5rem;
        margin-left: 5rem;
    }

    p {
        font-weight: 400;
    }

    .div-plus-and-less {
        margin: 1rem 14.4rem;
        padding: 0.2rem 2rem;
        //width: 3.1rem;
        width: 3.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #d7d7d7;
        box-sizing: border-box;
        border-radius: 5px;

        button {
            margin: auto;
            padding: 0;
            border: none;
            background: none;

            svg{
                color: #B41C8B;
            }
            
        }

        span {
                margin: auto 0.7rem;
                padding: auto 2rem;
                font-weight: 600;
            }
    }

    .button-add-product {
        background: var(--background);
        border-radius: 0.25rem;
        border: 0;
        color: #FFF;
        width: 100%;
        padding: 0 1.5rem;
        height: 2rem;
        font-size: 1rem;
        font-weight: 600;
    }

`;


