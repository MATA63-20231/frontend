import TextInput from "../../../components/CustomInputs/TextInput.tsx";

export default function RecipeCreationFields() {
  return (
    <>
      <TextInput required name="usuario" label="Usuário" />
      <br />
      <br />
      <TextInput name="senha" label="Senha" type="password" />
    </>
  );
}
