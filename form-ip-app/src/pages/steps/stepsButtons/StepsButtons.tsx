import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import ButtonClauseSumit from "./ButtonClauseSumit";
import ButtonFormSubmit from "./ButtonFormSubmit";
import ButtonPOSTvalues from "./ButtonPOSTvalues";
import ButtonReturn from "./ButtonReturn";

const StepsButtons = () => {
  const buttonStyles = styled(Button)({
    width: "35%",
    p: "0.3em",
    marginLeft: "auto",
    "&:hover": { backgroundColor: "#2455BA" },
  });

  return (
    <>
      <Container
        sx={{
          // height: "100%",
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: "center",
          gap: 2,
          paddingBlock: 4,
          // backgroundColor: "lightgrey",
        }}
      >
        <ButtonReturn />
        <ButtonFormSubmit />
        <ButtonClauseSumit />
        <ButtonPOSTvalues />
      </Container>
    </>
  );
};

export default StepsButtons;
