import { useHookForm } from "../../Hooks/useHookForm";
import { Controller } from "react-hook-form";
import { type type_form } from "../../Types";
import { IMaskInput } from "react-imask";
import styles from "./Input.module.css";

interface Props {
  name: keyof type_form;
  label: string;
  type?: string;
  placeholder?: string;
}

function Input({ name, label, type, placeholder }: Props) {
  const { control, errors } = useHookForm();
  const error = errors[name]; 

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
