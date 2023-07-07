import { Grid } from "@mui/material";
import TextInput from "../../../components/CustomInputs/TextInput.tsx";
import PasswordInput from "../../../components/CustomInputs/PasswordInput.tsx";

export default function RecipeCreationFields() {
  return (
    <Grid container direction="column" justifyContent="center" spacing={2}>
      <Grid item>
        <TextInput required name="usuario" label="Usuário" />
      </Grid>

      <Grid item>
        <TextInput required name="nome" label="Nome" />
      </Grid>

      <Grid item>
        <TextInput required name="email" label="E-mail" type="email" />
      </Grid>

      <Grid item>
        <PasswordInput required name="senha" label="Senha" />
      </Grid>

      <Grid item>
        <PasswordInput
          required
          name="confirmacaoSenha"
          label="Confirme a senha"
        />
      </Grid>
    </Grid>
  );
}
