import { useEffect, useState } from "react";
import { Card, Container, Logo } from "./styles";
import axios from "axios";

import logoImg from '../../assets/logo.svg';
import img01 from "../../assets/01.png";
import img02 from "../../assets/02.png";
import img03 from "../../assets/03.png";
import img04 from "../../assets/04.png";
import img05 from "../../assets/05.png";
import img06 from "../../assets/06.png";
import img07 from "../../assets/07.png";
import img08 from "../../assets/08.png";
import img09 from "../../assets/09.png";

export function Home() {
    const [grau, setGrau] = useState("--");
    const [tempo, setTempo] = useState("--");
    const [windSpeed, setWindSpeed] = useState<any>("00");
    const [humidity, setHumidity] = useState<any>("00");
    const [loca, setLoca] = useState<any>(undefined);
    const [main, setMain] = useState<String>("Clear");
    const [step, setStep] = useState(false);

    useEffect(() => {
        getLocation()
    }, [])

    const getLocation = () => {
        if (!navigator.geolocation) {
            alert('Seu navegador não suporta essa funcionalidade')
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                getWeather(position.coords.latitude, position.coords.longitude);
                setStep(true)
            });
        }
    }

    async function getWeather(la: any, lo: any) {
        const key = "SUA CHAVE AQUI"
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lo}&lang=pt_br&appid=${key}&units=metric`)
            .then(res => {
                console.log(res.data)
                setGrau(res.data.main.temp)
                setTempo(res.data.weather[0].description)
                setWindSpeed(res.data.wind.speed * 3.6)
                setHumidity(res.data.main.humidity)
                setLoca(res.data.name)
            })
    }
    return (
        <Container>
            <Logo src={logoImg} />
            {loca &&
                <p>Localidade: {loca}</p>
            }
            {!step && <p>Para iniciar confirme sua localização.</p> }
            {step &&
                <Card>
                    <div className="tempo">
                        {tempo === "céu limpo" && <img src={img01} alt="" />}
                        {tempo === "Poucas nuvens" && <img src={img02} alt="" />}
                        {tempo === "nuvens dispersas" && <img src={img03} alt="" />}
                        {tempo === "nuvens quebradas" && <img src={img04} alt="" />}
                        {tempo === "chuva de banho" && <img src={img05} alt="" />}
                        {tempo === "chuva" && <img src={img06} alt="" />}
                        {tempo === "trovoada" && <img src={img07} alt="" />}
                        {tempo === "neve" && <img src={img08} alt="" />}
                        {tempo === "névoa" && <img src={img09} alt="" />}
                        <p>{grau}<span>ºc</span></p>
                        <span>{tempo}</span>
                    </div>
                    <div className="details">
                        <p>Umidade: <span>{humidity}%</span> </p>
                        <p>Vento: <span>{windSpeed}</span> </p>
                    </div>
                    {tempo === "céu limpo" && <p>Não esqueça de usar protetor solar.</p>}
                    {tempo === "Poucas nuvens" && <p>Ideal para um passeio no parque.</p>}
                    {tempo === "nuvens dispersas" && <p>Ideal para um passeio no parque.</p>}
                    {tempo === "nuvens quebradas" && <p>Talvez seria interessante levar um guarda chuvas.</p>}
                    {tempo === "chuva de banho" && <p>Certamente você precisa de um guarda chuvas.</p>}
                    {tempo === "chuva" && <p>Certamente você precisa de um guarda chuvas.</p>}
                    {tempo === "trovoada" && <p>Certamente você precisa de um guarda chuvas.</p>}
                    {tempo === "neve" && <p>Não esqueça de se agasalhar bem.</p>}
                    {tempo === "névoa" && <p>Mais atenção na estrada.</p>}
                    <button onClick={() => getLocation()}>Autualizar</button>
                </Card>
            }

        </Container>
    )
}