import ImageListItem from "@mui/material/ImageListItem";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { dataBanksList } from "./dataStepConfirmation";
import { rwd } from "../../../utils/rwd";
import Box from "@mui/material/Box";

const StepConfirmationBanksList = () => {
  const { windowWidth } = useWindowWidth();

  return (
    <List
      sx={{
        maxWidth: "500px",
        width: "100%",
        mx: "auto",
        display: "grid",
        gridTemplateColumns: windowWidth < 400 ? "50% 50%" : "repeat(4, 25%)",
      }}
    >
      {dataBanksList.map(
        ({
          src,
          link,
          width,
          height,
        }: {
          src: string;
          link: string;
          width: string;
          height: string;
        }) => {
          return (
            <ImageListItem
              key={link}
              sx={{
                border: 1,
                borderColor: "info.light",
                m: rwd(0.3, 0.8),
                p: "5%",
                "&:hover": { borderColor: "primary.main" },
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
                <Box
                  component="img"
                  src={src}
                  alt="Logo OZZIP"
                  sx={{
                    width,
                    height,
                  }}
                />
              </Link>
            </ImageListItem>
          );
        }
      )}
    </List>
  );
};

export default StepConfirmationBanksList;
