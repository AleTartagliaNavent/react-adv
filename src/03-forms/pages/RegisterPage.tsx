import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'

import '../styles/styles.css'

export const RegisterPage = () => {
  const { formData, onChange, resetForm, isValidEmail, name, email, password1, password2 } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  })


  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
  }


  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && 'has-error'}`} />

        {name.trim().length <= 0 && <span>Este campo es necesario</span>}

        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`} />

        {!isValidEmail(email) && <span>Este Email no es valido</span>}

        <input
          type="password"
          name="password1"
          placeholder="password"
          value={password1}
          onChange={onChange} />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && <span>ELa contraseña debe tener 6 caracteres</span>}
        <input
          type="password"
          name="password2"
          placeholder="repeat password"
          value={password2}
          onChange={onChange} />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && <span>las contraseñas deben ser iguales</span>}
        <button type="submit">create</button>
        <button type="button" onClick={resetForm}>Reset Form</button>
      </form>
    </div>
  )
}
