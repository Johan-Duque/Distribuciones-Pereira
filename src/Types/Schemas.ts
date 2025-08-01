import z from "zod";

export const schema_form = z.object({
  name: z.string().min(2, "Nombre Invalido"),
  last_name: z.string().min(2, "Apellido Invalido"),
  email: z.string().min(2, "Email Invalido").email(),
  phone: z.string().regex(/^0(412|414|416|424|426)\d{7}$/, "Número de teléfono inválido."),
  message: z.string().min(2, "Mensaje Invalido"),
});

export type type_form = z.infer<typeof schema_form>
