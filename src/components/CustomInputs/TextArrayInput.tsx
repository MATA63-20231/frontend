import { FieldArray } from "formik";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import { Tooltip } from "@mui/material";
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
      <Typography sx={{ my: 1, mr: 3 }}>{title}</Typography>
      <FieldArray name={name}>
        {({ push, remove, swap }) => (
          <>
            {typeof errors === "string" && (
              <FormHelperText error filled sx={{ textAlign: "center" }}>
                {errors}
              </FormHelperText>
            )}

            <Grid
              container
              flexDirection="column"
              sx={{ alignItems: "center" }}
            >
              <Grid container>
                {values.map((_, index) => (
                  <Grid
                    container
                    alignItems="center"
                    key={`${name}[${index}]`} // eslint-disable-line react/no-array-index-key
                    sx={{ py: 0.5 }}
                  >
                    <Grid item xs={0.5}>
                      <Typography variant="indexList">{index + 1}</Typography>
                    </Grid>

                    <Grid item xs>
                      <TextInput
                        required
                        size="small"
                        name={`${name}[${index}]`}
                        label={label}
                      />
                    </Grid>

                    <Grid item xs="auto">
                      <Grid container flexDirection="column">
                        {index > 0 && (
                          <Tooltip title="Subir item">
                            <IconButton
                              sx={{ p: 0, mb: 0.3, height: "18px" }}
                              disabled={loading}
                              onClick={() => swap(index, index - 1)}
                            >
                              <ArrowDropUpIcon
                                sx={{ fontSize: 30, color: "secondary.main" }}
                              />
                            </IconButton>
                          </Tooltip>
                        )}
                        {index < values.length - 1 && (
                          <Tooltip title="Descer item">
                            <IconButton
                              sx={{ p: 0, mt: 0.3, height: "18px" }}
                              disabled={loading}
                              onClick={() => swap(index, index + 1)}
                            >
                              <ArrowDropDownIcon
                                sx={{ fontSize: 30, color: "secondary.main" }}
                              />
                            </IconButton>
                          </Tooltip>
                        )}
                      </Grid>
                    </Grid>

                    <Grid item xs="auto">
                      <Tooltip title="Deletar item">
                        <IconButton
                          disabled={loading}
                          onClick={() => remove(index)}
                        >
                          <DeleteIcon sx={{ color: "secondary.main" }} />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              <Grid>
                <Tooltip title="Adicionar item">
                  <IconButton
                    sx={{ p: 0 }}
                    disabled={loading}
                    onClick={() => push("")}
                  >
                    <AddCircleIcon sx={{ color: "secondary.main" }} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </>
        )}
      </FieldArray>
    </>
  );
}
