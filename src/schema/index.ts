import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Por favor, introduce una dirección de correo electrónico válida",
  }),
  name: z.string().min(1, {
    message: "Por favor, escriba su nombre",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe contener 6 caracteres como mínimo",
  }),
  confirmPassword: z.string().min(6, {
    message: "La contraseña debe contener 6 caracteres como mínimo",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Por favor, introduce una dirección de correo electrónico válida",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe contener 6 caracteres como mínimo",
  }),
});
