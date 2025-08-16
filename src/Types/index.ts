import z from "zod";

export const schema_form = z.object({
  name: z.string({
      required_error: "El nombre es obligatorio.",
      invalid_type_error: "El nombre debe ser texto."
    })
    .min(2, "El nombre debe tener al menos 2 caracteres.")
    .max(50, "El nombre no puede exceder los 50 caracteres.")
    .regex(/^[a-zA-Z\s]+$/, "El nombre solo puede contener letras y espacios.")
    .trim(),

  last_name: z.string({
      required_error: "El apellido es obligatorio.",
      invalid_type_error: "El apellido debe ser texto."
    })
    .min(2, "El apellido debe tener al menos 2 caracteres.")
    .max(50, "El apellido no puede exceder los 50 caracteres.")
    .regex(/^[a-zA-Z\s]+$/, "El apellido solo puede contener letras y espacios.")
    .trim(),

  email: z.string({
      required_error: "El correo electrónico es obligatorio.",
      invalid_type_error: "El correo electrónico debe ser texto."
    })
    .email("Formato de correo electrónico inválido.")
    .trim(),

  phone: z.string({
      required_error: "El teléfono es obligatorio.",
      invalid_type_error: "El teléfono debe ser texto."
    })
    .regex(/^\(0\d{3}\) \d{3}-\d{4}$/, {
      message: "El formato del teléfono debe ser (0xxx) xxx-xxxx."
    })
    .trim(),

  message: z.string({
      required_error: "El mensaje es obligatorio.",
      invalid_type_error: "El mensaje debe ser texto."
    })
    .min(10, "El mensaje debe tener al menos 10 caracteres.")
    .max(500, "El mensaje no puede exceder los 500 caracteres.")
    .trim(),
});

export type type_form = z.infer<typeof schema_form>;

export interface Product {
  img: string;
  alt_img: string;
  title: string;
  text: string;
  category: string;
}

export interface ProductsByCategory {
  Products: {
    [key: string]: Product[];
  };
}
