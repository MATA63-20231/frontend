/* eslint-disable no-shadow */

enum FormErrorMessages {
  // Erors gerais
  REQUIRED = "Campo obrigatório.",
  INVALID_EMAIL = "E-mail inválido.",

  // Mínimo de caractéres
  MIN_CHAR_2 = "Deve ter pelo menos 2 caractéres.",

  // Máximo de caractéres
  MAX_255 = "Deve ter no máximo 255 caractéres.",

  // Números
  INTEGER_MORE_THAN_ZERO = "Deve ser um número inteiro maior que 0.",
  INTEGER_GREATER_EQUAL_ZERO = "Deve ser um número inteiro maior ou igual a 0.",
  MAX_59 = "Deve ser menor ou igual a 59.",

  // Arrays
  MIN_1_ITEM = "É necessário adicionar pelo menos um item.",
}

export default FormErrorMessages;
