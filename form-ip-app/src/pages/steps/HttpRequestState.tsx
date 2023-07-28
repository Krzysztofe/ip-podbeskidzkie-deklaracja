import React from "react";
import useHttp from "./stepForm/hooks/useHttp";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useContext } from "react";
import { StepsContext } from "../../context/ContextProv";

const HttpRequestState = () => {

const { isLoading, error } = useContext(StepsContext);

// console.log('',error)

  if (isLoading) {
    return (
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
    );
  } 
  else if (error) {
    return (
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {error}
      </Box>
    );
  } else return <></>;
};

export default HttpRequestState;
