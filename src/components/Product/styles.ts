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

export const Separator = styled.div`
    /* width: 80%; */
  /* float: left; */
  width: 50%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: 'white';

  input {
    float: left;
    width: 93%;
    height: 100%;
    border: none;
    background: 'white';
    outline: none !important;
    box-shadow: none;
  }

  svg {
    height: 40px;

    /* margin: 0; */
  }
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

