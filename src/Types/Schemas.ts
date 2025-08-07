import z from "zod";

export const schema_form = z.object({
  name: z.string().min(2, "Nombre Invalido"),
  last_name: z.string().min(2, "Apellido Invalido"),
  email: z.string().min(2, "Email Invalido").email(),
  phone: z.string().regex(/^\(0\d{3}\) \d{3}-\d{4}$/, {message: "El formato del teléfono debe ser (0xxx) xxx-xxxx."}),
  message: z.string().min(2, "Mensaje Invalido"),
});

export type type_form = z.infer<typeof schema_form>;
