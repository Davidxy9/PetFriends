import styled, {keyframes} from "styled-components";

const appearFromRight = keyframes`
    from{
    opacity: 0;
    transform: translateX(50px);
  }to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
    margin: 1.2rem auto;
   

    img {
        width: 100%;
        margin: 1rem auto;
    }

    button {
        font-size: 1rem;
        font-weight: 500;
        margin: auto 1rem 0 4rem;
        padding: 0 2rem;
        border: none;
        background: none;
        align-items: center;
        justify-content: center;

        transition: filter 0.3s;

        &:hover {
            color: var(--background);
            text-decoration: underline;
        }
    }

    animation: ${appearFromRight} 1s;

`;