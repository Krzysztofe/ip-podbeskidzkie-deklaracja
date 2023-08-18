import Card from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const ing = require("./../../images/ing.png");
const millenium = require("./../../images/millennium.png");
const santander = require("./../../images/santander.png");
const alior = require("./../../images/alior.png");
const credit = require("./../../images/credit-agricole.png");
const mbank = require("./../../images/mbank.png");
const pekao = require("./../../images/pekao.png");
const pko = require("./../../images/pko-bank-polski.png");

const BanksList = () => {
  {
    /* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {itemData.map(item => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>; */
  }

  return (
    <ImageList sx={{display:"flex", flexWrap:"wrap", maxWidth: 300}}>
      {[
        {
          img: ing,
          link: "https://www.ing.pl/",
          alt: "Ing",
        },
        {
          img: millenium,
          link: "https://www.bankmillennium.pl/",
          alt: "Millenium",
        },
        {
          img: santander,
          link: "https://www.santander.pl/klient-indywidualny",
          alt: "Santander",
        },
        {
          img: alior,
          link: "https://www.santander.pl/klient-indywidualny",
          alt: "Alior",
        },
        {
          img: credit,
          link: "https://www.santander.pl/klient-indywidualny",
          alt: "Credit",
        },
        {
          img: mbank,
          link: "https://www.santander.pl/klient-indywidualny",
          alt: "Mbank",
        },
        {
          img: pekao,
          link: "https://www.santander.pl/klient-indywidualny",
          alt: "Pekao",
        },
        {
          img: pko,
          link: "https://www.santander.pl/klient-indywidualny",
          alt: "PKO",
        },
      ].map(
        ({ img, link, alt }: { img: string; link: string; alt: string }) => {
          return (
            <ImageListItem sx={{ border: "1px solid black", width: "20%" }}>
              <Link
                to={link}
                style={{ textDecoration: "none", color: "black", display: "flex" }}
              >
                <img
                  src={img}
                  alt={alt}
                  loading="lazy"
                  style={{ width: 50, marginInline: "auto" }}
                />
              </Link>
            </ImageListItem>
          );
        }
      )}
    </ImageList>
  );
};

export default BanksList;
