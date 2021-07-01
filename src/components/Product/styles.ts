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

    /* display: flex;
    flex-wrap: wrap;
    max-width: 2000px;
    margin: 50px 0;
    border-radius: 10px;

        button {
            flex: 1 1 100px;
             padding-top: 10px;
             padding-left: 10px;
             padding-right: 10px;
             max-width: 170px;
             background: #FFFF;
        } */
        display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  grid-column-gap: 10px;
  grid-row-gap: 1em;

  img {
      width: 30%;
      height: 30%;

  }
`;

export const Separator = styled.div`
    /* width: 80%; */
  /* float: left; */
  width: 20%;
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