import { Container } from "./styles";
import rectanguleImg from '../../assets/rectangule.png'

export function Category() {

    function handleDirectionSuggestions(){
        window.scroll({
            top: 200,
            behavior: "smooth"
        })
    }

    function handleDirectionToys(){
        window.scroll({
            top: 900,
            behavior: "smooth"
        })
    }

    function handleDirectionBedsAndHouses(){
        window.scroll({
            top: 1400,
            behavior: "smooth"
        })
    }

    function handleDirectionCollars(){
        window.scroll({
            top: 2000,
            behavior: "smooth"
        })
    }

    function handleDirectionBonesAndSnacks(){
        window.scroll({
            top: 2550,
            behavior: "smooth"
        })
    }

    return (
        <Container>
            <img src={rectanguleImg} alt="retangulo horizontal" />
            
            <button onClick={handleDirectionSuggestions}>
                Sugestão do vendedor
            </button>

            <button onClick={handleDirectionToys}>
                Brinquedos
            </button>
                
            <button onClick={handleDirectionBedsAndHouses}>
                Camas e Casinhas
            </button>

            <button onClick={handleDirectionCollars}>
                Coleiras
               
            </button>

            <button onClick={handleDirectionBonesAndSnacks}>
                Ossos e Petiscos
            </button>
        </Container>
    );
}