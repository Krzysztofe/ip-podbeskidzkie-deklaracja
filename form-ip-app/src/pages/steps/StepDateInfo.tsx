import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { AnyMxRecord } from "dns";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";

const StepDateInfo = () => {
  return (
    <Card>
      <Typography variant="h6" sx={{ p: 1, fontWeight: "bold" }}>
        Deklaracja została złożona
      </Typography>
      <Typography variant="body1" sx={{ p: 1, fontWeight: "bold" }}>
        KONTAKT: tel.
        <br /> 736-850-536 <br />
        ipamazon@wp.pl <br />
        www.ozzip.p
      </Typography>
      <Typography variant="body2" sx={{ p: 1, fontWeight: "bold" }}>
        Facebook: <br /> OZZ Inicjatywa Pracownicza Amazon <br /> INFORMACJA O
        DACIE PRZYJĘCIA DO ZWIĄZKU
      </Typography>
      <Typography variant="body2" sx={{ p: 1 }}>
        Jeżeli nasza Komisja nie postanowi inaczej, datą przyjęcia Ciebie do
        związku będzie: <br />
        1) ostatni dzień miesiąca, w którym oświadczenie to zostało doręczone:{" "}
        <br />
        a) członkowi prezydium organizacji podstawowej Związku (również poprzed
        odebranie ze skrzynki pocztowej na tablicy związkowej) <br /> b)
        bezpośrednio osobie działającej z upoważnienia prezydium Komisji <br />
        c) na ujawniony w KRS adres Związku (aktualnie: ul. Kościelna 4/1a,
        60-538 Poznań)
        <br /> 2) dzień, w którym po otrzymaniu tego oświadczenia prezydium
        Komisji podjęło się Twojej obrony wobec podmiotu zatrudniającego (w tym
        pracodawcy). <br />
        Powyższe wynika z Uchwały nr 60/5/2018 Komisji Krajowej OZZIP z
        28.10.2018 r
      </Typography>

      <Typography variant="body2" sx={{ p: 1, fontWeight: "bold" }}>
        JEŚLI PODAŁAŚ/PODAŁEŚ E-MAIL, OTRZYMASZ DROGĄ E-MAIL POTWIERDZENIE
        ZAPISANIA DO ZWIĄZKU ORAZ DODANIA DO LISTY DYSKUSYJNEJ.
      </Typography>

      <Typography variant="h6" sx={{ p: 1, fontWeight: "bold" }}>
        Wstąpienie do komisji zostanie zaakceptowane po wykonaniu przelewu
        bankowego składki na konto....
      </Typography>

      {[
        {
          img: "../../images/ing.png",
          link: "https://www.bankmillennium.pl/",
          name: "Millenium",
        },
        {
          img: "../../images/ing.png",
          link: "https://www.mbank.pl/indywidualny/",
          name: "M Bank",
        },
        {
          img: "../../images/ing.png",
          link: "https://www.santander.pl/klient-indywidualny",
          name: "Santander",
        },
      ].map(
        ({ img, link, name }: { img: string; link: string; name: string }) => {
          return (
            <Card sx={{ border: "1px solid black", display: "inline-block" }}>
              <Link
                to={link}
                style={{ textDecoration: "none", color: "black" }}
              >
                <img src="./../../images/millennium.png" alt="" />
                {name}
              </Link>
            </Card>
          );
        }
      )}
    </Card>
  );
};

export default StepDateInfo;
