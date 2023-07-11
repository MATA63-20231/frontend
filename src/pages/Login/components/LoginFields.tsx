import { Grid } from "@mui/material";
import TextInput from "../../../components/CustomInputs/TextInput.tsx";
import PasswordInput from "../../../components/CustomInputs/PasswordInput.tsx";

export default function LoginFields() {
  return (
    <Grid container direction="column" justifyContent="center" spacing={2}>
      <Grid item>
        <TextInput required name="usuario" label="Usuário" />
      </Grid>

      <Grid item>
        <PasswordInput required name="senha" label="Senha" />
      </Grid>
    </Grid>
  );
}
