import { useHookForm } from '../../Hooks/useHookForm'
import { Controller } from 'react-hook-form'
import { type type_form } from '../../Types'
import styles from './TextArea.module.css'

interface Props {
    name: keyof type_form, 
    label: string, 
    type?: string
}

function TextArea({ name, label }: Props) {
  const { control, errors } = useHookForm()
  const error = errors[name]

  return (
    <div className={styles.textarea_container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea
            {...field}
            id={name}
            placeholder="Escribe tu mensaje aquí..."
            className={`${styles.textarea} ${error ? styles.error : ''}`}
          />
        )}
      />
      {error && <span className={styles.span_error}>{error.message}</span>}
    </div>
  );
} 

export { TextArea }