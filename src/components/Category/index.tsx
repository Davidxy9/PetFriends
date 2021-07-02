import { Container } from "./styles";
import rectanguleImg from '../../assets/rectangule.png'

export function Category() {

    function handleTeste(){
        window.scroll(0,600)

    }

    return (
        <Container>
            <img src={rectanguleImg} alt="retangulo horizontal" />
            
            <button onClick={handleTeste}>
                Sugestão do vendedor
            </button>

            <button>
                Brinquedos
            </button>
                
            <button>
                Camas e Casinhas
            </button>

            <button>
                Coleiras
               
            </button>

            <button>
                Ossos e Petiscos
            </button>
        </Container>
    );
}