import styled from "styled-components";

export  const Container = styled.div`
    display: flex;
    margin-top: 40px; 
    background: #F3F3F4;
    width: 100%;
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