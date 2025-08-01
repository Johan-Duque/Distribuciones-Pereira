import { Controller, type Control, type FieldError } from 'react-hook-form'
import { type type_form } from '../../Types'
import styles from './Input.module.css'

interface Props {
    name: keyof type_form, 
    control: Control<type_form>,
    label: string, 
    type?: string, 
    error?: FieldError
}

function Input({ name, control, label, type, error }: Props) {
  return (
    <div className={styles.input_container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            type={type}
            id={name}
            {...field}
            className={`${styles.input} ${error ? styles.error : ''}`}
          />
        )}
      />
      {error && <span className={styles.span_error}>{error.message}</span>}
    </div>
  );
} 

export { Input }