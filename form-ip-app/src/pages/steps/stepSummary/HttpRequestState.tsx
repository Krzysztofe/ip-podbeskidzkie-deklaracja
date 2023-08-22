import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useContext } from "react";
import { StepsContext } from "../../../context/ContextProv";

const HttpRequestState = () => {
  const { isLoading, error } = useContext(StepsContext);

  if (isLoading) {
    return (
      <>
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          <CircularProgress />
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "101%",
            bgcolor: "white",
            opacity: "0.8",
            zIndex: 1,
          }}
        ></Box>
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
        {error}
      </Box>
    );
  } else return <></>;
};

export default HttpRequestState;
