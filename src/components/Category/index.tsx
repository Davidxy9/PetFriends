import { Container } from "./styles";
import rectanguleImg from '../../assets/rectangule.png'

export function Category() {
    return (
        <Container>
            <img src={rectanguleImg} alt="retangulo horizontal" />
            <button>
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