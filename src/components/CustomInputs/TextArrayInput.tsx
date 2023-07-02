import { FieldArray } from "formik";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import TextInput from "./TextInput.tsx";

interface IProps {
  title: string;
  name: string;
  label: string;
  values: string[];
  errors: string | string[] | undefined;
  loading: boolean;
}

export default function TextArrayInput({
  title,
  name,
  label,
  values,
  errors,
  loading,
}: IProps) {
  return (
    <>
      <Typography>{title}</Typography>
      <FieldArray name={name}>
        {({ push, remove, swap }) => (
          <>
            {typeof errors === "string" && (
              <FormHelperText error filled sx={{ textAlign: "center" }}>
                {errors}
              </FormHelperText>
            )}
            {values.map((_, index) => (
              <Grid
                container
                alignItems="flex-start"
                key={`${name}[${index}]`} // eslint-disable-line react/no-array-index-key
                sx={{ py: 0.5 }}>
                <Grid item xs>
                  {index + 1}
                </Grid>

                <Grid item xs>
                  {index > 0 && (
                    <IconButton
                      disabled={loading}
                      onClick={() => swap(index, index - 1)}>
                      <ArrowDropUp
                        sx={{ fontSize: 30, color: "secondary.main" }}
                      />
                    </IconButton>
                  )}
                  {index < values.length - 1 && (
                    <IconButton
                      disabled={loading}
                      onClick={() => swap(index, index + 1)}>
                      <ArrowDropDown
                        sx={{ fontSize: 30, color: "secondary.main" }}
                      />
                    </IconButton>
                  )}
                </Grid>

                <Grid item xs>
                  <TextInput
                    required
                    size="small"
                    name={`${name}[${index}]`}
                    label={label}
                  />
                </Grid>

                <Grid item xs>
                  <IconButton disabled={loading} onClick={() => remove(index)}>
                    <DeleteIcon
                      sx={{ fontSize: 30, color: "secondary.main" }}
                    />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            <Button
              disabled={loading}
              variant="outlined"
              onClick={() => push("")}>
              Adicionar
            </Button>
          </>
        )}
      </FieldArray>
    </>
  );
}
