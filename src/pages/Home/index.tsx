import { useState } from "react";
import { Card, Container, Logo } from "./styles";

import logoImg from '../../assets/logo.svg';
import sunImg from '../../assets/sun.png';

export function Home() {
    const [lat, setLat] = useState<any>(null);
    const [lng, setLng] = useState<any>(null);
    const [status, setStatus] = useState<any>(null);

    const getLocation = () => {
        if (!navigator.geolocation) {
          setStatus('Geolocation is not supported by your browser');
        } else {
          setStatus('Locating...');
          navigator.geolocation.getCurrentPosition((position) => {
            setStatus(null);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
          }, () => {
            setStatus('Unable to retrieve your location');
          });
        }
      }
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
                <button onClick={getLocation}>Autualizar</button>
            </Card>
            <h1>Coordinates</h1>
            <p>{status}</p>
            {lat && <p>Latitude: {lat}</p>}
            {lng && <p>Longitude: {lng}</p>}
        </Container>
    )
}