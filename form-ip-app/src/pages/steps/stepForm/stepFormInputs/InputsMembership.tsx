import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import TextInputsErrors from "./InputsErrors";
import HeadingPrimary from "../../../../components/HeadingPrimary";
import Box from "@mui/material/Box";

const InputsMembership = () => {
  const { formik } = useContext(StepsContext);

  return (
    <FormControl sx={{ width: "100%" }}>
      <HeadingPrimary
        headingText={"Przynależność do innych związków zawodowych:"}
      />

      <RadioGroup
        name="membership"
        value={formik.values.membership}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        sx={{
          gap: 3,
          width: { xs: "80%", sm: "60%" },
          marginInline: "auto",
          ml: { xs: "auto", sm: "40%" },
          mt: { xs: 2, sm: 4 },
        }}
      >
        {[
          "Nie należę do innego związku zawodowego u pracodawcy.",
          "Należę do innego związku zawodowego u pracodawcy, jednak chcę by przy podawaniu informacji o liczbie członków moje członkowstwo uwzgędniał wyłącznie OZZIP.",
          "Należę do inngeo związku zawodowego u pracodawcy i nie chcę by przy podawaniu informacji i liczbie członków OZZIP uwzględniał moje członkostwo.",
        ].map(membership => {
          return (
            <FormControlLabel
              key={membership}
              value={membership}
              control={<Radio />}
              label={membership}
              sx={{
                ml: -1,
                "& .MuiFormControlLabel-label": {
                  mr: 1,
                  color: "info.dark",
                  fontSize: theme => theme.typography.fs_16_rg,
                },
              }}
            />
          );
        })}
      </RadioGroup>
      <Box
        sx={{
          width: { xs: "100%", sm: "60%" },
          marginLeft: { xs: "auto", sm: "40%" },
          mt: 1,
        }}
      >
        <TextInputsErrors
          formik={formik}
          value={"membership"}
          otherValue={null}
        />
      </Box>
    </FormControl>
  );
};

export default InputsMembership;
