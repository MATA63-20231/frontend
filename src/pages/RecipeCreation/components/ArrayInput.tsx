import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Field, FieldArray } from "formik";
import { TextField } from "formik-mui";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

interface IProps {
  inputName: string;
  inputValues: string[];
}

export default function ArrayInput({ inputName, inputValues }: IProps) {
  return (
    <FieldArray name={inputName}>
      {({ push, remove, swap }) => (
        <>
          {inputValues.map((_, index) => (
            <Grid
              container
              alignItems="flex-start"
              key={inputName + "[" + index + "]"}
              sx={{ py: 0.5 }}>
              <Grid item xs>
                {index + 1}
              </Grid>

              <Grid item xs>
                {index > 0 && (
                  <IconButton onClick={() => swap(index, index - 1)}>
                    <ArrowDropUp
                      sx={{ fontSize: 30, color: "secondary.main" }}
                    />
                  </IconButton>
                )}
                {index < inputValues.length - 1 && (
                  <IconButton onClick={() => swap(index, index + 1)}>
                    <ArrowDropDown
                      sx={{ fontSize: 30, color: "secondary.main" }}
                    />
                  </IconButton>
                )}
              </Grid>

              <Grid item xs>
                <Field
                  fullWidth
                  component={TextField}
                  size="small"
                  name={inputName + "[" + index + "]"}
                  type="text"
                />
              </Grid>

              <Grid item xs>
                <IconButton onClick={() => remove(index)}>
                  <DeleteIcon sx={{ fontSize: 30, color: "secondary.main" }} />
                </IconButton>
              </Grid>
            </Grid>
          ))}
          <Button onClick={() => push("")}>Adicionar</Button>
        </>
      )}
    </FieldArray>
  );
}
