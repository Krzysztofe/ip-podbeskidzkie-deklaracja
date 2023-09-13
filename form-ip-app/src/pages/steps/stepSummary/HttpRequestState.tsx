import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useContext } from "react";
import { StepsContext } from "../../../context/ContextProv";

const HttpRequestState = () => {
  const { error, isLoading } = useContext(StepsContext);

  // const isLoading = true;

  if (isLoading) {
    return (
      <>
        <Box
          sx={{
            position: "absolute",
            right: "1%",
            width: "calc(100% - 16px)",
            height: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 92px)" },
            bgcolor: "white",
            opacity: "0.8",
            zIndex: 3,
            backgroundColor: "white",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 4,
          }}
        >
          <CircularProgress />
        </Box>
      </>
    );
  } else if (error) {
    return (
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          color: "red",
        }}
      >
        Błąd: {error}
      </Box>
    );
  } else return <></>;
};

export default HttpRequestState;
