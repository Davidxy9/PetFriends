import { Header } from "../Header";
import { Main } from "../Main";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
             <Header />
            <Main />
        </Container>
    );
}