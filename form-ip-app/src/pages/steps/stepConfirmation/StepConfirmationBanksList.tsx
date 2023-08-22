import Card from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { dataBanksList } from "./dataStepConfirmation";

const StepConfirmationBanksList = () => {

  return (
    <ImageList sx={{ display: "flex", flexWrap: "wrap", maxWidth: 300 }}>
      {dataBanksList.map(
        ({ img, link, alt }: { img: string; link: string; alt: string }) => {
          return (
            <ImageListItem sx={{ border: "1px solid black", width: "20%" }}>
              <Link
                to={link}
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                }}
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

export default StepConfirmationBanksList;
