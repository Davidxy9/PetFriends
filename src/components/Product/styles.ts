import styled from "styled-components";

export const Container = styled.div`
    background: #F3F3F4;
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

    }
`;

export const Content = styled.div`

    display: flex;
    flex-wrap: wrap;
    max-width: 2000px;
    margin: 50px 0;
    border-radius: 10px;

        div {
            flex: 1 1 100px;
             padding-top: 10px;
             padding-left: 10px;
             padding-right: 10px;
             max-width: 170px;
        }
`;

export const Separator = styled.div`
    background: #F3F3F4;
    padding: 2rem;
`; 