import Card from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ImageListItem from "@mui/material/ImageListItem";
import { dataBanksList } from "./dataStepConfirmation";
import useWindowWidth from "../../../hooks/useWindowWidth";


const StepConfirmationBanksList = () => {
  const { windowWidth } = useWindowWidth();

  return (
    <List
      sx={{
        maxWidth: "500px",
        width: "100%",
        mx: "auto",
        display: "grid",
        gridTemplateColumns: windowWidth < 400 ? "50% 50%" : "25% 25% 25% 25%",
      }}
    >
      {dataBanksList.map(
        ({ img, link }: { img: JSX.Element; link: string }, idx) => {
          return (
            <ImageListItem
              key={idx}
              sx={{
                border: 1,
                borderColor: "info.light",
                m: { xs: 0.3, sm: 0.8 },
                p: {xs:"5%", sm:"10%"}
              }}
            >
              <Link
                to={link}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                }}
                target="_blank"
              >
                {/* <img src={img} alt={alt} loading="lazy" /> */}
                {img}
              </Link>
            </ImageListItem>
          );
        }
      )}
     
    </List>
  );
};

export default StepConfirmationBanksList;
