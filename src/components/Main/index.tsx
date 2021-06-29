import { Category } from "../Category";
import { Product } from "../Product";
import { Summary } from "../Summary";
import { Container } from "./styles";

export function Main() {
    return (
        <Container>
            <Summary />
            <Category />
            <Product />
        </Container>
    );
}
//<Category />