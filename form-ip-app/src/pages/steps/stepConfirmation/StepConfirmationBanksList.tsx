import Card from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { dataBanksList } from "./dataStepConfirmation";

const StepConfirmationBanksList = () => {
  return (
    <ImageList
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginInline: "auto",
        maxWidth: "400px",
        width: "100%",
      }}
    >
      {dataBanksList.map(
        ({ img, link, alt }: { img: string; link: string; alt: string }) => {
          return (
            <ImageListItem
              sx={{
                border: 1,
                borderColor: "info.light",
                bgcolor: "secondary.light",
                width: "23%",
                aspectRatio: "1/1",
              }}
            >
              <Link
                to={link}
                style={{
                  height: "100%",
                  display: "flex",
                }}
              >
                <img src={img} alt={alt} loading="lazy" />
              </Link>
            </ImageListItem>
          );
        }
      )}
    </ImageList>
  );
};

export default StepConfirmationBanksList;
