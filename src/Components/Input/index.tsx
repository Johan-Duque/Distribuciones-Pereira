import { Controller, type Control, type FieldError } from "react-hook-form";
import { type type_form } from "../../Types";
import styles from "./Input.module.css";
import { IMaskInput } from "react-imask";

interface Props {
  name: keyof type_form;
  control: Control<type_form>;
  label: string;
  type?: string;
  error?: FieldError;
  placeholder?: string;
}

function Input({ name, control, label, type, error, placeholder }: Props) {
  return (
    <div className={styles.input_container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) =>
          name === "phone" ? (
            <IMaskInput
              mask="(0000) 000-0000"
              type={type}
              id={name}
              inputRef={ref}
              onAccept={onChange}
              onBlur={onBlur}
              value={value}
              className={`${styles.input} ${error ? styles.error : ""}`}
              placeholder={placeholder}
            />
          ) : (
            <input
              type={type}
              id={name}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
              className={`${styles.input} ${error ? styles.error : ""}`}
              placeholder={placeholder}
            />
          )
        }
      />
      {error && <span className={styles.span_error}>{error.message}</span>}
    </div>
  );
}

export { Input };
