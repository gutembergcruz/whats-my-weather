import { Card, Container, Logo } from "./styles";

import logoImg from '../../assets/logo.svg';
import sunImg from '../../assets/sun.png';

export function Home() {
    return (
        <Container>
            <Logo src={logoImg} />
            <p>Localidade: Manaus - AM</p>
            <Card>
                <div className="tempo">
                    <img src={sunImg} alt="" />
                    <p>29<span>ºc</span></p>
                    <span>Ensolarado</span>
                </div>
                <div className="details">
                    <p>Chuva: <span>18%</span> </p>
                    <p>Umidade: <span>18%</span> </p>
                    <p>Vento: <span>18%</span> </p>
                </div>
                <p>Não esqueça de usar protetor solar.</p>
                <button>Autualizar</button>
            </Card>
        </Container>
    )
}