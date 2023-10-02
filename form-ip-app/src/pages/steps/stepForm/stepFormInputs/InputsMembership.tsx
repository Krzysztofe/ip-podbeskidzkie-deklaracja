import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useContext } from "react";
import HeadingPrimary from "../../../../components/HeadingPrimary";
import { StepsContext } from "../../../../context/ContextProv";
import TextInputsErrors from "./InputsErrors";

const InputsMembership = () => {
  const { formik } = useContext(StepsContext);

  return (
    <>
      <HeadingPrimary
        headingText={"Przynależność do innych związków zawodowych:"}
      />
      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          name="membership"
          value={formik.values.membership}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            width: { xs: "80%", sm: "60%" },
            marginInline: "auto",
            ml: { xs: "auto", sm: "40%" },
            mt: { xs: 4.2, sm: 5.9 },
          }}
        >
          {[
            "Nie należę do innego związku zawodowego u pracodawcy",
            "Należę do innego związku zawodowego u pracodawcy, jednak chcę, by przy podawaniu informacji o liczbie członków moje członkostwo uwzględniał wyłącznie OZZIP",
            "Należę do innego związku zawodowego u pracodawcy i nie chcę by przy podawaniu informacji i liczbie członków OZZIP uwzględniał moje członkostwo",
          ].map((membership, idx) => {
            return (
              <FormControlLabel
                key={membership}
                value={membership}
                control={<Radio />}
                label={membership}
                sx={{
                  mt: idx !== 0 ? 2 : 0,
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
            width: { xs: "80%", sm: "60%" },
            marginInline: "auto",
            marginLeft: { xs: "auto", sm: "40%" },
            mt: 1,
          }}
        >
          <TextInputsErrors formik={formik} value={"membership"} />
        </Box>
      </FormControl>
    </>
  );
};

export default InputsMembership;
