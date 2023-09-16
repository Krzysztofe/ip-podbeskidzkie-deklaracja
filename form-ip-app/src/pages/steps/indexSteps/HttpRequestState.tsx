import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { StepsContext } from "../../../context/ContextProv";

const HttpRequestState = () => {
  const { error, isLoading } = useContext(StepsContext);

  const BoxStylesPrimary = {
    position: "absolute",
    height: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 92px)" },
    width: "100%",
    bgcolor: "white",
    opacity: "0.8",
    zIndex: 3,
    backgroundColor: "white",
  };

  const BoxStylesSecondary = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    color: "red",
    zIndex: 4,
  };

  if (isLoading) {
    return (
      <>
        <Box sx={BoxStylesPrimary}></Box>
        <Box sx={BoxStylesSecondary}>
          <CircularProgress />
        </Box>
      </>
    );
  } else if (error) {
    return (
      <>
        <Box sx={BoxStylesPrimary}></Box>
        <Box sx={BoxStylesSecondary}>
          <Typography>{error.message}</Typography>
          <Typography variant={"fs_12_rg"} component={"p"} textAlign={"center"}>
            Ponów próbę
          </Typography>
        </Box>
      </>
    );
  } else return <></>;
};

export default HttpRequestState;
